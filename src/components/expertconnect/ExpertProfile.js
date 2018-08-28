import React, { Component } from 'react'
import {  View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Badge, Left, Body, Title, Right,Toast } from 'native-base';

export default class ExpertProfile extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Expert Profile</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content padder style={{ backgroundColor: "white" }}>
                </Content>
            </Container>
        )
    }
}