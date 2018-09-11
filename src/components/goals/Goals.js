import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Body, Left, Button, Icon, Right, Title, Content, Text, Fab, Card } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import GoalVideo from './GoalVideo';
import NotificationCount from '../common/header/NotificationCount';
import Divider from './Divider';

class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Goals: [{
                cardType: "multiple", imageURL: require('../../assests/icons/piggy-bank.png'),
                headerTitle: 'Save 35k income tax', headerContent: 'Started 54 days ago', trackStatus: 'On track', level: 'Level 2',
                data: [{
                    title: "Track your daily expenses", content: "₹ 15,578 expense for this month",
                    progressBar: true, progress: '60', totalProgess: '₹ 2,87,539', endProgess: '1 year',
                    point: "40 points"
                },
                { title: "Invest in ELSS fund", content: "Pay for this month", progressBar: false, progress: '', totalProgess: '', endProgess: '', point: "40 points" }]
            },
            { cardType: "single", goalStatus: this.goalStatus, expertNavigation: this.expertNavigation, yourGoal: this.yourGoal, imageURL: require('../../assests/icons/Running.png'), headerTitle: 'Lose 4kg weight', headerContent: 'Started 20 days ago', trackStatus: 'Off track', level: 'Level 1', title: "Run 2km daily", content: "0.6km more for the day", contentStatus: 'Completed', contentStatusData: '1km', video: false, point: "30 points" },
            { cardType: "single", imageURL: require('../../assests/icons/buddhist-yoga-pose.png'), headerTitle: 'Relieve stress and anger', headerContent: 'Started 5 days ago', trackStatus: 'On track', level: 'Level 1', title: "Watch this video to complete your activity", content: "Today's task is done", video: true, point: "30 points" }
            ]
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
                <Content style={{ backgroundColor: '#F5FCFF' }}>
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
                <View style={{ flex: 3 }}>
                    {/* <LinearGradient colors={['gray', 'lightgray']} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} style={{ borderRadius: 40, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5 }} >
                        <Text style={{ color: '#fff', fontSize: 25, marginRight: 10 }}>Level 1</Text>
                        <Icon name="angle-right" type="FontAwesome" style={{ color: '#fff', alignSelf: 'center' }} />
                    </LinearGradient> */}
                    <View style={{ padding:5, borderWidth:0.8 ,borderColor:'gray', borderRadius:15, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 25, alignSelf: 'center', color:'gray' }}>Level 1</Text>
                        <Icon name="angle-right" type="FontAwesome" style={{ alignSelf: 'center', color:'gray' }} />
                    </View>
                </View>
                <View style={{ flex: 3 }}></View>
                <View style={{ flex: 4 }}>
                    <Text style={{ fontSize: 25, textAlign: 'center', color:'gray' }}>23</Text>
                    <Text style={{ fontSize: 13, textAlign: 'center', color:'gray' }}>{'Pending Activities'.toUpperCase()}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, color:'gray' }}>30 points in 30 days</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 8, backgroundColor: '#f5f5f5', marginTop: 10 }}>
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
                    <View><Text style={{ fontSize: 13, backgroundColor: '#ce3c3e', color: '#fff', borderRadius: 10, alignSelf: 'flex-end', paddingLeft: 5, paddingRight: 5 }}>{props.GoalsDetails.trackStatus}</Text></View>
                    <Text style={{ fontSize: 13, color: '#696969' }}>Need expert help?</Text>
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

            {/* <Accordion
                dataArray={props.GoalsDetails}
                animation={true}
                expanded={1}
                renderHeader={this.GoalHeaderDetails}
                renderContent={this.ActivityDetails}
            />  */}
        </Card>
    )
}
const GoalsSection = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 13, marginVertical: 10, marginHorizontal: 10, color: '#495057', fontWeight: 'bold' }}>{'Your Goals'.toUpperCase()}</Text>
            <GoalDetails GoalsDetails={props.Goals[2]} />
            <GoalDetails GoalsDetails={props.Goals[1]} />
            <GoalDetails GoalsDetails={props.Goals[0]} />
        </View>
    )
}

