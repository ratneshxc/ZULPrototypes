import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Tts from 'react-native-tts';
import { Fab, Button } from 'native-base';
import { connect } from 'react-redux';
import Voice from 'react-native-voice';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        let text = 'Hi KK, I am ZULA. How can I help you?';
        this.zulaSpeak(text);
    }
    zulaSpeak(text) {
        this.props.zulaText(text);
        Tts.speak(text);
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
        if (ordermsg.contains('question') && ordermsg.contains('read')) {
            this.zulaSpeak(this.props.currentQuestion.statement);
            this.zulaSpeak('The options are ,');
            this.zulaSpeak(this.props.currentQuestion.options[0].label);
            this.zulaSpeak(this.props.currentQuestion.options[1].label);
            this.zulaSpeak(this.props.currentQuestion.options[2].label);
            this.zulaSpeak(this.props.currentQuestion.options[3].label);
        } else if (ordermsg.contains('bye')) {
            this.zulaSpeak('Bye KK!');
            this.props.zulaSleep();
        } else if (ordermsg.contains('hey')) {
            this.wakeUpZula();
        } else if (ordermsg.contains('select')) {
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
            this.zulaSpeak('I beg your parden.');

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

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
        Tts.removeAllListeners();
    }
    render() {
        let width = Dimensions.get('screen').width / 2 - 45;
        let height = Dimensions.get('screen').height / 2 - 150;
        return (
            <Fab
                containerStyle={{}}
                style={{ backgroundColor: '#5067FF', bottom: 50 }}
                position="bottomRight"
                onPress={this._startRecognizing.bind(this)}
            >
                <Icon name="microphone" type="FontAwesome" />
            </Fab>
        )
    }
}
const styles = StyleSheet.create({
    zulaBtn: {
        zIndex: 10
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ZulaWakeUpbtn);
