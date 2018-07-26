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
            no: 1,
            statement: "How often have you fallen ill in the past year?",
            imageURL: require('../../assests/images/illness-image.png'),
            options: [{
                label: 'More than 15 times', value: '1'
            }, {
                label: '10 to 15 times', value: '2'
            }, {
                label: '5 to 10 times', value: '3'
            }, {
                label: '1 to 2 times', value: '4'
            }],
            ansType: 'single',
            progressBar: 0,
            progressBarColor: '#ff2626',
            likes: 25,
            selectedIndex: null
        }, {
            no: 2,
            statement: "What do you do on a daily basis to ensure that you stay healthy?",
            imageURL: require('../../assests/images/health-image.png'),
            options: [{
                label: 'I exercise', value: '1'
            }, {
                label: 'I eat right', value: '2'
            }, {
                label: 'I sleep right', value: '3'
            }, {
                label: 'I do not do anything', value: '4'
            }],
            ansType: 'single',
            progressBar: 0.2,
            progressBarColor: '#ff2626',
            likes: 50,
            selectedIndex: null
        }, {
            no: 3,
            statement: "Do you spend more time working than socializing or pursuing a hobby?",
            imageURL: require('../../assests/images/hobby-image.png'),
            options: [{
                label: 'Never', value: '1'
            }, {
                label: 'Sometimes', value: '2'
            }, {
                label: 'Frequently', value: '3'
            }, {
                label: 'Always', value: '4'
            }],
            ansType: 'single',
            progressBar: 0.4,
            progressBarColor: '#f75f3c',
            likes: 35,
            selectedIndex: null
        }, {
            no: 4,
            statement: "Are you aware of things that you are passionate about?",
            imageURL: require('../../assests/images/passion-image.png'),
            options: [{
                label: 'I do not find anything that I am passionate about', value: '1'
            }, {
                label: 'I am still finding the things that I am passionate about', value: '2'
            }, {
                label: 'I am trying to pursue my passion', value: '3'
            }, {
                label: 'Yes, I am pursuing my passion', value: '4'
            }],
            ansType: 'single',
            progressBar: 0.5,
            progressBarColor: '#f75f3c',
            likes: 55,
            selectedIndex: null
        }, {
            no: 5,
            statement: "Are you troubled or saddened by day to day activities?",
            imageURL: require('../../assests/images/dioppointed-image.png'),
            options: [{
                label: 'All the time', value: '1'
            }, {
                label: 'More than half the time', value: '2'
            }, {
                label: 'Less than half the time', value: '3'
            }, {
                label: 'Not at all', value: '4'
            }],
            ansType: 'single',
            progressBar: 0.6,
            progressBarColor: '#e0a012',
            likes: 85,
            selectedIndex: null
        }, {
            no: 6,
            statement: "Are you disappointed with yourself?",
            imageURL: require('../../assests/images/sad-image.png'),
            options: [{
                label: 'I am always disappointed with myself', value: '1'
            }, {
                label: 'I am disappointed frequently when I cannot reach personal goals', value: '2'
            }, {
                label: 'Sometimes when my expectations are not met', value: '3'
            }, {
                label: 'I am never disappointed as success and failure are both part of life', value: '4'
            }],
            ansType: 'single',
            progressBar: 0.7,
            progressBarColor: '#e0a012',
            likes: 5,
            selectedIndex: null
        }, {
            no: 7,
            statement: "How is your interaction with family and friends?",
            imageURL: require('../../assests/images/family-image.png'),
            options: [{
                label: 'I dont like talking to people', value: '1'
            }, {
                label: 'I have very limited conversation', value: '2'
            }, {
                label: 'I hesitate to make conversation', value: '3'
            }, {
                label: 'I am friendly with everyone', value: '4'
            }],
            ansType: 'single',
            progressBar: 0.9,
            progressBarColor: '#309830',
            likes: 25,
            selectedIndex: null
        }, {
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

    componentWillMount() {
        this.props.getAllQuestion();
    }

    render() {
        return (
            <GestureRecognizer
                style={{ flex: 1 }}
                onSwipe={(direction, state) => this.onSwipe(direction, state)}>
                <Question onDismiss={this.onDismiss} goToLoginClick={this.goToLogin} />
            </GestureRecognizer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment)
