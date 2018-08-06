import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'native-base';
import { LineChart } from 'react-native-svg-charts'

const TrackScore = (props) => {
    let data = [30, 50, 40, 95, 100];
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={{ fontSize: 13, color: '#353535' }}>Daily Score</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', color: '#00b386' }}>30%<Icon name="arrow-up" style={{ fontSize: 20 }} /></Text>
                </View>
            </View>
            <LineChart
                style={{ height: 120 }}
                data={data}
                svg={{ strokeWidth: 3, stroke: '#5067FF' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
            </LineChart>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12 }}>5 days ago</Text>
                </View>
                <View style={{ justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 12 }}>Today</Text>
                </View>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    padding:10
    }
    
})
export default TrackScore;