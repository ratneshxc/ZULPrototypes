import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import { Container, Header, Body, Left, Button, Icon, Right, Title, Content, Text, Fab, Card, Badge } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import GoalVideo from './GoalVideo';
import NotificationCount from '../common/header/NotificationCount';
import Divider from './Divider';

class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Goals: [{
                cardType: "multiple", imageURL: require('../../assests/icons/Running.png'),
                headerTitle: 'Lose 4kg weight', headerContent: '', trackStatus: 'On track', level: 'Level 1',
                goalStatus: this.goalStatus, expertNavigation: this.expertNavigation, yourGoal: this.yourGoal,
                data: [{
                    title: "Run 3 km, five days a week", content: "",
                    progressBar: true, progress: '33', totalProgess: '1km', endProgess: '3km', progressColor: '#f17e3a',
                    point: "40 points", video: false
                },
                { title: "Play badminton for 1 hour, 3 days a week", content: "", progressBar: true, progress: '66', totalProgess: '2 hour', endProgess: '3 hour', progressColor: '#00b386', point: "40 points", video: false },
                { title: "30 minutes of swimming, 3 days a week", content: "30 more mins", progressBar: true, progress: '66', totalProgess: '1 hour', endProgess: '1.5 hour', progressColor: '#00b386', point: "40 points", video: false }]
            },
            {
                cardType: "multiple", imageURL: require('../../assests/icons/buddhist-yoga-pose.png'),
                headerTitle: 'Relieve stress and anger', headerContent: '', trackStatus: 'Off track', level: 'Level 2',
                goalStatus: this.goalStatus, expertNavigation: this.expertNavigation, yourGoal: this.yourGoal,
                data: [{
                    title: "Sleep for 7-9 hours per day", content: "",
                    progressBar: true, progress: '30', totalProgess: '2 hour', endProgess: '7 hour', progressColor: '#f17e3a',
                    point: "40 points", video: false
                }, { title: "Practise pranayama for 30 minutes", content: "30 more mins", progressBar: false, progress: '', totalProgess: '', endProgess: '', point: "40 points", video: true },
                { title: "Walk in the garden for 30 minutes", content: "", progressBar: true, progress: '80', totalProgess: '20 mins', endProgess: '30 mins', progressColor: '#00b386', point: "40 points", video: false }]
            }]
        }
    }

    addGoal = () => {
        this.props.navigation.navigate('AddGoal');
    }
    goalStatus = () => {
        this.props.navigation.navigate('GoalStatus');
    }
    yourGoal = () => {
        this.props.navigation.navigate('YourGoal');
    }
    expertNavigation = () => {
        this.props.navigation.navigate('ExpertListGoals');
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
                        <NotificationCount getAllNotifications={() => this.props.navigation.navigate("NotificationGoals")} />
                    </Right>
                </Header>
                <Content style={{ backgroundColor: '#f7f7f7' }}>
                    <LevelHeader />
                    <GoalsSection Goals={this.state.Goals} />
                    <View style={{ height: 60 }}></View>
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
        <View style={{ backgroundColor: '#ffffff', padding: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 7, alignSelf: 'center' }}>
                    <View style={{ padding: 5, borderWidth: 0.8, borderColor: 'gray', borderRadius: 8, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, alignSelf: 'center', color: 'gray' }}>Level 1</Text>
                        <Icon name="angle-right" type="FontAwesome" style={{ alignSelf: 'center', color: 'gray', fontSize: 35, left: 5 }} />
                    </View>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 12 }}>
                    <Text style={{ fontSize: 23, textAlign: 'center', color: 'gray' }}>6</Text>
                    <Text style={{ fontSize: 13, textAlign: 'center', color: 'gray', paddingTop: 0 }}>{'Pending Activities'.toUpperCase()}</Text>
                    <View style={{ height: 8, backgroundColor: '#f5f5f5' }}>
                        <View style={{ height: 8, width: '70%' }}>
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} colors={['#1A2980', '#26D0CE']} >
                                <View style={{ height: 8 }}></View>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const GoalHeaderDetails = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={props.GoalsDetails.yourGoal}>
                <Image source={props.GoalsDetails.imageURL} style={{ width: 50, height: 50, marginRight: 5 }} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>{props.GoalsDetails.headerTitle}</Text>
                    </View>
                    <View><Text style={{ fontSize: 10, backgroundColor: '#00b386', color: '#fff', borderRadius: 10, alignSelf: 'flex-start', paddingLeft: 5, paddingRight: 5 }}>{props.GoalsDetails.level}</Text></View>
                </View>
            </TouchableOpacity>
            {props.GoalsDetails.trackStatus === 'On track' ?
                <View><Text style={{ fontSize: 13, backgroundColor: '#00b386', color: '#fff', borderRadius: 10, alignSelf: 'center', paddingLeft: 5, paddingRight: 5 }}>{props.GoalsDetails.trackStatus}</Text></View>
                :
                <TouchableOpacity onPress={props.GoalsDetails.expertNavigation}>
                    <View><Text style={{ fontSize: 13, backgroundColor: 'red', color: '#fff', borderRadius: 10, alignSelf: 'flex-end', paddingLeft: 5, paddingRight: 5 }}>{props.GoalsDetails.trackStatus}</Text></View>
                    <Text style={{ fontSize: 13, textDecorationLine: 'underline', color: '#696969' }}>Need expert help?</Text>
                </TouchableOpacity>
            }
        </View>
    )
}
const GoalDetails = (props) => {
    return (
        <Card style={{ padding: 5, backgroundColor: '#ffffff', marginVertical: 4 }}>
            <GoalHeaderDetails GoalsDetails={props.GoalsDetails} />
            <ActivityDetails GoalsDetails={props.GoalsDetails} />
        </Card>
    )
}
const GoalsSection = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 13, marginTop: 10, marginHorizontal: 10, color: '#495057', fontWeight: 'bold' }}>{'Your Goals'.toUpperCase()}</Text>
            <GoalDetails GoalsDetails={props.Goals[1]} />
            <GoalDetails GoalsDetails={props.Goals[0]} />
        </View>
    )
}

