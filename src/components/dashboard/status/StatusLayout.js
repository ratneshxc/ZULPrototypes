import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatusBody from './StatusBody';
import ConfigurableStatusLayout from './ConfigurableStatusLayout';


const StatusLayout = (props) => {
    return (
        <View style={styles.container}>
            <StatusBody />
            <ConfigurableStatusLayout />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding:5,
        backgroundColor:'#ffffff'
    }
})
export default StatusLayout;