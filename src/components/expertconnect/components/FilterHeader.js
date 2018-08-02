import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Left, Button, Icon, Body, Right, Title } from 'native-base';

export default class componentName extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Filter</Title>
                </Body>
                <Right>
                    <Button
                        hasText
                        transparent
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={{ color: 'white' }}>Apply</Text>
                    </Button>
                </Right>
            </Header>
        )
    }
}