const ActivityDetails = (props) => {
    return (
        <View>
            {/* <Divider borderColor="gray" color="gray" orientation="left">
                            <Text style={{ fontSize: 14, color: 'black' }}>{'Activities'.toUpperCase()}</Text>
                        </Divider> */}
            <Text style={{ fontSize: 14, marginTop: 10, padding: 5, color: 'gray' }}>{'Activities'.toUpperCase()}</Text>
            <View style={{}}>
                {props.GoalsDetails.cardType === 'single' ?
                    <Activity GoalsDetails={props.GoalsDetails} /> :
                    <MultipleActivity GoalsDetails={props.GoalsDetails} />
                }
            </View>
        </View>
    )
}

const Activity = (props) => {
    return (
        props.GoalsDetails.video ? <GoalVideo /> :
            <TouchableOpacity onPress={props.GoalsDetails.goalStatus}>
                <View style={styles.activity}>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text style={{ fontSize: 18, color: '#696969' }}>{props.GoalsDetails.title}</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{ alignSelf: 'flex-start', color: 'gray' }}>1.2km more for the day</Text><Text style={{ alignSelf: 'flex-end', color: 'gray' }}>2km</Text></View>
                        <View style={{ backgroundColor: '#f5f5f5', borderRadius: 20, borderWidth: 1.5, borderColor: 'lightgray' }}>
                            <View style={{ height: 22, width: '45%', backgroundColor: '#f17e3a', borderRadius: 20 }}><Text style={{ left: '70%', color: 'white' }}>0.8km</Text></View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <DayActivityStatus isLive="true" iconName="eercast" day="Today" />
                        <DayActivityStatus isLive="false" iconName="check-circle" day="M" />
                        <DayActivityStatus isLive="false" iconName="times-circle" day="T" />
                        <DayActivityStatus isLive="false" iconName="check-circle" day="W" />
                        <DayActivityStatus isLive="false" iconName="times-circle" day="T" />
                        <DayActivityStatus isLive="false" iconName="check-circle" day="F" />
                        <DayActivityStatus isLive="false" iconName="times-circle" day="S" />
                    </View>
                </View>
            </TouchableOpacity>
    )
}
const MultipleActivity = (props) => {
    return (
        props.GoalsDetails.data.map((x, i) => (
            x.progressBar ?
                <View key={i} style={styles.activity}>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ fontSize: 18, color: '#696969' }}>{x.title}</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 4 }}><Text style={{ alignSelf: 'flex-start', color: 'gray' }}>{x.content}</Text><Text style={{ alignSelf: 'flex-end', color: 'gray' }}>{x.endProgess}</Text></View>
                        <View style={{ backgroundColor: '#f5f5f5', borderRadius: 20, borderWidth: 1.5, borderColor: 'lightgray' }}>
                            <View style={{ height: 22, width: x.progress + '%', backgroundColor: '#f17e3a', borderRadius: 20 }}><Text style={{ left: 12 * x.progress / 11.6 + '%', color: 'white' }}>{x.totalProgess}</Text></View>
                        </View>
                    </View>
                </View> :
                <View key={i} style={styles.activity}>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text style={{ fontSize: 18, color: '#696969' }}>{x.title}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <View style={{ flex: 2 }}></View> */}
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            {/* <Icon name="check" type="FontAwesome" style={{ fontSize: 20, color: '#00b386' }} /> */}
                            <Text style={{ color: 'gray' }}>{'Pay for this month'}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <DayActivityStatus isLive="true" iconName="eercast" day="Jan" />
                        <DayActivityStatus isLive="false" iconName="check-circle" day="Dec" />
                        <DayActivityStatus isLive="false" iconName="check-circle" day="Nov" />
                        <DayActivityStatus isLive="false" iconName="check-circle" day="Oct" />
                        <DayActivityStatus isLive="false" iconName="check-circle" day="Sep" />
                        <DayActivityStatus isLive="false" iconName="check-circle" day="Aug" />
                        <DayActivityStatus isLive="false" iconName="check-circle" day="Jul" />
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
        marginVertical: 2,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgray'
    }
})
export default Goals;
