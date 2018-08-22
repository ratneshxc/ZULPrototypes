import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReportScore from '../components/ReportScore';
import AssesmentSubSectionScore from '../components/AssesmentSubSectionScore';



const OverallScore = (props) => {
    let state = {
        entries: props.stats.subsection
    }
    return (

        <View style={styles.container}>
            {/* Report section */}
            <View style={styles.reportSectionLayout}>
                <ReportScore stats={props.stats} />
            </View>
            {/* Divider Line */}
            <View style={styles.dividerLine}></View>

            {/* Score drill down section */}
            {/*TODO: Refactor below layout */}
            <View style={styles.subscoresection}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <AssesmentSubSectionScore assessObj={state.entries[0]} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <AssesmentSubSectionScore assessObj={state.entries[1]} />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <AssesmentSubSectionScore assessObj={state.entries[2]} />
                    </View>
                    <View style={{ flex: 1 }}>
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
    },
    reportSectionLayout: {
        flex: 2,
        padding: 5,
        paddingTop: 1
    },
    dividerLine: {
        width: 1,
        marginVertical: 15,
        backgroundColor: '#ddd'
    },
    subscoresection: {
        flex: 3,
        padding: 5,
        paddingTop: 1,
        flexDirection: 'column'
    }
})

export default OverallScore;