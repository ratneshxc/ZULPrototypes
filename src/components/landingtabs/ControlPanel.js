import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Thumbnail, List, ListItem, Left, Body, Right, Button, Icon, Card } from 'native-base';


export default class ControlPanel extends React.Component {
  
    render() {
        let { closeDrawer } = this.props
        return (
            <Card style={styles.container}>
                <ScrollView>
                    <View style={{ alignItems: 'center', paddingVertical: 30 }}>
                        <Thumbnail large source={require('../../assests/images/suresh.png')} />
                        <Text style={{ color: '#353535', fontSize: 20 }}>Pritam Kurunkar</Text>
                        <Text style={{ color: '#00b386', fontStyle: 'italic' }}>Active since 90 days</Text>
                    </View>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="calendar" style={{ fontSize: 15 }} type="FontAwesome" />
                            </Left>
                            <Body>
                                <Text style={styles.menuText}>Events</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        
                        <ListItem icon onPress={()=>{this.props.goToScreen('AssessmentLayout')}}>
                            <Left>
                                <Icon name="paperclip" style={{ fontSize: 15 }} type="FontAwesome" />
                            </Left>
                            <Body>
                                <Text style={styles.menuText}>Assessments</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="user" style={{ fontSize: 15 }} type="FontAwesome" />
                            </Left>
                            <Body>
                                <Text style={styles.menuText}>Oppointments</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="history" style={{ fontSize: 15 }} type="FontAwesome" />
                            </Left>
                            <Body>
                                <Text style={styles.menuText}>History</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="cog" style={{ fontSize: 15 }} type="FontAwesome" />
                            </Left>
                            <Body>
                                <Text style={styles.menuText}>Settings</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="info" style={{ fontSize: 15 }} type="FontAwesome" />
                            </Left>
                            <Body>
                                <Text style={styles.menuText}>About Us</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="phone" style={{ fontSize: 15 }} type="FontAwesome" />
                            </Left>
                            <Body>
                                <Text style={styles.menuText}>Support</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="sign-out" style={{ fontSize: 15 }} type="FontAwesome" />
                            </Left>
                            <Body>
                                <Text style={styles.menuText}>Log Out</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                    </List>
                </ScrollView>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
        margin: 0
    },
    controlText: {
        color: 'white',
    },
    menuText: {
        fontSize: 16,
        color: '#353535'
    }
})