import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    processColor
} from 'react-native';

import { BarChart } from 'react-native-charts-wrapper';

class IndicatorBarGraph extends React.Component {

    constructor() {
        super();

        this.state = {
            legend: {
                enabled: false,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5
            },
            data: {
                dataSets: [{
                    values: [{ y: 5 }, { y: 8 }, { y: 2 }, { y: 3 }, { y: 5 }, { y: 6 }, { y: 1 }],
                    label: 'Bar dataSet',
                    config: {
                        color: processColor('teal'),
                        barShadowColor: processColor('lightgrey'),
                        valueTextSize: 12,
                        valueFormatter:'# Km'
                    }
                }],

                config: {
                    barWidth: 0.7,
                }
            },
            // highlights: [{ x: 3 }, { x: 6 }],
            xAxis: {
                valueFormatter: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'],
                granularityEnabled: true,
                granularity: 1,
                drawGridLines: false
            },
            yAxis: {
                drawGridLines: false
            }
        }
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({ ...this.state, selectedEntry: null })
        } else {
            this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
        }

        console.log(event.nativeEvent)
    }


    render() {
        return (
            <View style={{ flex: 1 }}>

                {/*  <View style={{ height: 80 }}>
                     <Text> selected entry</Text>
                    <Text> {this.state.selectedEntry}</Text>
                 </View> */}


                <View style={styles.container}>
                    <BarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        animation={{ durationX: 2000 }}
                        legend={this.state.legend}
                        visibleRange={{ x: { min: 5, max: 5 } }}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        drawHighlightArrow={true}
                        onSelect={this.handleSelect.bind(this)}
                        highlights={this.state.highlights}
                        onChange={(event) => console.log(event.nativeEvent)}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        height: 250,
        padding: 5
    },
    chart: {
        flex: 1
    }
});

export default IndicatorBarGraph;