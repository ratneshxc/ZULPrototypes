
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image, processColor } from 'react-native';
import { Card, H3, Container, Content, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import assessmentDetailsData from '../../data/assessmentDetailsData';
import { LineChart } from 'react-native-charts-wrapper';

const mapStateToProps = state => ({
    currentAssessment: state.Assessment.currentAssessment
})

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width;
const screenheight = windowObj.height;

class AssessmentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedList: [],
            data: {
                $set: {
                    dataSets: [{
                        values: [{ y: 0.88 }, { y: 0.77 }, { y: 105 }, { y: 135 }],
                        label: 'Company X',
                        config: {
                            lineWidth: 2,
                            drawCircles: false,
                            highlightColor: processColor('red'),
                            color: processColor('red'),
                            drawFilled: true,
                            fillColor: processColor('red'),
                            fillAlpha: 60,
                            valueTextSize: 15,
                            valueFormatter: ["", "min", "", "max"],
                            dashedLine: {
                                lineLength: 20,
                                spaceLength: 20
                            }
                        }
                    }, {
                        values: [{ y: 90 }, { y: 130 }, { y: 100 }, { y: 105 }],
                        label: 'Company Y',
                        config: {
                            lineWidth: 1,
                            drawCubicIntensity: 0.4,
                            circleRadius: 5,
                            drawHighlightIndicators: false,
                            color: processColor('blue'),
                            drawFilled: true,
                            fillColor: processColor('blue'),
                            fillAlpha: 45,
                            circleColor: processColor('blue')
                        }
                    }, {
                        values: [{ y: 110 }, { y: 105 }, { y: 115 }, { y: 110 }],
                        label: 'Company Dashed',
                        config: {
                            color: processColor('green'),
                            drawFilled: true,
                            fillColor: processColor('green'),
                            fillAlpha: 50
                        }
                    }],
                }
            },
            xAxis: {
                $set: {
                    fontFamily: "HelveticaNeue-Medium",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4']
                }
            },
            yAxis: {
                $set: {
                    left: {
                        valueFormatter: "#.#%"
                    }
                }
            }
        }
    }
    filterobject = (reqItem) => {
        for (let item of assessmentDetailsData) {
            if (item.Category.toUpperCase() === reqItem.toUpperCase()) {
                this.setState({
                    updatedList: item
                });
            }
        }
    }
    goAssessment = () => {
        this.props.navigation.navigate('Assessment');
    }
    componentWillMount() {
        this.filterobject(this.props.currentAssessment);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <Image source={this.state.updatedList.imageURL} style={styles.Icon} />
                        <H3>{this.state.updatedList.Category}</H3>
                        <Text>{this.state.updatedList.statement}</Text>
                    </Card>
                    <Button onPress={this.goAssessment}><Text>Take Assessment</Text></Button>
                    {/* <ScrollView horizontal={true} pagingEnabled={true}>
                        <View style={{ backgroundColor: 'red', width: screenwidth, height: 300 }}>
                            <trackGraph />
                        </View>
                        <View style={{ backgroundColor: 'yellow', width: screenwidth, height: 300 }}>
                            <Text>2</Text>
                        </View>
                    </ScrollView> */}

                </Content>
            </Container>
        );
    }
}

const trackGraph = () => {
    return (
        <View>
            <LineChart
                style={styles.chart}
                data={this.state.data}
                chartDescription={{ text: '' }}
                legend={this.state.legend}
                marker={this.state.marker}
                xAxis={this.state.xAxis}
                yAxis={this.state.yAxis}
                drawGridBackground={false}
                borderColor={processColor('teal')}
                borderWidth={1}
                drawBorders={true}

                touchEnabled={true}
                dragEnabled={true}
                scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={true}
                pinchZoom={true}
                doubleTapToZoomEnabled={true}
                highlightPerTapEnabled={true}
                highlightPerDragEnabled={false}
                highlights={[{ x: 3, y: 135 }]}

                dragDecelerationEnabled={true}
                dragDecelerationFrictionCoef={0.99}
            />
        </View>
    )
}


export default connect(mapStateToProps, null)(AssessmentInfo)

const styles = StyleSheet.create({
    Icon: {
        width: 30,
        height: 30
    }
})

