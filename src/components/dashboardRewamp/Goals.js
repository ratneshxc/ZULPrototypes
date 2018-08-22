import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WalkGoal from './goals/WalkGoal';
const Goals = (props) => {
    return (
        <View style={styles.container}>
            <View style={{marginBottom:10}}>
                <Text style={{fontSize:16}}>Your Goals</Text>
            </View>
            <WalkGoal />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginTop: 5,
        padding:10
    }
})
export default Goals;