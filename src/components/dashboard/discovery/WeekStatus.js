import React, { Component } from 'react';
import { View, StyleSheet, ART, Dimensions, Text } from 'react-native';
import { Card } from 'native-base';

const {
    Surface,
    Shape,
    Group,
    Path,
    ClippingRectangle,
    LinearGradient,
    RadialGradient,
    Pattern,
    Transform
} = ART

const screenWidth = Dimensions.get('window').width;
const days = [
    { day: 'sun', happinessRate: 1 },
    { day: 'mon', happinessRate: 3 },
    { day: 'tue', happinessRate: 2 },
    { day: 'wed', happinessRate: 5 },
    { day: 'thu', happinessRate: 3 },
    { day: 'fri', happinessRate: 4 },
    { day: 'sat', happinessRate: 5 }]
const WeekStatus = () => {
    return (
        <Card style={styles.container}>
            <View style={{padding:5}}>
                <Text>Your Week : <Text style={{ fontWeight: 'bold', color: '#01d300' }}>Good</Text></Text>
            </View>
            <Surface width={screenWidth - 10} height={200}>
                <Group>
                    <Line stroke={'#000'} />
                    {days.map((x, i) => {
                        let xPos = 20 + i * ((screenWidth - 30) / 7);
                        let yPos = 150 - (10 + 26 * x.happinessRate);
                        let color;
                        switch (x.happinessRate) {
                            case 1:
                                color = '#fe1d25';
                                break;
                            case 2:
                                color = '#ff8b24';
                                break;
                            case 3:
                                color = '#fef921';
                                break;
                            case 4:
                                color = '#7fe611';
                                break;
                            case 5:
                                color = '#01d300';
                                break;
                        }
                        return (
                            <Group key={i}>
                                <Circle x={xPos} y={yPos} radius={10} fill={color} />
                                <ART.Text x={xPos} y={170} fill='#000' font={{
                                    fontFamily: 'Helvetica, Neue Helvetica, Arial',
                                    fontSize: 15,
                                    fontWeight: "normal",
                                    fontStyle: "normal"
                                }}>{x.day.toUpperCase()}</ART.Text>
                            </Group>
                        )
                    })}

                </Group>
            </Surface>
        </Card>
    )
}


class Circle extends React.Component {
    render() {
        const { radius, ...rest } = this.props

        const circle = new Path()
            .move(radius, 0)
            .arc(0, radius * 2, radius)
            .arc(0, radius * -2, radius)

        return <ART.Shape {...rest} d={circle} />
    }
}

class Line extends React.Component {
    render() {
        const { type, ...rest } = this.props

        const line = new Path()
            .move(10, 170)
            .line(screenWidth - 30, 0)

        return <ART.Shape {...rest} d={line} />
    }
}

const styles = StyleSheet.create({
    container: {
    }
})
export default WeekStatus;
