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
                        {/*Search results*/}

                        <View style={{ flexDirection: 'column', padding: 5, backgroundColor: '#F0F0F0' }}>
                            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>

                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="run" style={{marginLeft:2}} />
                                        <Text style={{ marginLeft: 12,marginTop:4, flex: 1 }}>Complete Isha meditation track</Text>

                                        <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} />

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="run" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1 }}>Lose 6 kg in 1 month</Text>

                                        <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} />

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column', flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                         <Icon active type="MaterialCommunityIcons" name="run" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1 }}>Complete NLP training track</Text>

                                        <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} />

                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                        {/*Suggestions*/}
                        <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F0F0F0' }}>
                            <Text style={{ flex: 1 }}>Suggested Goals</Text>

                        </View>
                        <View style={{ flexDirection: 'column', padding: 5, backgroundColor: '#F0F0F0' }}>
                            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>

                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="run" style={{marginLeft:2}} />
                                        <Text style={{ marginLeft: 12,marginTop:4, flex: 1 }}>Complete Isha meditation track</Text>

                                        <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} />

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column',borderBottomColor:'#ddd',borderBottomWidth:1, flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                        <Icon active type="MaterialCommunityIcons" name="run" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1 }}>Lose 6 kg in 1 month</Text>

                                        <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} />

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToYourAddGoal} style={{ flexDirection: 'column', flex: 1 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 50, paddingTop: 10 }}>

                                         <Icon active type="MaterialCommunityIcons" name="run" style={{marginLeft:2}}/>
                                        <Text  style={{ marginLeft: 12,marginTop:4, flex: 1 }}>Complete NLP training track</Text>

                                        <Icon name="arrow-forward" style={{ color: 'black', fontSize: 24 }} />

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
