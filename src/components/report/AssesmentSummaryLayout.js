import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ReportScore from './ReportScore';
import AssesmentSubSectionScore from './AssesmentSubSectionScore';



const OverallScore = (props) => {
    let state = {
        entries: [
            {
            title: 'Expresion',
            score: 70
        }, {
            title: 'Attitude',
            score: 80
        }, {
            title: 'Emotions',
            score: 90
        }, {
            title: 'Vision',
            score: 80
        }]
    }
    return (

        <View style={styles.container}>

            <View style={{ flex: 2, padding: 10, paddingTop: 1 }}>
                <ReportScore />
            </View>
            <View style={{ width: 1, marginVertical: 15, backgroundColor: '#ddd' }}></View>
            <View style={{ flex: 3, padding: 10, paddingTop: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1 ,flexDirection:'row'}}>
                    <View  style={{ flex: 1}}>
                        <AssesmentSubSectionScore assessObj={state.entries[0]} />
                    </View>
                    <View style={{ flex: 1}}>
                        <AssesmentSubSectionScore assessObj={state.entries[1]} />
                    </View>
                </View>
                <View style={{ flex: 1,flexDirection:'row' }}>
                    <View style={{ flex: 1}}>
                        <AssesmentSubSectionScore assessObj={state.entries[2]} />
                    </View>
                    <View style={{ flex: 1}}>
                        <AssesmentSubSectionScore assessObj={state.entries[3]} />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    }
})

export default OverallScore;