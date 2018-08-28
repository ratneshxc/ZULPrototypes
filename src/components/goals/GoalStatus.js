import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground, processColor } from 'react-native';
import { Card, CardItem, Container, Header, Body, Left, Button, Icon, Right, Title, Content } from 'native-base';
import { BarChart } from 'react-native-charts-wrapper';


const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;
const screenheight = windowObj.height / 3;


class GoalStatus extends Component {
    constructor() {
        super();

        this.state = {
            legend: {
                enabled: true,
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
                    values: [{ y: 4000 }, { y: 6000 }, { y: 8000 }, { y: 2000 }, { y: 8000 }, { y: 10000 }, { y: 5000 }],
                    label: 'Steps',
                    config: {
                        color: processColor('teal'),
                        barShadowColor: processColor('lightgrey'),
                        highlightAlpha: 90,
                        highlightColor: processColor('red'),
                    }
                }],
                config: {
                    barWidth: 0.7,
                }
            },
            highlights: [{ x: 3 }, { x: 6 }],
            xAxis: {
                valueFormatter: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                granularityEnabled: true,
                granularity: 1,
            }
        };
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
            <Container>
                <View style={styles.container}>
                    <BarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        animation={{ durationX: 2000 }}
                        legend={this.state.legend}
                        gridBackgroundColor={processColor('#ffffff')}
                        visibleRange={{ x: { min: 5, max: 5 } }}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        drawHighlightArrow={true}
                        onSelect={this.handleSelect.bind(this)}
                        highlights={this.state.highlights}
                        onChange={(event) => console.log(event.nativeEvent)}
                    />
                </View>
                <Content style={styles.container}>

                    <View>
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <CardItem bordered>
                                <Left>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width:100 }}>Monday</Text>
                                    <Text style={{ fontSize: 18, left: 20 }}>4000 steps</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>60 points</Text>
                                </Right>
                            </CardItem>
                            <CardItem bordered>
                                <Left>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width:100 }}>Tuesday</Text>
                                    <Text style={{ fontSize: 18, left: 20 }}>4000 steps</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>60 points</Text>
                                </Right>
                            </CardItem>
                            <CardItem bordered>
                                <Left>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width:100 }}>Wednesday</Text>
                                    <Text style={{ fontSize: 18, left: 20 }}>4000 steps</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>60 points</Text>
                                </Right>
                            </CardItem>
                            <CardItem bordered>
                                <Left>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width:100 }}>Thursday</Text>
                                    <Text style={{ fontSize: 18, left: 20 }}>4000 steps</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>60 points</Text>
                                </Right>
                            </CardItem>
                            <CardItem bordered>
                                <Left>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width:100 }}>Friday</Text>
                                    <Text style={{ fontSize: 18, left: 20 }}>4000 steps</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>60 points</Text>
                                </Right>
                            </CardItem>
                            <CardItem bordered>
                                <Left>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width:100 }}>Saturday</Text>
                                    <Text style={{ fontSize: 18, left: 20 }}>4000 steps</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>60 points</Text>
                                </Right>
                            </CardItem>
                            <CardItem bordered>
                                <Left>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width:100 }}>Sunday</Text>
                                    <Text style={{ fontSize: 18, left: 20 }}>4000 steps</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>60 points</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                </Content>

            </Container>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    chart: {
        flex: 1
    }
})
export default GoalStatus;
