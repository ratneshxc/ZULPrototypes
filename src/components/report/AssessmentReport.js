import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ReportHeader from './ReportHeader';
import AssessmentStats from './AssesmentStats';
import AsssesmentDescription from './AssesmentDescription';
export default class AssessmentReport extends React.Component {
    goToHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>

              <ReportHeader />
              <AssessmentStats />
              <AsssesmentDescription />
                <TouchableOpacity onPress={this.goToHome}>
                    <Text>Go to Dashboard</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
    }
})