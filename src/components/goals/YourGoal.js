import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Card, CardItem, List, ListItem, Badge } from 'native-base';
import { Container, Header, Body, Left, Button, Icon, Right, Title, Content } from 'native-base';

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;
const screenheight = windowObj.height / 3;

class AddGoal extends Component {
    goToYourActivity = () => {
        this.props.navigation.navigate('AddActivity');
    }
    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <ImageBackground source={require('../../assests/images/goals/Goal.jpg')} style={{ right: 5, width: windowObj.width + 20, height: windowObj.height / 4, alignSelf: 'center' }} resizeMode="cover">
                        <View style={{ backgroundColor: '#00000066', padding: 10, flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ padding: 10, color: 'white', fontSize: 26, fontWeight: 'bold' }}>Lose 6 kg weight</Text>
                                <Icon style={{ fontSize: 20, color: 'white' }} active type="Entypo" name="info-with-circle" />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', top: 30 }}>
                                <Left style={{ padding: 10 }}>
                                    <Text style={{ color: 'white', top: 2, fontSize: 17, fontWeight: 'bold' }}>Duration 4 week</Text>
                                </Left>
                                <Right style={{ flex: 1, flexDirection: 'row', left: 16 }}>
                                    <Text style={{ color: 'white', top: 2, fontWeight: 'bold' }}>Suggested by: Pratian</Text>
                                </Right>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ padding: 10 }}>
                        <View style={{ height: 5, backgroundColor: '#4dad4a' }}></View>
                    </View>
                    <View>
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <CardItem bordered onPress={this.goToYourActivity} style={{ height: 60 }}>
                                <Left>
                                    <Icon active type="MaterialCommunityIcons" name="run" />
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width: 300 }}>Take 5000 steps</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12, bottom: 17 }}>60 points</Text>
                                </Right>
                            </CardItem>
                            <CardItem bordered style={{ height: 60 }}>
                                <Left>
                                    <Icon active name="logo-googleplus" />
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width: 300 }}>Daily 10 min meditation</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12, bottom: 17 }}>60 points</Text>
                                </Right>
                            </CardItem>
                            <CardItem bordered style={{ height: 60 }}>
                                <Left>
                                    <Icon active type="MaterialCommunityIcons" name="run" />
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width: 300 }}>Drink water a half hour before your meal</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12, bottom: 17 }}>60 points</Text>
                                </Right>
                            </CardItem>
                            <CardItem bordered style={{ height: 60 }}>
                                <Left>
                                    <Icon active type="MaterialCommunityIcons" name="food-fork-drink" />
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, width: 300 }}>Eat your food slowly</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12, bottom: 17 }}>60 points</Text>
                                </Right>
                            </CardItem>
                            <TouchableOpacity bordered style={{  height: 50 }} onPress={this.goToYourActivity}>
                                <View style={{ flexDirection: 'row', top: 10, alignSelf: 'center'}}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Add an activity</Text>
                                    <Icon active type="EvilIcons" name="plus" style={{ fontWeight: 'bold' }}/>
                                </View>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </Content>
                {(Platform.OS === 'ios') ?
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Start</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                    :
                    <Footer>
                        <FooterTab>
                            <Button full style={{ backgroundColor: 'white'}}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Start</Text>
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
export default AddGoal;
