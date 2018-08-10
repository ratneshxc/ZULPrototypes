import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodayScore from './TodayScore';
import RiskValue from './RiskValue';


const OverallScore = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 10 }}>
                <TodayScore />
            </View>
            <View style={{ width: 1, marginVertical: 15, backgroundColor: '#ddd' }}></View>
            <View style={{ flex: 1, padding: 10 }}>
                <RiskValue />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    }
})

export default OverallScore;