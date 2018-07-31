import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { List } from 'native-base';
import GoalComponent from './GoalComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    goals: state.Dashboard.goals
})

const GoalSummaryLayout = (props) => {
    return (
        <View style={styles.container}>
            <View>
            <Text style={{fontSize:18,marginLeft:5}}>Goals</Text>
            </View>
            <List>
                {props.goals.map((x, i) => (
                    <GoalComponent key={i} goalObj={x} />
                ))}
            </List>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        padding: 5
    }
})
export default connect(mapStateToProps)(GoalSummaryLayout);