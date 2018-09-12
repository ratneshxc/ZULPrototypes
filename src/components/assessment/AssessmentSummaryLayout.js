import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Text, Badge, Card } from 'native-base';
import { connect } from 'react-redux';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import NotificationCount from '../common/header/NotificationCount';

const mapStateToProps = state => ({
    dimensionReport: state.Assessment.dimensionReport
})

const mapDispatchToProps = dispatch => ({
    showZula: () => dispatch({
        type: 'ZulaReducer_Access',
        payload: true
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

class AssessmentSummaryLayout extends Component {
    componentDidMount() {
        this.props.showZula();
    }

    getAllNotifications = () => this.props.navigation.navigate("Notification");

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
                    <Right>
                        <NotificationCount getAllNotifications={this.getAllNotifications} />
                    </Right>
                </Header>
                <Content style={styles.container}>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableHighlight style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }} onPress={() => this.props.navigation.navigate("Vitals")}>
                                <CardInfo title="VITALS" position="flex-start" data={[{ type: 'active', value: 14 }]} />
                            </TouchableHighlight>
                            <View style={{ width: 1, backgroundColor: '#ddd' }}></View>
                            <TouchableHighlight style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }} onPress={() => this.props.navigation.navigate("AssessmentList")}>
                                <CardInfo title="CHECKS" position="flex-end" data={[{ type: 'pending', value: 4 }]} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#ddd' }}></View>
                            <AnimatedCircularProgress style={{ alignSelf: 'center' }}
                                size={220}
                                width={13}
                                fill={80}
                                tintColor="#00b386"
                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                backgroundColor="#ddd">
                                {

                                    (fill) => (
                                        <View>
                                            <Text style={{ fontSize: 15, textAlign: 'center', color: '#495057' }}>{'Your wellness'.toUpperCase()}</Text>
                                            <Text style={{ fontSize: 35, textAlign: 'center', color: '#3a3a3a' }}>85%</Text>
                                            <Text style={{ fontSize: 20, textAlign: 'center', color: '#3a3a3a' }}>Very Good</Text>
                                        </View>
                                    )
                                }
                            </AnimatedCircularProgress>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#ddd' }}></View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableHighlight style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }} onPress={() => this.props.navigation.navigate("AppointmentList")}>
                                <CardInfo title="Experts" position="flex-start" data={[{ type: 'meetups', value: 3 }]} />
                            </TouchableHighlight>
                            <View style={{ width: 1, backgroundColor: '#ddd' }}></View>
                            <TouchableHighlight style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }} onPress={() => this.props.navigation.navigate("Goals")}>
                                <CardInfo title="Goals" position="flex-end" data={[{ type: 'created', value: 2 }]} />
                            </TouchableHighlight>
                        </View>
                    </Card>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.title}>{'Wellness Overview'.toUpperCase()}</Text>
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
        backgroundColor: '#f7f7f7'
    },
    title: {
        paddingHorizontal: 10,
        color: '#495057',
        fontSize: 13,
        fontWeight: 'bold'
    }
})
const CardInfo = (props) => {
    return (
        <View style={{ padding: 15, flex: 1, justifyContent: props.position, flexDirection: 'row' }}>
            <View>
                <Text style={{ fontSize: 14, color: '#495057', marginBottom: 10 }}>{props.title.toUpperCase()}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
                    {props.data.map((x, i) => (
                        <View key={i} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 40, color: '#3a3a3a' }}>{x.value}</Text>
                            <Badge style={{ backgroundColor: '#00b386' }} success>
                                <Text>{x.type}</Text>
                            </Badge>
                        </View>
                    ))}
                </View>
            </View>

        </View>
    )
}


const DimensionCard = (props) => {
    return (
        <Card style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 14, color: '#495057' }}>{props.dimension.title.toUpperCase()}</Text>
                </View>
                <View>
                    <Image style={{ width: 30, height: 30 }} source={props.dimension.icon} />
                </View>
            </View>
            <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 35, color: '#3a3a3a' }}>{props.dimension.score}</Text>
            </View>
            <View style={{ backgroundColor: '#e4e4e4' }}>
                <View style={{ height: 5, width: props.dimension.score, backgroundColor: props.dimension.progressColor }}></View>
            </View>
        </Card>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(AssessmentSummaryLayout);
