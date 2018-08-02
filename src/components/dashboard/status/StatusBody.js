import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import StatusComponent from './StatusComponent';

const mapStateToProps = state => ({
    wellnessStatusSummary: state.Dashboard.wellnessStatusSummary
})

const chunkArray = (myArray, chunk_size) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}

const StatusBody = (props) => {
    let arrayGroup = chunkArray(props.wellnessStatusSummary, 3)
    return (
        <View style={styles.container}>
            {
                arrayGroup.map((x, i) => (
                    <View style={styles.sectionRow} key={x}>
                        {x.map((n, j) => (
                            <View style={styles.section} key={j}>
                                <StatusComponent statusObj={n} />
                            </View>
                        ))}
                    </View>
                ))
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    sectionRow: {
        flex: 1,
        flexDirection: 'row'
    },
    section: {
        flex: 1,
        padding: 5
    }
})
export default connect(mapStateToProps)(StatusBody);