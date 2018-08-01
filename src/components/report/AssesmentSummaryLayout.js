import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import AssesmentStats from './AssesmentStats';
import AssesmentDescription from './AssesmentDescription';
import { H3 } from 'native-base';
export default class AssessmentSummaryLayout extends Component {
  
    render() {
        return (
            <View style={styles.container}>
              {/* <View style={{ flex: 1 }}>
                    <H3>Summary</H3>
                </View> */}
                <View style={{ flexDirection: 'row' }}>
                    <AssesmentStats />
                </View>
                {/* <View style={{ flexDirection: 'row' }}>
                    <AssesmentDescription />
                </View> */}
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