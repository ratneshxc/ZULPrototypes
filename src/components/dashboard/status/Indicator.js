import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'native-base';
const Indicator = (props) => {
    let { title } = props.indicator;
    return (
        <Card style={styles.container}>
            <Text>{title}</Text>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default Indicator;
