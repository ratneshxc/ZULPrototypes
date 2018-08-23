import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QuestionSection from './QuestionSection';
import AnswerSection from './AnswerSection';
import FooterSection from './FooterSection';
import { connect } from 'react-redux';
import { Header, Footer, FooterTab, Left, Right, Body, Button, Container, Content } from 'native-base';
import QuestionHeader from './QuestionHeader';

const mapStateToProps = state => ({
    currentQuestion: state.Assessment.currentQuestion,
    isNextQuestionLoading: state.Assessment.isNextQuestionLoading
})



class Question extends Component {

    render() {
        const currentQuestion = this.props.currentQuestion;
        return (
            <Container>
                <QuestionHeader currentQuestion={currentQuestion} />

                <View style={{ flex: 2 }}>
                    <QuestionSection />
                </View>
                <View style={{ flex: 3 }}>
                    {!this.props.isNextQuestionLoading && <AnswerSection goToReportClick={this.props.goToReportClick} />}
                </View>
                <View>
                    <FooterSection quitAssessment={this.props.quitAssessment} />
                </View>

            </Container>
        );
    }
}

export default connect(mapStateToProps)(Question);
