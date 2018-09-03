import React, { Component } from 'react';
import { Platform, View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Header, Button, Text, Title, Container, Icon, Content, Footer, FooterTab, Card, CardItem, List, ListItem, Badge, Item, Input, Right, Left, Body } from 'native-base';

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;

class AddGoal extends Component {
    goToYourAddGoal = () => {
        this.props.navigation.navigate('YourGoal');
    }
    goToPreviousPage = () => {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => { this.goToPreviousPage() }}>
                            <Icon name='arrow-left' type="FontAwesome" />

                        </Button>
                    </Left>
                    <Body>
                        <Title>Search goals</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Header searchBar rounded>
                    <Item style={{ borderRadius: 30, padding: 5, height: 30, flexDirection: 'row', backgroundColor: 'white' }}>
                        <Icon name="ios-search" />
                        <Input placeholder="Goals" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content style={[styles.container, { backgroundColor: '#ddd' }]}>
                    <View>
                        {/*Search results*/}
                        <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F0F0F0' }} >
                            <Text style={{ flex: 1 }}>Your searches</Text>
                        </View>
                        {/*Recent Experts*/}
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
                        </Card>
                        {/* <View style={{ flexDirection: 'column', padding: 5, backgroundColor: '#F0F0F0' }}>
                <View style={{ flex: 1, flexDirection: 'row',backgroundColor: '#fff'  }}>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Thumbnail large square source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                        <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                            <Text style={{ flex: 1 }}>Samira Reddy</Text>
                            <Icon name='heart' type="FontAwesome" style={{ fontSize: 18 }} />

                        </View>
                        <Text style={{ fontSize: 13, color: '#505050' }}>Child Specialist</Text>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flex: 2 }}>
                                <TouchableOpacity style={{ paddingVertical: 4, backgroundColor: '#007bff', borderWidth: 1, margin: 5, marginLeft: 0, borderColor: '#F0F0F0', borderRadius: 2 }}>
                                    <Text style={{ textAlign: 'center', color: 'white' }}><Icon name='usb' type="FontAwesome" style={{ fontSize: 18, color: 'white' }} /> Connect</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2 }}></View>
                        </View>
                    </View>
                </View>
            </View> */}
                        {/*Find and connect*/}
                        <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F0F0F0' }}>
                            <Text style={{ flex: 1 }}>Find & Connect</Text>

                        </View>
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
