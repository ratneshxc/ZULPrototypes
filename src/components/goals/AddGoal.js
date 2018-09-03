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
                <View style={{ backgroundColor: "#294787", padding: 10 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <Icon name='arrow-left' type="FontAwesome" style={{ color: 'white',fontSize:18 }} />

                        <Text style={{ flex: 1, color: 'white',left: 15, fontSize: 18 }}>Choose your Goals</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Item style={{ left: 20, top: 2, borderRadius: 30, padding: 2, height: 30, flexDirection: 'row', width: (screenwidth-15), backgroundColor: '#ededed', }}>
                            <Icon name="ios-search" />
                            <Input placeholder="Goals" placeholderTextColor="#ddd" />
                            <Icon name="ios-people" />
                        </Item>
                    </View>
                </View>
                <Content style={styles.container}>
                    <ImageBackground source={require('../../assests/images/goals/Goal.jpg')} style={{ right: 5, width: windowObj.width + 20, height: windowObj.height / 4, alignSelf: 'center' }} resizeMode="cover">
                        <View style={{ backgroundColor: '#00000066', padding: 10, flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ padding: 10, color: 'white', fontSize: 26, fontWeight: 'bold' }}>Select a goal</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View>
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                                <CardItem bordered >
                                    <Left>
                                        <Icon active name="logo-googleplus" />
                                        <Text style={{ left: 8, fontWeight: 'bold', fontSize: 18, width: 300 }}>Practice self-disclosure</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" style={{ alignSelf: 'flex-end', color: 'black', fontSize: 24 }} />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                                <CardItem bordered onPress={this.goToYourAddGoal} style={{ height: 60 }}>
                                    <Left>
                                        <Icon active name="logo-googleplus" />
                                        <Text style={{ left: 8, fontWeight: 'bold', fontSize: 18, width: 300 }}>Save your income tax</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" style={{ alignSelf: 'flex-end', color: 'black', fontSize: 24 }} />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                                <CardItem bordered onPress={this.goToYourAddGoal} style={{ height: 60 }}>
                                    <Left>
                                        <Icon active type="MaterialCommunityIcons" name="run" />
                                        <Text style={{ left: 8, fontWeight: 'bold', fontSize: 18, width: 300 }}>Lose 6 kg weight</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" style={{ alignSelf: 'flex-end', color: 'black', fontSize: 24 }} />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                                <CardItem bordered onPress={this.goToYourAddGoal} style={{ height: 60 }}>
                                    <Left>
                                        <Icon active name="logo-googleplus" />
                                        <Text style={{ left: 8, fontWeight: 'bold', fontSize: 18, width: 300 }}>Relieve stress and anger</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" style={{ alignSelf: 'flex-end', color: 'black', fontSize: 24 }} />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                                <CardItem bordered style={{ height: 60, alignSelf: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Create your own</Text>
                                    <Icon active type="EvilIcons" name="plus" style={{ fontWeight: 'bold' }} />
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
