import React from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-remote-svg';
import { connect } from 'react-redux';

import StatusComponent from './StatusComponent';

const mapStateToProps = state => ({
    lowRiskIndicators: state.Dashboard.lowRiskIndicators
})

const mapDispatchToProps = dispatch => ({

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

const LowRiskIndicators = (props) => {
    let arrayGroup = chunkArray(props.lowRiskIndicators, 3)
    let arrayLength = props.lowRiskIndicators.length;
    return (
        <View>
            <View style={{ alignItems: 'center',paddingTop:5 }}>
                <Image style={{ width: 30, height: 30 }} source={require('../../../assests/images/emoji/01.svg')} />
            </View>
            <View style={styles.innerContainer}>
                {
                    arrayGroup.map((x, i) => (
                        <View style={styles.sectionRow} key={i}>
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
        </View>
    )
}
const styles = StyleSheet.create({
    innerContainer: {
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
export default connect(mapStateToProps, mapDispatchToProps)(LowRiskIndicators);