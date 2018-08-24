import React, { Component } from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Question from './Question';
import QuestionData from '../../data/strengthAndEnergyData';
import biologicalAgeData from '../../data/biologicalAgeData';
import dietScoreData from '../../data/dietScoreData';
import relationshipAndIntimacyData from '../../data/relationshipAndIntimacyData';
import thoughtControlData from '../../data/thoughtControlData';
import wholesomeness from '../../data/wholesomeness';
import zestForLifeData from '../../data/zestForLifeData';

const mapStateToProps = state => ({
    currentQuestion: state.Assessment.currentQuestion,
    questions: state.Assessment.questions,
    isNextQuestionLoading: state.Assessment.isNextQuestionLoading,
    currentAssessment: state.Assessment.currentAssessment
})

const mapDispatchToProps = dispatch => ({
    goToQuestion: (question) => dispatch({
        type: 'AssessmentReducer_GetQuestion',
        payload: question
    }),
    //Questions Obj
    getAllQuestion: (data) => dispatch({
        type: 'AssessmentReducer_GetAllQuestions',
        payload: data
    }),
    getCurrentQuestion: (data) => dispatch({
        type: 'AssessmentReducer_GetQuestion',
        payload: data
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

    quitAssessment = () => {
        this.props.navigation.navigate('AssessmentList');
    }

    goToReport = () => {
        this.props.navigation.navigate('AssessmentReport');
    }


    componentWillMount() {
        let questions = null;
        let question = null;
        switch (this.props.currentAssessment.toUpperCase()) {
            case 'Strength & Energy'.toUpperCase():
                question = QuestionData[0];
                questions = QuestionData;
                break;
            case 'BIOLOGICAL AGE'.toUpperCase():
                question = biologicalAgeData[0];
                questions = biologicalAgeData;
                break;
            case 'Diet Score'.toUpperCase():
                question = dietScoreData[0];
                questions = dietScoreData;
                break;
            case 'Relationship & Intimacy'.toUpperCase():
                question = relationshipAndIntimacyData[0];
                questions = relationshipAndIntimacyData;
                break;
            case 'Thought Control'.toUpperCase():
                question = thoughtControlData[0];
                questions = thoughtControlData;
                break;
            case 'Wholesomeness'.toUpperCase():
                question = wholesomeness[0];
                questions = wholesomeness;
                break;
            case 'Zest For Life'.toUpperCase():
                question = zestForLifeData[0];
                questions = zestForLifeData;
                break;
        }
        this.props.getAllQuestion(questions);
        this.props.getCurrentQuestion(question);
    }

    render() {
        return (
            <GestureRecognizer
                style={{ flex: 1 }}
                onSwipe={(direction, state) => this.onSwipe(direction, state)}>
                <Question onDismiss={this.onDismiss} goToReportClick={this.goToReport} quitAssessment={this.quitAssessment} />
            </GestureRecognizer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment)
