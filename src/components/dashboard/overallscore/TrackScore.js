import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts'

const TrackScore = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{marginBottom:10}}>Daily Score</Text>
            <LineChart
                style={{ height: 120 }}
                data={data}
                svg={{ strokeWidth: 5, stroke: '#5067FF' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
            </LineChart>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 5
    }
})
export default TrackScore;