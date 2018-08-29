import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'native-base';

const NotificationCount = (props) => {
    return (
        <TouchableOpacity onPress={props.getAllNotifications} style={{ flexDirection: 'row', padding: 5, borderRadius: 10 }}>
            <Icon name="bell" style={{ fontSize: 20, color: '#fff', marginRight: 8, marginTop: 8 }} type="FontAwesome" />
            <Text style={{ backgroundColor: 'red', fontSize: 12, color: '#fff', fontWeight: 'bold', position: 'absolute', right: 0, top: 0, padding: 3, borderRadius: 10 }}>10</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default NotificationCount;