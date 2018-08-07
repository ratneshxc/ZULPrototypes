import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'native-base';

const ConfigurableStatusComponent = (props) => {
    let { title, value, target, unit, ideal } = props.statusObj;

    return (
        <Card style={styles.container}>
            <Text style={{textAlign:'center',color:'#353535',fontSize:12}}>{title}</Text>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical:30,
        paddingHorizontal:10
    }
})
export default ConfigurableStatusComponent;
