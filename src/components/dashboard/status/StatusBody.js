import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import StatusComponent from './StatusComponent';

const mapStateToProps = state => ({
    wellnessStatusSummary: state.Dashboard.wellnessStatusSummary
})

const mapDispatchToProps = dispatch => ({
    showConfigModal: (value) => dispatch({
        type: 'DashboardReducer_ShowConfirationModal',
        payload: value
    })
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
    let arrayLength = props.wellnessStatusSummary.length;
    openConfigurableModal = () => {
        props.showConfigModal(true);
    }
    return (
        <TouchableWithoutFeedback onLongPress={this.openConfigurableModal}>
            <View style={styles.container}>
                {
                    arrayGroup.map((x, i) => (
                        <View style={styles.sectionRow} key={x}>
                            {x.map((n, j) => (
                                <View style={styles.section} key={j}>
                                    {j !== 0 && <View style={{ width: 0.5, backgroundColor: '#ddd', marginVertical: 10 }}></View>}
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        {i !== 0 && <View style={{ height: 0.5, backgroundColor: '#ddd', marginHorizontal: 10 }}></View>}
                                        <View style={{ padding: 10 }}><StatusComponent statusObj={n} /></View>
                                        {i >= arrayLength / 3 && <View style={{ height: 0.5, backgroundColor: '#ddd', marginHorizontal: 10 }}></View>}
                                    </View>
                                    {j !== 2 && <View style={{ width: 0.5, backgroundColor: '#ddd', marginVertical: 10 }}></View>}
                                </View>
                            ))}
                        </View>
                    ))
                }
            </View>
        </TouchableWithoutFeedback>
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
        flexDirection: 'row',
        borderColor: '#ddd'
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(StatusBody);