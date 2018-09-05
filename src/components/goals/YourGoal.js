import React, { Component } from 'react';
import { Platform, View, StyleSheet, Image, Dimensions, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Card, CardItem, Container, Header, Body, Left, Button, Icon, Right, Title, Content, Text  } from 'native-base';
//import Divider from './Divider';
import StepProgress from './StepProgress';
import { Pages } from 'react-native-pages';


class YourGoal extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    goToYourActivity = () => {
        this.props.navigation.navigate('AddActivity');
    }
    goToGoal = () => {
        this.props.navigation.navigate('Goals');
    }
    render() {
        return (
            <Container style={{ backgroundColor:'#F5FCFF'}}>
                <Content style={styles.container}>
                    <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                            {/* <Image style={{ width: 50, height: 50, alignSelf: 'center', borderRadius: 25 }} source={require('../../assests/images/goals/loseweight.jpg')} /> */}
                            <Icon name="target" type="Feather" style={{ padding: 5, alignSelf: 'center', color: 'black', fontSize: 32 }} />
                            <View style={{ flexDirection: 'column', padding:5 }}>
                                <Text style={{ fontSize: 18 }}>Lose 6 kg weight</Text>
                                <Text style={{ fontSize: 14 }}>Duration 4 week</Text>
                            </View>
                            <Right>
                                <TouchableOpacity bordered>
                                    <Icon name="edit" type="FontAwesome" style={{ padding: 5, alignSelf: 'flex-end', color: 'black', fontSize: 22 }} />
                                </TouchableOpacity>
                            </Right>
                        </View>
                        {/* <Divider borderColor="black" color="black" orientation="left">
                            <Text style={{ fontSize: 14, color: 'black' }}>Duration 4 week</Text>
                        </Divider> */}
                    </Card>
                    <View style={{ padding: 10 }}>
                        <StepProgress />
                    </View>
                    {/* <View style={{ height:100}}>
                        <Pages>
                            <View style={{ flex: 1, backgroundColor: 'red' }} />
                            <View style={{ flex: 1, backgroundColor: 'green' }} />
                            <View style={{ flex: 1, backgroundColor: 'blue' }} />
                        </Pages>
                    </View> */}
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Left>
                                <Text style={{ left: 20, fontSize: 17, flex: 2, alignSelf: 'flex-start' }}>ACTIVITIES</Text>
                            </Left>
                            <Right>
                                <Icon onPress={this.goToYourActivity} style={{ flex: 2, alignSelf: 'flex-end', right: 15 }} active type="Ionicons" name="ios-add-circle-outline" />
                            </Right>
                        </View>
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <CardItem bordered style={{ height: 60 }}>
                                <View style={{ flex: 1 }}>
                                    <Icon active type="MaterialCommunityIcons" name="run" />
                                </View>
                                <View style={{ flex: 8 }}>
                                    <Text style={{ alignSelf: 'flex-start', fontSize: 16 }}>Take 5000 steps</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Icon name="edit" type="FontAwesome" style={{ padding: 5, alignSelf: 'flex-end', color: 'black', fontSize: 22 }} />
                                </View>
                            </CardItem>
                            <CardItem bordered style={{ height: 60 }}>
                                <View style={{ flex: 1 }}>
                                    <Icon active type="MaterialCommunityIcons" name="food-fork-drink" />
                                </View>
                                <View style={{ flex: 8 }}>
                                    <Text style={{ alignSelf: 'flex-start', fontSize: 16 }}>Daily 10 min meditation</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Icon name="edit" type="FontAwesome" style={{ padding: 5, alignSelf: 'flex-end', color: 'black', fontSize: 22 }} />
                                </View>
                            </CardItem>
                            <CardItem bordered style={{ height: 60 }}>
                                <View style={{ flex: 1 }}>
                                    <Icon active type="MaterialCommunityIcons" name="run" />
                                </View>
                                <View style={{ flex: 8 }}>
                                    <Text style={{ fontSize: 16, alignSelf: 'flex-start' }}>Drink water a half hour before your meal</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Icon name="edit" type="FontAwesome" style={{ padding: 5, alignSelf: 'flex-end', color: 'black', fontSize: 22 }} />
                                </View>
                            </CardItem>
                            <CardItem bordered style={{ height: 60 }}>
                                <View style={{ flex: 1 }}>
                                    <Icon active type="MaterialCommunityIcons" name="food-fork-drink" />
                                </View>
                                <View style={{ flex: 8 }}>
                                    <Text style={{ alignSelf: 'flex-start', fontSize: 16 }}>Eat your food slowly</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Icon name="edit" type="FontAwesome" style={{ padding: 5, alignSelf: 'flex-end', color: 'black', fontSize: 22 }} />
                                </View>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
                {(Platform.OS === 'ios') ?
                    <Footer>
                        <FooterTab>
                            <Button full onPress={this.goToGoal}>
                                <Text style={{ color: 'black', fontSize: 16, }}>Confirm</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                    :
                    <Footer>
                        <FooterTab>
                            <Button block onPress={this.goToGoal}>
                                <Text style={{ color: 'white', fontSize: 16, }}>Confirm</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                }
            </Container>
        )
    }

}
const styles = StyleSheet.create({

})
export default YourGoal;
