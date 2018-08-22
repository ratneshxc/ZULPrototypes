import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Body, Left, Button, Icon,Right, Title, Content } from 'native-base';

const Community = (props) => {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Community</Title>
                </Body>
                <Right>
                </Right>
            </Header>
            <Content style={styles.container}>

            </Content>
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default Community;