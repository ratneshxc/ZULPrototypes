import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, H3, Icon, Badge } from 'native-base';
const StatusComponent = (props) => {
    let { title, value, target, unit, ideal } = props.statusObj;
    let finalStatus = target - value;
    let textColor = (target > value && ideal === '>') || (target <= value && ideal === '<') ? '#ed1727' : '#00b386'
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={{ fontSize: 13, color: '#353535' }}>{title}</Text>
                <Text style={{ color: '#353535', textAlign: 'center', fontWeight: '200', fontSize: 30 }}>{value}</Text>
                <Text style={{ fontSize: 12, textAlign: 'center' }}>{unit}</Text>
            </View>
            <View style={{ paddingVertical: 3, flexDirection: 'row' }} >

                {
                    finalStatus >= 0 ?
                        <Text style={{ fontSize: 12, color: textColor }}> <Icon name="arrow-down" style={{ fontSize: 15 }} /> <Text>{finalStatus + ' ' + unit}</Text> </Text> :
                        <Text style={{ fontSize: 12, color: textColor }}><Icon name="arrow-up" style={{ fontSize: 15 }} /> <Text>{-finalStatus + ' ' + unit}</Text> </Text>
                }
            </View>
            <View style={{flexDirection:'row'}}>
                <Icon name="bullseye" style={{fontSize:10,padding:3}} type="FontAwesome" />
                <Text style={{ fontSize: 10, color: '#353535' }}>{`${target}`}  <Text style={{ fontSize: 10 }}>{`${unit}/day`}</Text></Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    section: {
        paddingVertical: 3
    }
})
export default StatusComponent;