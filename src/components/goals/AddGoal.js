import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Card, CardItem, List, ListItem, Badge } from 'native-base';
import { Container, Header, Body, Left, Button, Icon, Right, Title, Content } from 'native-base';



const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;
const screenheight = windowObj.height / 3;
const labels = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];


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
                               <Text style={{ padding:10, color: 'white', fontSize: 26, fontWeight: 'bold' }}>Select a goal</Text>
                               <Icon style={{fontSize:30, color:'white'}} active type="MaterialIcons" name="search" />
                            </View>
                        
                        </View>
                    </ImageBackground>
                    {/* <View style={{ padding: 10, flex:1, flexDirection:'row'}}>
                        <Text style={{ fontSize:20, padding: 10 }}>Select a goal</Text>
                        <Icon active type="Entypo" name="flag" style={{ fontSize:30, top:5 }}/>
                    </View> */}
                    <View>
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                        <TouchableOpacity onPress={this.goToYourAddGoal}>
                            <CardItem bordered >
                                <Icon active name="logo-googleplus" />
                                <Text>Practice self-disclosure</Text>
                                {/* <Right>
                                    <Icon name="arrow-forward" />
                                </Right> */}
                            </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                            <CardItem bordered onPress={this.goToYourAddGoal}>
                                <Icon active />
                                <Text>Save your income tax</Text>
                                {/* <Right>
                                    <Icon name="arrow-forward" />
                                </Right> */}
                            </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                            <CardItem bordered onPress={this.goToYourAddGoal}>
                                <Icon active type="MaterialCommunityIcons" name="run" />
                                <Text>Lose 6 kg weight</Text>
                                {/* <Right>
                                    <Icon name="arrow-forward" />
                                </Right> */}
                            </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                            <CardItem bordered onPress={this.goToYourAddGoal}>
                                <Icon active name="logo-googleplus" />
                                <Text>Relieve stress and anger</Text>
                                {/* <Right>
                                    <Icon name="arrow-forward" />
                                </Right> */}
                            </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToYourAddGoal}>
                            <CardItem bordered>
                                <Text>Create your own</Text>
                                <Icon active type="EvilIcons" name="plus"/>
                                {/* <Right>
                                    <Icon name="arrow-forward" />
                                </Right> */}
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
        height: 50
    }
})
export default AddGoal;