const ActivityDetails = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 14, marginTop: 20, paddingLeft: 5, color: 'gray' }}>{'Activities'.toUpperCase()}</Text>
            <View style={{}}>
                <MultipleActivity GoalsDetails={props.GoalsDetails} />
            </View>
        </View>
    )
}
const MultipleActivity = (props) => {
    return (
        props.GoalsDetails.data.map((x, i) => (
            x.progressBar ?
                <TouchableWithoutFeedback key={i} onPress={x.totalProgess === '1km' ? props.GoalsDetails.goalStatus : null}>
                    <View style={styles.activity}>
                        <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 10 }}>
                            <Text style={{ fontSize: 17, color: '#495057' }}>{x.title}</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', marginBottom: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{ alignSelf: 'flex-start', color: 'gray' }}>{x.content}</Text><Text style={{ alignSelf: 'flex-end', color: 'gray' }}>{x.endProgess}</Text></View>
                            <View style={{ backgroundColor: '#f5f5f5' }}>
                                <View style={{ height: 5, width: x.progress + '%', backgroundColor: x.progressColor, borderRadius: 20 }}></View>
                            </View>
                            <View>
                                <Icon name="triangle-up" type="Entypo" style={{ left: 10 * x.progress / 12.5 + '%', padding: 0, color: x.progressColor }} />
                                <Badge style={{ left: 10 * x.progress / 12.5 + '%', backgroundColor: x.progressColor, bottom: 13 }}><Text style={{ paddingBottom: 0 }}>{x.totalProgess}</Text></Badge>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <DayActivityStatus isLive="true" iconName="eercast" day="Today" />
                            <DayActivityStatus isLive="false" iconName="check-circle" day="M" />
                            <DayActivityStatus isLive="false" iconName="times-circle" day="T" />
                            <DayActivityStatus isLive="false" iconName="check-circle" day="W" />
                            <DayActivityStatus isLive="false" iconName="times-circle" day="T" />
                            <DayActivityStatus isLive="false" iconName="check-circle" day="F" />
                            <DayActivityStatus isLive="false" iconName="times-circle" day="S" />
                        </View>
                    </View>
                </TouchableWithoutFeedback> :
                x.video ?
                    <GoalVideo key={i} />
                    :
                    <View key={i} style={styles.activity}>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <Text style={{ fontSize: 18, color: '#000000' }}>{x.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 5, flexDirection: 'row' }}>
                                <Text style={{ color: 'gray' }}>{''}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <DayActivityStatus isLive="true" iconName="eercast" day="Today" />
                            <DayActivityStatus isLive="false" iconName="check-circle" day="M" />
                            <DayActivityStatus isLive="false" iconName="times-circle" day="T" />
                            <DayActivityStatus isLive="false" iconName="check-circle" day="W" />
                            <DayActivityStatus isLive="false" iconName="times-circle" day="T" />
                            <DayActivityStatus isLive="false" iconName="check-circle" day="F" />
                            <DayActivityStatus isLive="false" iconName="times-circle" day="S" />
                        </View>
                    </View>
        ))
    )
}

const DayActivityStatus = (props) => {
    return (
        props.isLive === "false" ?
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={props.iconName} type="FontAwesome" style={{ fontSize: 15, color: props.iconName == "times-circle" ? '#ce3c3e' : '#00b386' }} />
                <Text style={{ fontSize: 13, color: 'gray' }}>{props.day}</Text>
            </View>
            :
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={props.iconName} type="FontAwesome" style={{ fontSize: 15, color: props.iconName == "times-circle" ? '#ce3c3e' : '#f17e3a' }} />
                <Text style={{ fontSize: 13, color: 'gray' }}>{props.day}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    activity: {
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgray'
    }
})
export default Goals;
