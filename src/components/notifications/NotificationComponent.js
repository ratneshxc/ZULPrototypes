import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Left, Thumbnail, Body, Text } from 'native-base';
const NotificationComponent = (props) => {
    return (
        <ListItem noIndent style={{ backgroundColor: !props.noti.read ? '#73a4f53b' : '#fff' }} avatar>
            <Left>
                <Thumbnail source={props.noti.imageURL} />
            </Left>
            <Body>
                <Text><Text style={{ fontWeight: 'bold' }}>{props.noti.name}</Text> {props.noti.task}</Text>
                <Text note>{props.noti.time}</Text>
            </Body>
        </ListItem>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default NotificationComponent;