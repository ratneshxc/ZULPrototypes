import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodayScore from './TodayScore';
import TrackScore from './TrackScore';


const OverallScore = (props) => {
    data = [50, 30, 40, 95, 100];
    const contentInset = { top: 20, bottom: 20 };
    return (
        <View style={styles.container}>
            <View style={{ flex: 1,margin:5 }}>
                <TodayScore />
            </View>
            <View style={{ flex: 1,margin:5}}>
                <TrackScore />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export default OverallScore;