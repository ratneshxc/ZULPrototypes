import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableHighlight } from 'react-native';
import Tts from 'react-native-tts';
import { connect } from 'react-redux';
import Voice from 'react-native-voice';

const mapStateToProps = state => ({
    currentQuestion: state.Assessment.currentQuestion,
    questions: state.Assessment.questions
})

const mapDispatchToProps = dispatch => ({
    zulaText: (text) => dispatch({
        type: 'ZulaReducer_Text',
        payload: text
    }),
    zulaSleep: () => dispatch({
        type: 'ZulaReducer_Sleep'
    }),
    goToQuestion: (question) => dispatch({
        type: 'AssessmentReducer_GetQuestion',
        payload: question
    }),
    getAllQuestion: (questions) => dispatch({
        type: 'AssessmentReducer_GetAllQuestions',
        payload: questions
    }),
    loadingNextQuestion: (isLoading) => dispatch({
        type: 'AssessmentReducer_IsNextQuestionLoading',
        payload: isLoading
    })
})

class ZulaWakeUpbtn extends Component {

    constructor(props) {
        super(props);
        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
        Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
        Voice.onSpeechError = this.onSpeechError.bind(this);
        Voice.onSpeechResults = this.onSpeechResults.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
        Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
    }


    onSpeechStart(e) {
        this.props.zulaText("Listening...")
    }

    onSpeechRecognized(e) {
        this.props.zulaText("")
    }

    onSpeechEnd(e) {

    }

    onSpeechError(e) {
        this.props.zulaText("Not able to understand. Please try again...")
    }

    onSpeechResults(e) {
        this.props.zulaText(e.value[0])
        this.zulaAction(e.value[0])
    }

    onSpeechPartialResults(e) {
        this.props.zulaText(e.value[0]);
    }

    onSpeechVolumeChanged(e) {

    }

    async _startRecognizing(e) {
        Tts.stop();
        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error(e);
        }
    }

    async _stopRecognizing(e) {
        try {
            await Voice.stop();
        } catch (e) {
            console.error(e);
        }
    }

    async _cancelRecognizing(e) {
        try {
            await Voice.cancel();
        } catch (e) {
            console.error(e);
        }
    }
    async _destroyRecognizer(e) {
        try {
            await Voice.destroy();
        } catch (e) {
            console.error(e);
        }

    }
    wakeUpZula = () => {
        let text = 'Hello John, I am Zula, How may I help you?';
        this.zulaSpeak(text);
    }
    zulaSpeak(text) {
        Tts.getInitStatus().then(() => {
            Tts.speak(text);
        });
        this.props.zulaText(text);
    }
    selectAnswer = (index) => {
        this.props.questions[this.props.currentQuestion.no - 1].selectedIndex = index;
        this.props.getAllQuestion(this.props.questions);

        setTimeout(() => {
            this.props.loadingNextQuestion(true);
            setTimeout(() => {
                this.props.goToQuestion(this.props.questions[this.props.currentQuestion.no]);
                this.props.loadingNextQuestion(false);
            }, 200)
        }, 500)
    }

    getIndexOfOption = (text) => {
        let selectedIndex = -1;
        this.props.currentQuestion.options.map((x, i) => {
            x.label.toLowerCase() === text.toLowerCase() ? selectedIndex = i : null
        })
        return selectedIndex;
    }
    zulaAction = (ordermsg) => {
        if (ordermsg.indexOf('question') !=-1&& ordermsg.indexOf('read')!=-1) {
            this.zulaSpeak(this.props.currentQuestion.statement);
            this.zulaSpeak('The options are ,');
            this.props.currentQuestion.options.map((x) => {
                this.zulaSpeak(x.label);
            })
        } else if (ordermsg.contains('bye')) {
            this.zulaSpeak('Bye John!');
            this.props.zulaSleep();
        } else if (ordermsg.indexOf('hey')!=-1) {
            this.wakeUpZula();
        } else if (ordermsg.indexOf('select'!=-1)) {
            let selectedOption = ordermsg.split(" ");
            selectedOption.shift();
            selectedOption = selectedOption.join(" ").trim();
            let index = this.getIndexOfOption(selectedOption);
            if (index < 0) {
                this.zulaSpeak('I did not find the option');
            } else {
                this.selectAnswer(index);
                this.zulaSpeak(`${selectedOption} is selected`);
            }

        } else {
            this.zulaSpeak('I beg your pardon.');

        }
    }

    componentDidMount() {
        Tts.addEventListener('tts-start', (event) => {
            console.log(event)
        });
        Tts.addEventListener('tts-finish', (event) => {
            console.log(event)
        });
    }

   
    render() {
        return (
            <TouchableHighlight style={styles.zulaBtn} onPress={this._startRecognizing.bind(this)}>
                <Image style={styles.zula} source={require('../../assests/images/zula/zula-anim.gif')} />
            </TouchableHighlight>
        )
    }
}


const styles = StyleSheet.create({
    zulaBtn: {
        position: 'absolute',
        bottom: 50,
        right: 10,
        borderRadius: 50
    },
    zula: {
        width: 80,
        height: 80
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ZulaWakeUpbtn);