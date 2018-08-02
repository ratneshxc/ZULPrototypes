import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import StatusBody from './StatusBody';

const StatusLayout = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{marginLeft:5,marginTop:5}}>Track</Text>
            <StatusBody />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        margin:5
    }
})
export default StatusLayout;