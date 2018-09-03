import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Body, Left, Button, Icon, Right, Title, Content, Text, Fab, Badge, Card } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Image from 'react-native-remote-svg';
import StepIndicator from 'react-native-step-indicator';



class Goals extends Component {
   
    addGoal = () => {
        this.props.navigation.navigate('AddGoal');
    }
    goalStatus = () => {
        this.props.navigation.navigate('GoalStatus');
    }
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
                        <Title>Your Goals</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content>
                    <LevelHeader />
                    <GoalsSection />
                </Content>
                <Fab
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomLeft"
                    onPress={this.addGoal}>
                    <Icon name="plus" type="FontAwesome" />
                </Fab>
            </Container>
        )
    }
}


const LevelHeader = () => {
    return (
        <View style={{ backgroundColor: '#f5f5f5', padding: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <LinearGradient colors={['#63E2FF', '#B066FE']} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} style={{ borderRadius: 40, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5 }} >
                        <Text style={{ color: '#fff', fontSize: 25, marginRight: 10 }}>Level 1</Text>
                        <Icon name="angle-right" type="FontAwesome" style={{ color: '#fff' }} />
                    </LinearGradient>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 25, textAlign: 'center' }}>23</Text>
                    <Text style={{ fontSize: 13, textAlign: 'center' }}>{'Pending Activities'.toUpperCase()}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18 }}>30 points in 30 days</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 8, backgroundColor: '#fff', marginTop: 10 }}>
                        <View style={{ height: 8, width: '70%' }}>
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} colors={['#63E2FF', '#B066FE']} >
                                <View style={{ height: 8 }}></View>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const GoalDetails = () => {
    return (
        <Card style={{ padding: 5, backgroundColor: '#f5f5f5', marginVertical: 4 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image source={require('../../assests/icons/Running.svg')} style={{ width: 50, height: 50 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18 }}>Loose 15 Kg Weight</Text>
                        <Text style={{ fontSize: 12 }}>Started 20 days ago</Text>
                    </View>
                </View>
                <View>
                    <Badge success small>
                        <Text>On Track</Text>
                    </Badge>
                </View>
            </View>
            <ActivityDetails />
        </Card>
    )
}

const GoalsSection = () => {
    return (
        <View>
            <Text style={{ fontSize: 13, marginVertical: 10, marginHorizontal: 10 }}>{'Your Goals'.toUpperCase()}</Text>
            <GoalDetails />
            <GoalDetails />
        </View>
    )
}

const labels = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}

const ActivityDetails = () => {
    return (
        <View>
            <Text style={{ fontSize: 11, marginVertical: 10 }}>{'Activities'.toUpperCase()}</Text>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={3}
                labels={labels}
            />
            <View style={{}}>
                <Activity />
                <Activity />
                <Activity />
                <Activity />
            </View>
        </View>
    )
}

const Activity = () => {
    return (
        <Card style={{ padding: 5, backgroundColor: '#fff', marginVertical: 2 }}>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ fontSize: 17 }}>Run 5 Km daily</Text>
            </View>
            <View>
                <Text style={{ fontSize: 11, marginBottom: 5 }}>{"Today".toUpperCase()}</Text>
                <View style={{ backgroundColor: '#ddd' }}>
                    <View style={{ height: 5, width: '20%', backgroundColor: '#ce3c3e' }}></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 12, fontStyle: 'italic' }}>Completed <Text style={{ fontWeight: 'bold' }}>1Km</Text></Text>
                </View>
            </View>
            <Text style={{ fontSize: 11 }}>{"week".toUpperCase()}</Text>
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                <DayActivityStatus iconName="check-circle" day="M" />
                <DayActivityStatus iconName="times-circle" day="T" />
                <DayActivityStatus iconName="check-circle" day="W" />
                <DayActivityStatus iconName="times-circle" day="T" />
                <DayActivityStatus iconName="check-circle" day="F" />
                <DayActivityStatus iconName="times-circle" day="S" />
                <DayActivityStatus iconName="check-circle" day="Today" />
            </View>

        </Card>
    )
}

const DayActivityStatus = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name={props.iconName} type="FontAwesome" style={{ fontSize: 15, color: props.iconName == "times-circle" ? '#ce3c3e' : '#00b386' }} />
            <Text style={{ fontSize: 13 }}>{props.day}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default Goals;
