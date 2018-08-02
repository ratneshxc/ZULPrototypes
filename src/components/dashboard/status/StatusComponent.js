import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, H3 } from 'native-base';
const StatusComponent = (props) => {
    let { title, value, target, comPercentage } = props.statusObj;
    return (
        <Card style={styles.container}>
         <View style={styles.section}>
                <Text style={{ textAlign: 'center', fontSize: 17 }}>{title}</Text>
            </View>
            <View style={styles.section}>
                <Text style={{ color: '#353535', textAlign: 'center', fontSize: 20 }}>{value}</Text>
            </View>
           
            <View style={styles.section}>
                <Text style={{ fontSize: 12 }}>Target <Text style={{fontWeight:'bold',color:'#0a5840'}}>{target}</Text></Text>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    section: {
        paddingVertical: 5
    }
})
export default StatusComponent;