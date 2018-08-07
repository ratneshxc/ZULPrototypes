import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Body, Left, Button, Icon,Right, Title, Content } from 'native-base';

const Goals = (props) => {
    return (
        <Container>
                <Header>
                    <Left>
                        <Button onPress={props.screenProps.OpenDrawer} transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Goals</Title>
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
export default Goals;