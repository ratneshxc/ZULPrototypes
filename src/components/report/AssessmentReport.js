import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import ReportHeader from './ReportHeader';
import AssesmentSummaryLayout from './AssesmentSummaryLayout';
import RecommendationPanel from './RecommendationPanel';
import ExpertsPanel from './ExpertsPanel';
import AssesmentAction from './AssesmentAction';
export default class AssessmentReport extends React.Component {

    goToDashboard=()=>{
        this.props.navigation.navigate('Home');
    }
    render() {
        return (

            <View style={styles.container}>
                <ReportHeader />
                <ScrollView style={styles.container}>
                    <AssesmentSummaryLayout />
                    <RecommendationPanel />
                    <ExpertsPanel />
                    <AssesmentAction goToDashboard={this.goToDashboard}/>

                </ScrollView>
            </View>
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
