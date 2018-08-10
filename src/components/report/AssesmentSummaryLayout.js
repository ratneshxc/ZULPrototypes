import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ReportScore from './ReportScore';
import AssesmentSubSectionScore from './AssesmentSubSectionScore';



const OverallScore = (props) => {
    let state = {
        entries:props.stats.subsection
    }
    return (

        <View style={styles.container}>

            <View style={{ flex: 2, padding: 5, paddingTop: 1 }}>
                <ReportScore stats={props.stats} />
            </View>
            <View style={{ width: 1, marginVertical: 15, backgroundColor: '#ddd' }}></View>
            <View style={{ flex: 3, padding: 5, paddingTop: 1, flexDirection: 'column' }}>
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