import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'native-base';
const AssesmentSubScore = (props) => {
    return (
        <Card style={styles.container}>
            <View>
                <Text style={styles.titleStyles}>{props.assessObj.title}</Text>
            </View>
            <View>
                <Text style={styles.scoreStyles}>{props.assessObj.score}%</Text>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    titleStyles: {
        color: '#353535'
    },
    scoreStyles: {
        fontSize: 20,
        color: '#353535'
    }
})
export default AssesmentSubScore;
