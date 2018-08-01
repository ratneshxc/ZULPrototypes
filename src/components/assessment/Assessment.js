import React, { Component } from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Question from './Question';

const mapStateToProps = state => ({
    currentQuestion: state.Assessment.currentQuestion,
    questions: state.Assessment.questions,
    isNextQuestionLoading: state.Assessment.isNextQuestionLoading
})

const mapDispatchToProps = dispatch => ({
    goToQuestion: (question) => dispatch({
        type: 'AssessmentReducer_GetQuestion',
        payload: question
    }),
    //Questions Obj
    getAllQuestion: () => dispatch({
        type: 'AssessmentReducer_GetAllQuestions',
        payload: [{
            no: 8,
            statement: "Are you disappointed with the level of your sexual activity, desire and satisfaction?",
            imageURL: require('../../assests/images/satifaction-image.png'),
            options: [{
                label: 'Always', value: '1'
            }, {
                label: 'Frequently', value: '2'
            }, {
                label: 'Sometimes', value: '3'
            }, {
                label: 'Never', value: '4'
            }],
            ansType: 'single',
            progressBar: 1,
            progressBarColor: '#309830',
            likes: 154,
            selectedIndex: null
        }]
    }),
})

class Assessment extends Component {

    onSwipe(gestureName, gestureState) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        switch (gestureName) {
            case SWIPE_UP:
                break;
            case SWIPE_DOWN:
                break;
            case SWIPE_LEFT:
                if (this.props.currentQuestion.no < this.props.questions.length) {
                    this.props.goToQuestion(this.props.questions[this.props.currentQuestion.no]);
                }
                break;
            case SWIPE_RIGHT:
                if (this.props.currentQuestion.no > 1) {
                    this.props.goToQuestion(this.props.questions[this.props.currentQuestion.no - 2]);
                }
                break;
        }
    }

    goToLogin = () => {
        this.props.navigation.navigate('Login');
    }

    goToReport = () => {
        this.props.navigation.navigate('AssessmentReport');
    }

    componentWillMount() {
        this.props.getAllQuestion();
    }

    render() {
        return (
            <GestureRecognizer
                style={{ flex: 1 }}
                onSwipe={(direction, state) => this.onSwipe(direction, state)}>
                <Question onDismiss={this.onDismiss} goToReportClick={this.goToReport} goToLoginClick={this.goToLogin} />
            </GestureRecognizer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment)
