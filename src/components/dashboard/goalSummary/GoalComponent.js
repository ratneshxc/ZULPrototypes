import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListItem, Body, Right, Left ,Thumbnail} from 'native-base';

const GoalComponent = () => {
    return (

        <ListItem avatar>
            <Left>
                <Thumbnail source={require('../../../assests/images/Yoga2.jpg')} />
            </Left>
            <Body>
                <Text style={{color:'#000000'}}>10000 steps per day</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
                <Text note>20% completed</Text>
            </Right>
        </ListItem>

    )
}
const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 1,
    }
})
export default GoalComponent;