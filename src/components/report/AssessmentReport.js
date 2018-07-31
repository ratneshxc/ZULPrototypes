import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import ReportHeader from './ReportHeader';
import AssesmentSummaryLayout from './AssesmentSummaryLayout';
import RecommendationPanel from './RecommendationPanel';
export default class AssessmentReport extends React.Component {


    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <ReportHeader />
                    <AssesmentSummaryLayout />
                    <RecommendationPanel />
                   
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#dddddd52'
    }
})
