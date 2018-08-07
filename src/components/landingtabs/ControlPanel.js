import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Thumbnail, List, ListItem, Left, Body, Right, Button, Icon, Card } from 'native-base';

export default class ControlPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            menuItems: [{
                icon: 'home',
                title: 'Events'
            }, {
                icon: 'home',
                title: 'Assessments'
            }, {
                icon: 'home',
                title: 'Visits'
            }, {
                icon: 'home',
                title: 'History'
            }, {
                icon: 'home',
                title: 'Settings'
            }, {
                icon: 'home',
                title: 'Log out'
            }]
        }
    }
    render() {
        let { closeDrawer } = this.props
        return (
            <Card style={styles.container}>
                <ScrollView>
                    <Text style={styles.controlText}>Control Panel</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Thumbnail source={require('../../assests/images/suresh.png')} />
                        <Text>Pritam Kurunkar</Text>
                    </View>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="calendar" type="FontAwesome" />
                            </Left>
                            <Body>
                                <Text>Events</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon active name="home" />
                            </Left>
                            <Body>
                                <Text>Assessments</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon active name="home" />
                            </Left>
                            <Body>
                                <Text>Oppointment</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon active name="home" />
                            </Left>
                            <Body>
                                <Text>History</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon active name="home" />
                            </Left>
                            <Body>
                                <Text>Settings</Text>
                            </Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon active name="home" />
                            </Left>
                            <Body>
                                <Text>Log Out</Text>
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
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
})