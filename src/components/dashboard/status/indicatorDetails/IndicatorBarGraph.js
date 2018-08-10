import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart, Grid,XAxis } from 'react-native-svg-charts'

const IndicatorBarGraph = (props) => {
    const xAxis=['F','S','S','M','T','W','T']
    const data = [ 50, 10, 40, 95, 30, 40, 85 ]

        return (
            <View style={{ height: 200 }}>
                <BarChart
                    style={{ flex: 1 }}
                    data={ data }
                    gridMin={ 0 }
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                    <Grid/>
                </BarChart>
                <XAxis
                    style={{ marginHorizontal: 10 }}
                    data={ xAxis }
                    formatLabel={ (value, index) => xAxis[index] }
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            </View>
            )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default IndicatorBarGraph;
