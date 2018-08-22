import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CardItem, Text, Right, Icon } from 'native-base';
const GoalCard = (props) => {
    return (
        <Card style={styles.container}>
            <CardItem>
                <Icon active name="bullseye" type="FontAwesome" />
                <Text>Reduce 20Kg Weight</Text>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </CardItem>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default GoalCard;
