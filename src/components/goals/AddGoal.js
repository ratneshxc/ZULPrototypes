import React, { Component } from 'react';
import { Platform, View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Header, Button, Title,Text, Container, Icon, Content, Footer, FooterTab, Card, CardItem, List, ListItem, Badge, Item, Input, Right, Left, Body } from 'native-base';

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;

class AddGoal extends Component {
    goToYourAddGoal = () => {
        this.props.navigation.navigate('GoalAssessment');
    }
    goToPreviousPage = () => {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <Container>
                           <Header>
                    <Left>
                        <Button transparent  onPress={() => { this.props.navigation.goBack() }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Add goal</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Header searchBar rounded>
                    <Item style={{ borderRadius: 30, padding: 5, height: 30, flexDirection: 'row', backgroundColor: 'white' }}>
                        <Icon name="ios-search" />
                        <Input placeholder="Goals" placeholderTextColor="#ddd"/>
                        <Icon name="ios-people" />
                    </Item>
                </Header>
                <Content style={[styles.container, { backgroundColor: '#F5FCFF' }]}>
                    <View>
                        {/*Search results*/}
                        <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F0F0F0' }} >
                            <Text style={{ flex: 1 ,color:'black',fontSize:16, color: '#3a3a3a'}}>YOUR RECENT SEARCHES</Text>
                        </View>
                        {/*Search results*/}

                        <View style={{ flexDirection: 'column', padding: 5, backgroundColor: '#F0F0F0' }}>
                            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>

                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="emoticon-happy" style={{marginLeft:2}} />
                                        <Text style={{ marginLeft: 12,marginTop:4, flex: 1,fontSize:16 }}>Complete Isha meditation track</Text>

                                        {/* <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} /> */}

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="dumbbell" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1,fontSize:16 }}>Lose 6 kg in 1 month</Text>

                                        {/* <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} /> */}

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column', flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                         <Icon active type="MaterialCommunityIcons" name="ear-hearing" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1,fontSize:16 }}>Complete NLP training track</Text>

                                        {/* <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} /> */}

                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                        {/*Suggestions*/}
                        <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F0F0F0' }}>
                            <Text style={{ flex: 1 ,color:'black',fontSize:16, color: '#3a3a3a'}}>SUGGESTED GOALS</Text>

                        </View>
                        <View style={{ flexDirection: 'column', padding: 5, backgroundColor: '#F0F0F0' }}>
                            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>

                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="human" style={{marginLeft:2}} />
                                        <Text style={{ marginLeft: 12,marginTop:4, flex: 1,fontSize:16 }}>Get down to single digit body fat %</Text>

                                        {/* <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} /> */}

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="web" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1 ,fontSize:16}}>Generate $1000 from online</Text>

                                        {/* <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} /> */}

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="trending-up" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1 ,fontSize:16}}>Invest in the stock market (10K)</Text>

                                        {/* <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} /> */}

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="gift" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1,fontSize:16 }}>Make 20+ donations in a year</Text>

                                        {/* <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} /> */}

                                    </View>
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="voice" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1,fontSize:16 }}>Speak conversational Spanish</Text>

                                        {/* <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} /> */}

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column', flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                         <Icon active type="MaterialCommunityIcons" name="yin-yang" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1,fontSize:16 }}>Learn and perform Reiki</Text>

                                        {/* <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} /> */}

                                    </View>
                                </TouchableOpacity>
                                
                           
                            </View>
                        </View>
                      
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
