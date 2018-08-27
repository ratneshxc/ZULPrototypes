

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Card, CardItem, List, ListItem, Accordion, Badge } from 'native-base';
import { CheckBox } from 'react-native-elements';
import { Container, Header, Body, Left, Button, Icon, Right, Title, Content } from 'native-base';

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;
const screenheight = windowObj.height / 3;
const GoalsDetails = [
    { titleOne: "Daily 10 min meditation", contentOne: "Today's task is done", pointOne: "30 points" }
];
const GoalsTwoDetails = [
    { titleOne: "Drink 3l water daily", contentOne: "2l more for the day", pointOne: "40 points" }
];

class Goals extends Component {
    addGoal = () => {
        this.props.navigation.navigate('AddGoal');
    }
    goalStatus = () => {
        this.props.navigation.navigate('GoalStatus');
    }
    _goalCardOneHeader(dataArray,expanded) {
        return (
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", backgroundColor: "#374252"  }}>
                <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 18, color:'white' }}>Save your income tax</Text>
                {expanded
                    ? <Icon style={{ fontSize: 5 }} name='chevron-up' type="FontAwesome" style={{ color: 'white' }} />
                    : <Icon style={{ fontSize: 5 }} name='chevron-down' type="FontAwesome" style={{ color: 'white' }} />}
            </View>
        );
    }
    _goalCardOneContent() {
        return (
            <View bordered style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                                <TouchableOpacity onPress={this.goalStatus}>
                                    <Card style={{ flex: 1, padding: 10, flexDirection: 'column', width: screenwidth }}>
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
                                <TouchableOpacity onPress={this.goalStatus}>
                                    <Card bordered style={{ flex: 1, padding: 10, flexDirection: 'column', width: screenwidth }}>
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
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", backgroundColor: "#374252"  }}>
                <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 18, color:'white' }}>Relieve stress and anger</Text>
                {expanded
                    ? <Icon style={{ fontSize: 5 }} name='chevron-up' type="FontAwesome" style={{ color: 'white' }} />
                    : <Icon style={{ fontSize: 5 }} name='chevron-down' type="FontAwesome" style={{ color: 'white' }} />}
            </View>
        );
    }
    _goalCardThreeHeader(dataArray, expanded) {
        return (
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", backgroundColor: "#374252"  }}>
                <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 18, color:'white' }}>Lose 4kg weight</Text>
                {expanded
                    ? <Icon style={{ fontSize: 5 }} name='chevron-up' type="FontAwesome" style={{ color: 'white' }} />
                    : <Icon style={{ fontSize: 5 }} name='chevron-down' type="FontAwesome" style={{ color: 'white' }} />}
            </View>
        );
    }
    _goalCardTwoContent(dataArray) {
        return (
            <View bordered style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                                <TouchableOpacity onPress={this.goalStatus}>
                                    <Card style={{ flex: 1, padding: 10, flexDirection: 'column', width: screenwidth }}>
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
                {/* <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Goals</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header> */}
                <View>
                </View>
                <Content style={styles.container}>
                    <ImageBackground source={require('../../assests/images/goals/Goal.jpg')} style={{ right: 5, width: windowObj.width + 20, alignSelf: 'center' }} resizeMode="cover">
                        <View style={{ backgroundColor: '#00000066', padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Left style={{ padding: 10 }}>
                                    <Badge style={{ backgroundColor: '#7B68EE', height: 35 }}>
                                        <Text style={{ color: 'white', top: 2, fontSize: 26, fontWeight: 'bold' }}>Level 1</Text>
                                    </Badge>
                                </Left>
                                <Right style={{ padding: 10 }}>
                                    <Badge style={{ backgroundColor: 'green', padding: 4, alignSelf: 'flex-end' }}>
                                        <Text style={{ color: 'white', top: 2, fontWeight: 'bold' }}>Search</Text>
                                    </Badge>
                                </Right>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Left style={{ padding: 10 }}>
                                    <Badge style={{ backgroundColor: '#7B68EE', height: 35 }}>
                                        <Text style={{ color: 'white', top: 2, fontSize: 26, fontWeight: 'bold' }}>314 Points</Text>
                                    </Badge>
                                </Left>
                                <Right style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
                                    <Badge style={{ backgroundColor: '#7B68EE', padding: 4, alignSelf: 'flex-end' }}>
                                        <Text style={{ color: 'white', top: 2, fontWeight: 'bold' }}>2 Pending</Text>
                                    </Badge>
                                    <Badge style={{ backgroundColor: 'green', padding: 4, alignSelf: 'flex-end' }}>
                                        <Text style={{ color: 'white', top: 2, fontWeight: 'bold' }}>1 Completed</Text>
                                    </Badge>
                                </Right>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <CheckBox
                            title={'Activities to be done'}
                            checked={true}
                            containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0 }}
                            checkedColor='#1e90ff'
                            size={20}
                            textStyle={{ fontSize: 17 }}
                        />
                        <CheckBox
                            title={'Completed'}
                            checked={false}
                            containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0 }}
                            checkedColor='#1e90ff'
                            size={20}
                            textStyle={{ fontSize: 17 }}
                        />
                    </View>
                    <View>
                        <Accordion
                            dataArray={[{}]}
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
                            <Button full onPress={this.addGoal}>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Add Goal</Text>
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
