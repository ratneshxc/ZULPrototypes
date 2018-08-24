

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Card, CardItem, List, ListItem, Badge } from 'native-base';
import { CheckBox } from 'react-native-elements'
import { Container, Header, Body, Left, Button, Icon, Right, Title, Content } from 'native-base';

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;
const screenheight = windowObj.height / 3;

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
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Goals</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <View>
                </View>
                <Content style={styles.container}>
                    <ImageBackground source={require('../../assests/images/goals/Goal.jpg')} style={{ right: 5, width: windowObj.width + 20, alignSelf: 'center' }} resizeMode="cover">
                        <View style={{ backgroundColor: '#00000066', padding:10, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
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
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <View style={{ padding: 10 }}>
                                <Title style={{ alignSelf: 'flex-start' }}>Save your income tax</Title>
                            </View>
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
                        </Card>
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <View style={{ padding: 10 }}>
                                <Title style={{ alignSelf: 'flex-start' }}>Relieve stress and anger</Title>
                            </View>
                            <View bordered style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            
                                <TouchableOpacity onPress={this.goalStatus}> 
                                <Card style={{ flex: 1, padding: 10, flexDirection: 'column', width: screenwidth }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Left>
                                            <Text style={{ fontSize: 16, width: screenwidth * 2 / 3 }}>Daily 10 min meditation</Text>
                                        </Left>
                                        <Right>
                                            <Text style={{ fontSize: 12 }}>30 points</Text>
                                        </Right>
                                    </View>
                                    <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'center' }}>
                                        <Text>Body</Text>
                                    </View>
                                    <View>
                                        <View style={{ height: 5, backgroundColor: '#4dad4a' }}></View>
                                    </View>
                                </Card>
                                </TouchableOpacity>
                            </View>
                        </Card>
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <View style={{ padding: 10 }}>
                                <Title style={{ alignSelf: 'flex-start' }}>Lose 4 kg weight</Title>
                            </View>
                            <View bordered style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <TouchableOpacity onPress={this.goalStatus}> 
                                <Card style={{ flex: 1, padding: 10, flexDirection: 'column', width: screenwidth }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Left>
                                            <Text style={{ fontSize: 16, width: screenwidth * 2 / 3 }}>Drink 3l water daily</Text>
                                        </Left>
                                        <Right>
                                            <Text style={{ fontSize: 12 }}>10 points</Text>
                                        </Right>
                                    </View>
                                    <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'center' }}>
                                        <Text>2l more for the day</Text>
                                    </View>
                                    <View>
                                        <View style={{ height: 5, backgroundColor: '#4dad4a' }}></View>
                                    </View>
                                </Card>
                                </TouchableOpacity>
                            </View>
                        </Card>
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
