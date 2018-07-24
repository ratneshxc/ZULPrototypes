
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QuestionSection from '../assessment/QuestionSection';
import AnswerSection from '../assessment/AnswerSection';
import FooterSection from './FooterSection';


export default class Question extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <QuestionSection />
                </View>
                <View style={{ flex: 1 }}>
                    <AnswerSection />
                </View>
                <FooterSection goToLoginClick={this.props.goToLoginClick} />

            </View>
        );
    }
}

