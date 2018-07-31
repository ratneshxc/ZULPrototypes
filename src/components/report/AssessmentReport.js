import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import ReportHeader from './ReportHeader';
import AssesmentSummaryLayout from './AssesmentSummaryLayout';
export default class AssessmentReport extends React.Component {
    goToHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <ReportHeader />
                    <AssesmentSummaryLayout />
                    <TouchableOpacity onPress={this.goToHome}>
                        <Text>Go to Dashboard</Text>
                    </TouchableOpacity>
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
