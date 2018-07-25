import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { ActionSheet, Root } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import TutorialModal from './TutorialModal';

var BUTTONS = [
    { text: "Give feedback on this question", icon: "flag" },
    { text: "Report", icon: "flag", iconColor: "#fa213b" },
    { text: "Quit the assessment", icon: "close" },
    { text: "Cancel", icon: "close" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const mapStateToProps = state => ({
    currentQuestion: state.Assessment.currentQuestion,
    questions: state.Assessment.questions
})

const mapDispatchToProps = dispatch => ({
    goToQuestion: (question) => dispatch({
        type: 'AssessmentReducer_GetQuestion',
        payload: question
    }),
    loadingNextQuestion: (isLoading) => dispatch({
        type: 'AssessmentReducer_IsNextQuestionLoading',
        payload: isLoading
    }),
    openTutorialModal: () => dispatch({
        type: 'TutorialReducer_TutorialVisible',
        payload: true
    })
})


class FooterSection extends React.Component {
    constructor() {
        super();
        this.state = {
            iconColor: '#000000'
        }
    }

    iconClickHandler = () => {
        this.setState({
            iconColor: this.state.iconColor === '#000000' ? '#ff0000' : '#000000'
        })
    }
    goToNextQuestion = () => {
        setTimeout(() => {
            this.props.loadingNextQuestion(true);
            setTimeout(() => {
                this.props.goToQuestion(this.props.questions[this.props.currentQuestion.no]);
                this.props.loadingNextQuestion(false);
            }, 200)
        }, 500)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.comment}>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Write a Comment...</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={this.props.openTutorialModal}>
                        <Icon name="info-circle" size={25} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.iconClickHandler}>
                        <Icon name="heart" size={25} color={this.state.iconColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() =>
                        ActionSheet.show(
                            {
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,
                                destructiveButtonIndex: DESTRUCTIVE_INDEX,

                            },
                            buttonIndex => {
                                this.setState({ clicked: BUTTONS[buttonIndex] });
                                if (BUTTONS[buttonIndex].text === 'Quit the assessment')
                                    Alert.alert(
                                        'Quit Assessment',
                                        'Are you sure you want to exit from wellness assessment?',
                                        [
                                            { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                            { text: 'Yes', onPress: () => this.props.goToLoginClick() },
                                        ],
                                        { cancelable: false }
                                    )
                            }
                        )}>
                        <Icon name="ellipsis-v" size={25} color="#000000" />
                    </TouchableOpacity>
                </View>
                <TutorialModal />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterSection)


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    comment: {
        flex: 1
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    btn: {
        padding: 10,
        marginHorizontal: 5
    }
})