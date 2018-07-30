import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { List } from 'native-base';
import GoalComponent from './GoalComponent';
import { H3 } from 'native-base';

const GoalSummaryLayout = () => {
    return (
        <View style={styles.container}>
            <View>
                <H3>Goals</H3>
                <Text>23 out of 70 completed</Text>
            </View>
            <List>
                <GoalComponent />
                <GoalComponent />
                <GoalComponent />
            </List>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ffffff',
        marginTop:10,
        padding:5
    }
})
export default GoalSummaryLayout;