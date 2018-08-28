import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Card, Container, Header, Body, Left, Button, Icon, Right, Title, Content, Accordion, Badge, Segment, Item, Input } from 'native-base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;

class Goals extends Component {
    componentWillMount() {
        GoalsDetails = [
            { titleOne: "Daily 10 min meditation", contentOne: "Today's task is done", pointOne: "30 points", data: this.goalStatus }
        ];
        GoalsTwoDetails = [
            { titleOne: "Drink 3l water daily", contentOne: "2l more for the day", pointOne: "40 points", data: this.goalStatus }
        ];
    }
    constructor(props) {
        super(props);
        this.state = { toBeDone: true, Completed: false, toBeDoneStyle:'lightgray', completedStyle:'white' };
    }
    addGoal = () => {
        this.props.navigation.navigate('AddGoal');
    }
    goalStatus = () => {
        this.props.navigation.navigate('GoalStatus');
    }
    _goalCardOneHeader(dataArray, expanded) {
        return (
            <View style={{ flexDirection: "column", padding: 10, justifyContent: "space-between", backgroundColor: "white", height: 50 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 18, color: 'black', bottom: 6 }}>Save your income tax</Text>
                    {expanded
                        ? <Icon style={{ fontSize: 5 }} name='chevron-up' type="FontAwesome" style={{ color: 'black' }} />
                        : <Icon style={{ fontSize: 5 }} name='chevron-down' type="FontAwesome" style={{ color: 'black' }} />}
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: screenwidth - 70, bottom: 9 }}>
                    <Text style={{ color: 'black' }}>Level 1</Text>
                    <Text style={{ color: 'black' }}>1/3 Activity pending</Text>
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
                                <Text style={{ fontSize: 16, width: screenwidth * 2 / 3 }}>Track your daily expenses</Text>
                            </Left>
                            <Right>
                                <Text style={{ fontSize: 12 }}>60 points</Text>
                            </Right>
                        </View>
                        <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text>Log your expenses</Text>
                        </View>
                        <View>
                            <View style={{ height: 5, backgroundColor: '#4dad4a' }}></View>
                        </View>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={dataArray.data}>
                    <Card bordered style={{ flex: 1, padding: 10, flexDirection: 'column', width: screenwidth, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Left>
                                <Text style={{ fontSize: 16, width: screenwidth * 2 / 3 }}>Invest in ELSS fund</Text>
                            </Left>
                            <Right>
                                <Text style={{ fontSize: 12 }}>50 points</Text>
                            </Right>
                        </View>
                        <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text>Make a payemnt for this month</Text>
                        </View>
                        <View>
                            <View style={{ height: 5, backgroundColor: '#4dad4a' }}></View>
                        </View>
                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
    _goalCardTwoHeader(dataArray, expanded) {
        return (
            <View style={{ flexDirection: "column", padding: 10, justifyContent: "space-between", backgroundColor: "white", height: 50 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 18, color: 'black', bottom: 6 }}>Relieve stress and anger</Text>
                    {expanded
                        ? <Icon style={{ fontSize: 5 }} name='chevron-up' type="FontAwesome" style={{ color: 'black' }} />
                        : <Icon style={{ fontSize: 5 }} name='chevron-down' type="FontAwesome" style={{ color: 'black' }} />}
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: screenwidth - 70, bottom: 9 }}>
                    <Text style={{ color: 'black' }}>Level 2</Text>
                    <Text style={{ color: 'black' }}>1/2 Activity pending</Text>
                </View>
            </View>
        );
    }
    _goalCardThreeHeader(dataArray, expanded) {
        return (
            <View style={{ flexDirection: "column", padding: 10, justifyContent: "space-between", backgroundColor: "white", height: 50 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 18, color: 'black', bottom: 6 }}>Lose 4kg weight</Text>
                    {expanded
                        ? <Icon style={{ fontSize: 5 }} name='chevron-up' type="FontAwesome" style={{ color: 'black' }} />
                        : <Icon style={{ fontSize: 5 }} name='chevron-down' type="FontAwesome" style={{ color: 'black' }} />}
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: screenwidth - 70, bottom: 9 }}>
                    <Text style={{ color: 'black' }}>Level 3</Text>
                    <Text style={{ color: 'black' }}>1/1 Activity pending</Text>
                </View>
            </View>
        );
    }
    _goalCardTwoContent(dataArray) {
        return (
            <View bordered style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={dataArray.data}>
                    <Card style={{ flex: 1, padding: 10, flexDirection: 'column', width: screenwidth, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Left>
                                <Text style={{ fontSize: 16, width: screenwidth * 2 / 3 }}>{dataArray.titleOne}</Text>
                            </Left>
                            <Right>
                                <Text style={{ fontSize: 12 }}>{dataArray.pointOne}</Text>
                            </Right>
                        </View>
                        <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text>{dataArray.contentOne}</Text>
                        </View>
                        <View>
                            <View style={{ height: 5, backgroundColor: '#4dad4a' }}></View>
                        </View>
                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <ImageBackground source={require('../../assests/images/goals/Goal.jpg')} style={{ right: 5, width: windowObj.width + 20, alignSelf: 'center' }} resizeMode="cover">
                        <View style={{ backgroundColor: '#00000066', padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Item style={{ left:12, borderRadius: 30, padding: 5, height: 30, flexDirection: 'row', width: screenwidth, backgroundColor: 'white' }}>
                                    <Icon name="ios-search" />
                                    <Input placeholder="Search" />
                                    <Icon name="ios-people" />
                                </Item>
                            </View>
                            <View style={{ flexDirection: 'row'}}>
                                <AnimatedCircularProgress style={{ alignSelf: 'flex-start', padding: 10 }}
                                    size={150}
                                    width={7}
                                    fill={80}
                                    tintColor="silver"
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor="#66616b">
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
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignSelf:'center', left: 90  }}>
                                    <Badge style={{ height: 65, alignSelf: 'flex-end', backgroundColor: '#00000066' }}>
                                        <Text style={{ fontSize: 22, alignSelf: 'center', color: 'white', top: 2, fontWeight: 'bold' }}>2 Pending</Text>
                                        <Text style={{ fontSize: 22, alignSelf: 'center', color: 'white', top: 2, fontWeight: 'bold' }}>3 Total</Text>
                                    </Badge>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                        <View style={{ padding: 5, flexDirection: 'row' }}>
                            <Button style={{ backgroundColor:this.state.toBeDoneStyle }} first active={this.state.toBeDone === true} onPress={() => { this.setState({ toBeDone: true, Completed: false, toBeDoneStyle:'lightgray', completedStyle:'white' }) }}>
                                <Text style={{ padding: 5, fontWeight: 'bold' }}>Activities to be done</Text>
                            </Button>
                            <Button style={{ backgroundColor:this.state.completedStyle }} active={this.state.Completed === true} onPress={() => { this.setState({ toBeDone: false, Completed: true, toBeDoneStyle:'white', completedStyle:'lightgray' }) }}>
                                <Text style={{ padding: 5, fontWeight: 'bold' }}>Completed</Text>
                            </Button>
                        </View>
                    </View>
                    <View>
                        <Accordion
                            dataArray={[{ data: this.goalStatus }]}
                            animation={true}
                            expanded={0}
                            renderHeader={this._goalCardOneHeader}
                            renderContent={this._goalCardOneContent}
                        />
                        <Accordion
                            dataArray={GoalsDetails}
                            animation={true}
                            expanded={1}
                            renderHeader={this._goalCardTwoHeader}
                            renderContent={this._goalCardTwoContent}
                        />
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
                            <Button full onPress={this.addGoal} style={{ backgroundColor: 'white'}}>
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
