import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Text, Badge, Card } from 'native-base';
import { connect } from 'react-redux';
import Image from 'react-native-remote-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const mapStateToProps = state => ({
    dimensionReport: state.Assessment.dimensionReport
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

class AssessmentSummaryLayout extends Component {
    groupArray = chunkArray(this.props.dimensionReport, 2);
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.openDrawer() }}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Wellness</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight style={{ flex: 1 }} onPress={() => this.props.navigation.navigate("Vitals")}>
                            <CardInfo title="Vitals" data={[{ type: 'active', value: 23 }]} />
                        </TouchableHighlight>
                        <TouchableHighlight style={{ flex: 1 }} onPress={() => this.props.navigation.navigate("AssessmentList")}>
                            <CardInfo title="Assessments" data={[{ type: 'pending', value: 4 }]} />
                        </TouchableHighlight>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.title}>Overall Wellness Status</Text>
                        </View>
                        <AnimatedCircularProgress style={{ alignSelf: 'center' }}
                            size={180}
                            width={15}
                            fill={80}
                            tintColor="#4dad4a"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#ddd">
                            {

                                (fill) => (
                                    <View>
                                        <Text style={{ fontSize: 15, textAlign: 'center' }}>65%</Text>
                                        <Text style={{ fontSize: 20 }}>
                                            Excellent
                                        </Text>
                                    </View>
                                )
                            }
                        </AnimatedCircularProgress>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View>
                            <Text style={styles.title}>Wellness Dimensions</Text>
                        </View>
                        {this.groupArray.map((x, i) => (
                            <View key={i} style={{ flexDirection: 'row' }}>
                                {x.map((y, j) => (
                                    <View style={{ flex: 1 }} key={j}>
                                        <DimensionCard dimension={y} />
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    title: {
        padding: 10,
        color: '#495057'
    }
})
const CardInfo = (props) => {
    return (
        <View>
            <Card style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {props.data.map((x, i) => (
                        <View key={i} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 40 }}>{x.value}</Text>
                            <Badge success>
                                <Text>{x.type}</Text>
                            </Badge>
                        </View>
                    ))}
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center',color: '#495057' }}>{props.title}</Text>
                </View>
            </Card>
        </View>
    )
}


const DimensionCard = (props) => {
    return (
        <Card style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, color: '#495057' }}>{props.dimension.title}</Text>
                </View>
                <View>
                    <Image style={{ width: 30, height: 30 }} source={props.dimension.emoji} />
                </View>
            </View>
            <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 35 }}>{props.dimension.score}</Text>
            </View>
            <View style={{ backgroundColor: '#e4e4e4' }}>
                <View style={{ height: 5, width: props.dimension.score, backgroundColor: props.dimension.progressColor }}></View>
            </View>
        </Card>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(AssessmentSummaryLayout);
