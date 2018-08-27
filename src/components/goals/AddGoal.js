import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Header, Button, Title, Container, Icon, Content, Footer, FooterTab, Card, CardItem, List, ListItem, Badge, Item, Input, Right, Left, Body } from 'native-base';

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;

class AddGoal extends Component {
    goToYourAddGoal = () => {
        this.props.navigation.navigate('YourGoal');
    }
    render() {
        return (
            <Container>
                {/* {(Platform.OS === 'ios') ?
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Add Goal</Title>
                        </Body>
                        <Right>
                        </Right>
                    </Header>
                    : <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{ color: 'white' }}>Add Goal</Title>
                        </Body>
                        <Right>
                        </Right>
                    </Header>
                } */}
                <Content style={styles.container}>
                    <ImageBackground source={require('../../assests/images/goals/Goal.jpg')} style={{ right: 5, width: windowObj.width + 20, height: windowObj.height / 4, alignSelf: 'center' }} resizeMode="cover">
                        <View style={{ backgroundColor: '#00000066', padding: 10, flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ padding: 10, color: 'white', fontSize: 26, fontWeight: 'bold' }}>Select a goal</Text>
                                <Item style={{ borderRadius: 25, padding: 5, height: 30, flexDirection: 'row', width: screenwidth / 2, backgroundColor: 'white' }}>
                                    <Icon name="ios-search" />
                                    <Input placeholder="Search" />
                                </Item>
                            </View>
                        </View>
                    </ImageBackground>
                    <View>
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                                <CardItem bordered >
                                    <Left>
                                        <Icon active name="logo-googleplus" />
                                        <Text>Practice self-disclosure</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" style={{ alignSelf: 'flex-end' }} />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                                <CardItem bordered onPress={this.goToYourAddGoal} style={{ height: 60 }}>
                                    <Left>
                                        <Icon active />
                                        <Text>Save your income tax</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" style={{ alignSelf: 'flex-end' }} />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                                <CardItem bordered onPress={this.goToYourAddGoal} style={{ height: 60 }}>
                                    <Left>
                                        <Icon active type="MaterialCommunityIcons" name="run" />
                                        <Text>Lose 6 kg weight</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" style={{ alignSelf: 'flex-end' }} />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                                <CardItem bordered onPress={this.goToYourAddGoal} style={{ height: 60 }}>
                                    <Left>
                                        <Icon active name="logo-googleplus" />
                                        <Text>Relieve stress and anger</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" style={{ alignSelf: 'flex-end' }} />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                                <CardItem bordered style={{ height: 60 }}>
                                    <Text>Create your own</Text>
                                    <Icon active type="EvilIcons" name="plus" />
                                </CardItem>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </Content>

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
        height: 60
    }
})
export default AddGoal;
