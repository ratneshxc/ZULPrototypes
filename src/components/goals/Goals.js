import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Footer, FooterTab, Card, Container, Header, Body, Left, Button, Icon, Right, Title, Content, Accordion, Badge, Segment, Item, Input } from 'native-base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ProgressBarClassic from 'react-native-progress-bar-classic';
import GoalVideo from './GoalVideo';
import Divider from 'react-native-divider';

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;

class Goals extends Component {
    componentWillMount() {
        GoalsDetails = [
            { titleOne: "Daily 10 min meditation", contentOne: "Today's task is done", pointOne: "30 points", data: this.goalStatus, video: true }
        ];
        GoalsTwoDetails = [
            { titleOne: "Drink 5l water daily", contentOne: "2l more for the day", pointOne: "40 points", data: this.goalStatus, video: false }
        ];
    }
    constructor(props) {
        super(props);
        this.state = { toBeDone: true, Completed: false, toBeDoneStyle: 'lightgray', completedStyle: 'white' };
    }
    addGoal = () => {
        this.props.navigation.navigate('AddGoal');
    }
    goalStatus = () => {
        this.props.navigation.navigate('GoalStatus');
    }
    _goalCardOneHeader(dataArray, expanded) {
        return (
            <View style={{ flexDirection: "row", padding: 10, backgroundColor: "white", height: 60 }}>
                <View style={{ flexDirection: "column", width: 40 }}>
                    <Icon name='money' type="FontAwesome" />
                </View>
                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 18, color: 'black', bottom: 6 }}>Save your income tax</Text>
                        {expanded
                            ? <Icon name='chevron-up' type="FontAwesome" style={{ color: 'gray', fontSize: 20, alignSelf: 'flex-end', left: 30 }} />
                            : <Icon name='chevron-down' type="FontAwesome" style={{ color: 'gray', fontSize: 20, alignSelf: 'flex-end', left: 30 }} />}
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: screenwidth - 70, bottom: 9 }}>
                        <Text style={{ color: 'black' }}>Level 1</Text>
                        <Text style={{ color: 'black' }}>2/3 Activity pending</Text>
                    </View>
                </View>
            </View>
        );
    }
    _goalCardOneContent(dataArray) {
        return (
            <View bordered style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={dataArray.data}>
                    <Card style={{ flex: 1, padding: 10, flexDirection: 'column', width: screenwidth, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Left>
                                <Text style={{ fontSize: 16, width: screenwidth * 2 / 3, fontWeight: 'bold' }}>Track your daily expenses</Text>
                            </Left>
                            <Right>
                                <Text style={{ fontSize: 12 }}>60 points</Text>
                            </Right>
                        </View>
                        <View style={{ height: 20 }}><Text style={{ fontSize: 13, fontWeight: 'bold', alignSelf: 'center', top: 8 }}>Log your today's expenses</Text></View>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={dataArray.data}>
                    <Card bordered style={{ flex: 1, padding: 10, flexDirection: 'column', width: screenwidth, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Left>
                                <Text style={{ fontSize: 16, width: screenwidth * 2 / 3, fontWeight: 'bold' }}>Invest in ELSS fund</Text>
                            </Left>
                            <Right>
                                <Text style={{ fontSize: 12 }}>50 points</Text>
                            </Right>
                        </View>
                        <View style={{ height: 20 }}><Text style={{ fontSize: 13, fontWeight: 'bold', alignSelf: 'center', top: 8 }}>Pay for this month</Text></View>
                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
    _goalCardTwoHeader(dataArray, expanded) {
        return (
            <View style={{ flexDirection: "row", padding: 10, backgroundColor: "white", height: 60 }}>
                <View style={{ flexDirection: "column", width: 40 }}>
                    <Icon name='peace' type="MaterialCommunityIcons" />
                </View>
                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 18, color: 'black', bottom: 6 }}>Relieve stress and anger</Text>
                        {expanded
                            ? <Icon name='chevron-up' type="FontAwesome" style={{ color: 'gray', fontSize: 20, alignSelf: 'flex-end', left: 30 }} />
                            : <Icon name='chevron-down' type="FontAwesome" style={{ color: 'gray', fontSize: 20, alignSelf: 'flex-end', left: 30 }} />}
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: screenwidth - 70, bottom: 9 }}>
                        <Text style={{ color: 'black' }}>Level 2</Text>
                        <Text style={{ color: 'black' }}>1/2 Activity pending</Text>
                    </View>
                </View>
            </View>
        );
    }
    _goalCardThreeHeader(dataArray, expanded) {
        return (
            <View style={{ flexDirection: "row", padding: 10, backgroundColor: "white", height: 60 }}>
                <View style={{ flexDirection: "column", width: 40 }}>
                    <Icon name='walk' type="MaterialCommunityIcons" />
                </View>
                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 18, color: 'black', bottom: 6 }}>Lose 4kg weight</Text>
                        {expanded
                            ? <Icon name='chevron-up' type="FontAwesome" style={{ color: 'gray', fontSize: 20, alignSelf: 'flex-end', left: 30 }} />
                            : <Icon name='chevron-down' type="FontAwesome" style={{ color: 'gray', fontSize: 20, alignSelf: 'flex-end', left: 30 }} />}
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: screenwidth - 70, bottom: 9 }}>
                        <Text style={{ color: 'black' }}>Level 3</Text>
                        <Text style={{ color: 'black' }}>1/1 Activity pending</Text>
                    </View>
                </View>
            </View>
        );
    }
    _goalCardTwoContent(dataArray) {
        return (
            <View bordered style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                {(dataArray.video) ?
                    <GoalVideo />
                    :
                    <TouchableOpacity onPress={dataArray.data}>
                        <Card style={{ flex: 1, padding: 10, flexDirection: 'column', width: screenwidth, alignSelf: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Left>
                                    <Text style={{ fontSize: 16, width: screenwidth * 2 / 3, fontWeight: 'bold' }}>{dataArray.titleOne}</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>{dataArray.pointOne}</Text>
                                </Right>
                            </View>
                            <View style={{ height: 20 }}><Text style={{ fontSize: 13, fontWeight: 'bold', alignSelf: 'center', top: 8 }}>{dataArray.contentOne}</Text></View>
                            <View>
                                <ProgressBarClassic
                                    progress={60}
                                    label={'3L'}
                                    valueStyle={'default'}
                                />
                            </View>
                        </Card>
                    </TouchableOpacity>
                }
            </View>
        );
    }
    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <Card style={{ right: 5, width: windowObj.width + 20, alignSelf: 'center' }} resizeMode="cover">

                        <ImageBackground source={require('../../assests/images/goals/Goal.jpg')} style={{ right: 5, width: windowObj.width + 20, alignSelf: 'center' }} resizeMode="cover">
                            <View style={{ backgroundColor: '#00000066', padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

                                <View style={{ flexDirection: 'row' }}>
                                    <Item style={{ left: 18, borderRadius: 30, padding: 5, height: 40, flexDirection: 'row', width: screenwidth, backgroundColor: '#ededed' }}>
                                        <Icon name="ios-search" />
                                        <Input placeholder="Search" />
                                        <Icon name="ios-people" />
                                    </Item>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <AnimatedCircularProgress style={{ alignSelf: 'flex-start', padding: 10, left: 30 }}
                                        size={150}
                                        width={7}
                                        fill={80}
                                        tintColor="white"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="gray">
                                        {
                                            (fill) => (
                                                <View style={{ left: 10 }}>
                                                    <Text style={{ fontSize: 24, color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>
                                                        {'Level 1'}
                                                    </Text>
                                                    <Text style={{ top: 8, fontSize: 20, color: 'white', alignSelf: 'center' }}>
                                                        {'319 Points'}
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', left: 70 }}>
                                        <Badge style={{ flexDirection: 'row', height: 100, alignSelf: 'center', backgroundColor: '#00000066', width:160 }}>
                                            <View style={{ flexDirection: 'column', height: 60, alignSelf: 'center', bottom: 35}}>
                                                <Text style={{ fontSize: 60, alignSelf: 'center', color: 'white', top: 2, fontWeight: 'bold' }}>2</Text>
                                                <Text style={{ fontSize: 16,  color: 'white', fontWeight: 'bold', bottom:10 }}>Pending</Text>
                                            </View>
                                            <View style={{ right: 50, top: 60, transform: [{ rotate: '90deg' }], backgroundColor: 'white', height: 2, width: 120 }}></View>
                                            <View style={{ flexDirection: 'column', right: 90, height: 60, alignSelf: 'center', bottom: 35 }}>
                                                <Text style={{ fontSize: 60, alignSelf: 'center', color: 'white', top: 2, fontWeight: 'bold' }}>3</Text>
                                                <Text style={{ fontSize: 16,  color: 'white', fontWeight: 'bold', bottom:10 }}>Total</Text>
                                            </View>
                                        </Badge>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </Card>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                        <View style={{ padding: 5, flexDirection: 'row' }}>
                            <Button style={{ backgroundColor: this.state.toBeDoneStyle, borderBottomLeftRadius: 15, borderTopLeftRadius: 15 }} first active={this.state.toBeDone === true} onPress={() => { this.setState({ toBeDone: true, Completed: false, toBeDoneStyle: 'lightgray', completedStyle: 'white' }) }}>
                                <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 16 }}>Pending</Text>
                            </Button>
                            <Button style={{ backgroundColor: this.state.completedStyle, borderBottomRightRadius: 15, borderTopRightRadius: 15 }} active={this.state.Completed === true} onPress={() => { this.setState({ toBeDone: false, Completed: true, toBeDoneStyle: 'white', completedStyle: 'lightgray' }) }}>
                                <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 16 }}>Completed</Text>
                            </Button>
                        </View>
                    </View>
                    <View>
                        <Accordion
                            dataArray={GoalsDetails}
                            animation={true}
                            expanded={1}
                            renderHeader={this._goalCardTwoHeader}
                            renderContent={this._goalCardTwoContent}
                        />
                        <View style={{ height: 5 }}></View>
                        <Accordion
                            dataArray={[{ data: this.goalStatus }]}
                            animation={true}
                            expanded={0}
                            renderHeader={this._goalCardOneHeader}
                            renderContent={this._goalCardOneContent}
                        />
                        <View style={{ height: 5 }}></View>
                        <Accordion
                            dataArray={GoalsTwoDetails}
                            animation={true}
                            expanded={1}
                            renderHeader={this._goalCardThreeHeader}
                            renderContent={this._goalCardTwoContent}
                        />
                    </View>
                </Content>
                {(Platform.OS === 'ios') ?
                    <Footer>
                        <FooterTab>
                            <Button full onPress={this.addGoal}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Add Goal</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                    :
                    <Footer>
                        <FooterTab>
                            <Button full onPress={this.addGoal} style={{ backgroundColor: 'white' }}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Add Goal</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                }
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    questionView: {
        margin: 30,
        backgroundColor: '#00000066',
        flex: 1,
        padding: 3,
        flexDirection: 'column',
        height: 50
    }
})
export default Goals;
