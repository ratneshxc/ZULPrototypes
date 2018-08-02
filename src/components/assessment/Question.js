
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QuestionSection from './QuestionSection';
import AnswerSection from './AnswerSection';
import FooterSection from './FooterSection';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isNextQuestionLoading: state.Assessment.isNextQuestionLoading
})


class Question extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <QuestionSection />
                </View>
                <View style={{ flex: 1 }}>
                    {!this.props.isNextQuestionLoading && <AnswerSection goToReportClick={this.props.goToReportClick} />}
                </View>
                <FooterSection goToLoginClick={this.props.goToLoginClick} />

            </View>
        );
    }
}

export default connect(mapStateToProps)(Question);
