import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'native-base';
const DateHeader = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Icon name="angle-left" type="FontAwesome" />
            </View>
            <View style={{ flex: 1,padding:5 }}>
                <Text style={{textAlign:'center',color:'#353535'}}>Today</Text>
            </View>
            <View>
                <Icon name="caret-down" type="FontAwesome" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding:10,
        backgroundColor:'#ffffff'
    }
})
export default DateHeader;

