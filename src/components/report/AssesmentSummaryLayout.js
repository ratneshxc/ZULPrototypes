import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import AssesmentStats from './AssesmentStats';

export default class AssessmentSummaryLayout extends Component {
  
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <AssesmentStats />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 5,
        marginTop: 10
    },
    blocks: {
        flex: 1,
        height: Dimensions.get('window').width / 3,
        padding: 3
    }
})
