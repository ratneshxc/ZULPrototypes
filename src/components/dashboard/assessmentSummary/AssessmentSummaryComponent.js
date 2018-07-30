import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'native-base';

const AssessmentSummaryComponent = (props) => {
    return (
        <Card style={[styles.container]}>
          <View style={styles.titleContainer}>
                <Text style={{ textAlign: 'center', color: '#000000' }}>{props.assessObj.title.toUpperCase()}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', padding: 5 }}>
                <Text>You need to visit doctor today</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 2 }}><Text style={{ ...props.style,color:'#ffffff', padding: 2 }}>{props.assessObj.compPercentage}</Text></View>
                <View style={{ flex: 3, justifyContent: 'flex-end', flexDirection: 'row' }}><Text style={{ fontSize: 10, paddingHorizontal: 2 }}>{props.assessObj.remainingTime}</Text></View>
            </View>
           
          
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleContainer: {
        padding: 2
    }
})
export default AssessmentSummaryComponent;