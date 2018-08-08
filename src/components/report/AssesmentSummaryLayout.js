import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import TodayScore from '../dashboard/overallscore/TodayScore';
import TrackScore from '../dashboard/overallscore/TrackScore';



const OverallScore = (props) => {
    return (

        <View style={styles.container}>

            <View style={{ flex: 1, padding: 10,paddingTop:1 }}>
                <TodayScore />
            </View>
            <View style={{ width: 1, marginVertical: 15, backgroundColor: '#ddd' }}></View>
            <View style={{ flex: 1, padding: 10,paddingTop:1 }}>
                <TrackScore />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    }
})

export default OverallScore;