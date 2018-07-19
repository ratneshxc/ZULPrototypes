
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QuestionSection from '../assessment/QuestionSection';
import AnswerSection from '../assessment/AnswerSection';
import LikeSection from '../assessment/LikeSection';

export default class Question extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <QuestionSection />
                </View>
                <View>
                    <LikeSection />
                </View>
                
                <View style={{ flex: 1 }}>
                    <AnswerSection />
                </View>
            </View>
        );
    }
}

