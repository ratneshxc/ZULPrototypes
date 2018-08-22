
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
                
                <Content>
                    <View style={{ flex: 1 }}>
                        <QuestionSection />
                    </View>
                    <View style={{ flex: 1 }}>
                        {!this.props.isNextQuestionLoading && <AnswerSection goToReportClick={this.props.goToReportClick} />}
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <View style={{ flex: 1 }}>
                            <FooterSection goToLoginClick={this.props.goToLoginClick} />
                        </View>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }
}

export default connect(mapStateToProps)(Question);
