import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {H2} from 'native-base';
import AssessmentSummaryLayout from './assessmentSummary/AssessmentSummaryLayout';
import GoalSummaryLayout from './goalSummary/GoalSummaryLayout';
import DiscoverLayout from './discovery/DiscoverLayout';
import NewsFeeds from './newsFeeds/NewsFeeds';

const mapDispatchToProps = dispatch => ({
    getAssessmentSummary: () => dispatch({
        type: 'DashboardReducer_GetAssessmentDetails',
        payload: {
            physical: {
                title: 'Physical',
                remainingTime: '2 days ago',
                compPercentage: '25%'
            },
            emotional: {
                title: 'Emotional',
                remainingTime: '5 days ago',
                compPercentage: '35%'
            },
            social: {
                title: 'Social',
                remainingTime: '65 days ago',
                compPercentage: '65%'
            },
            occupational: {
                title: 'Occupational',
                remainingTime: '83 days ago',
                compPercentage: '85%'
            },
            spiritual: {
                title: 'Spiritual',
                remainingTime: '73 days ago',
                compPercentage: '21%'
            },
            intellectual: {
                title: 'Intellectual',
                remainingTime: '32 days ago',
                compPercentage: '30%'
            },
            financial: {
                title: 'Financial',
                remainingTime: '25 days ago',
                compPercentage: '91%'
            },
            environmental: {
                title: 'Environmental',
                remainingTime: '20 days ago',
                compPercentage: '65%'
            }
        }
    })
})


class Dashboard extends React.Component {
    componentWillMount() {
        this.props.getAssessmentSummary();
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                <H2 style={{color:'#ffffff'}}>ZingUpLife</H2>
                </View>
                <AssessmentSummaryLayout />
                <GoalSummaryLayout />
                <DiscoverLayout />
                <NewsFeeds />
            </ScrollView>
        )
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#dddddd52'
    },
    header:{
        backgroundColor: '#5067FF',
        padding:10
    }
})
