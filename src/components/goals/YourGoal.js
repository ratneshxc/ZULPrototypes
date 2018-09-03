import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, Dimensions, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Card, CardItem, Badge } from 'native-base';
import { Container, Header, Body, Left, Button, Icon, Right, Title, Content } from 'native-base';
import Divider from 'react-native-divider';
import StepProgress from './StepProgress';

class YourGoal extends Component {

    goToYourActivity = () => {
        this.props.navigation.navigate('AddActivity');
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
                        <Title>Goals</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content style={styles.container}>
                    <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                            <Image style={{ width: 50, height: 50, alignSelf: 'center', borderRadius: 25 }} source={require('../../assests/images/goals/loseweight.jpg')} />
                            <Body><Text style={{ fontSize: 18 }}>Lose 6 kg weight</Text></Body>
                            <Right>
                                <TouchableOpacity bordered>
                                    <Icon name="edit" type="FontAwesome" style={{ padding: 5, alignSelf: 'flex-end', color: 'black', fontSize: 22 }} />
                                </TouchableOpacity>
                            </Right>
                        </View>
                        <Divider borderColor="black" color="black" orientation="left">
                            <Text style={{ fontSize: 14, color: 'black' }}>Duration 4 week</Text>
                        </Divider>
                        <View>
                            <Text style={{ fontSize: 20, color: 'white', borderRadius: 100 }}></Text>
                        </View>
                    </Card>
                    <View style={{ padding: 10 }}>
                        <StepProgress />
                    </View>
                    <View>

                    </View>
                    <View>
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <CardItem bordered onPress={this.goToYourActivity} style={{ height: 60 }}>
                                <Left>
                                    <Icon active type="MaterialCommunityIcons" name="run" />
                                    <Text style={{ padding: 7, fontSize: 16, width: 300 }}>Take 5000 steps</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>60 points</Text>
                                    <Icon name="edit" type="FontAwesome" style={{ padding: 5, alignSelf: 'flex-end', color: 'black', fontSize: 22 }} />
                                </Right>
                            </CardItem>
                            <CardItem bordered style={{ height: 60 }}>
                                <Left>
                                    <Icon active name="logo-googleplus" />
                                    <Text style={{ padding: 7, fontSize: 16, width: 300 }}>Daily 10 min meditation</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>60 points</Text>
                                    <Icon name="edit" type="FontAwesome" style={{ padding: 5, alignSelf: 'flex-end', color: 'black', fontSize: 22 }} />
                                </Right>
                            </CardItem>
                            <CardItem bordered style={{ height: 60 }}>
                                <Left>
                                    <Icon active type="MaterialCommunityIcons" name="run" />
                                    <Text style={{ padding: 7, fontSize: 16, width: 300 }}>Drink water a half hour before your meal</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 12 }}>60 points</Text>
                                    <Icon name="edit" type="FontAwesome" style={{ padding: 5, alignSelf: 'flex-end', color: 'black', fontSize: 22 }} />
                                </Right>
                            </CardItem>
                            <CardItem bordered style={{ height: 60 }}>
                                <Left>
                                    <Icon active type="MaterialCommunityIcons" name="food-fork-drink" />
                                    <Text style={{ padding: 7, fontSize: 16, width: 300 }}>Eat your food slowly</Text>
                                </Left>
                                {/* <Body>
                                    <Text style={{ fontSize: 12, alignSelf: 'flex-end' }}>60 points</Text>
                                </Body> */}
                                <Right>
                                <Text style={{ fontSize: 12 }}>60 points</Text>
                                    <Icon name="edit" type="FontAwesome" style={{ padding: 5, alignSelf: 'flex-end', color: 'black', fontSize: 22 }} />
                                </Right>
                            </CardItem>
                            {/* <TouchableOpacity bordered style={{ height: 50 }} onPress={this.goToYourActivity}>
                                <View style={{ flexDirection: 'row', top: 10, alignSelf: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>Add an activity</Text>
                                    <Icon active type="EvilIcons" name="plus" style={{}} />
                                </View>
                            </TouchableOpacity> */}
                        </Card>
                    </View>
                </Content>
                {(Platform.OS === 'ios') ?
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text style={{ color: 'black', fontSize: 16, }}>Start</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                    :
                    <Footer>
                        <FooterTab>
                            <Button full style={{ backgroundColor: 'white' }}>
                                <Text style={{ color: 'black', fontSize: 16, }}>Start</Text>
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
export default YourGoal;
