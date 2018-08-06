import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base';
import Image from 'react-native-remote-svg'
const StatusHeader = (props) => {
    return (
        <View style={styles.headerSection}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <View style={{ flex: 1,flexDirection: 'row',paddingHorizontal:10 }}>
                    <Text style={{fontSize:17,color:'#353535'}}>Great, I am feeling </Text>
                    <Image
                        source={require('../../assests/images/emoji/01.svg')}
                        style={{ width: 25, height: 25 }}
                    />
                </View>
                <TouchableOpacity style={{ flexDirection: 'row',paddingHorizontal:10 }}>
                    <Text style={{paddingVertical:5}}>Today</Text><Icon name="caret-down" style={{ marginLeft: 5 }} type="FontAwesome" />
                </TouchableOpacity>
            </View>
            <View style={styles.horiLine}></View>
            {/* <View style={{ padding: 5,flexDirection:'row' }}>
                <Text style={{ fontSize: 14 }}>Good morning KK</Text>
                <Text style={{ fontSize: 16 }}>Today</Text><Icon name="caret-down" style={{marginLeft:5}} type="FontAwesome"/>
            </View> */}
            {/* <View style={styles.horiLine}></View> */}

        </View>
    )
}
const styles = StyleSheet.create({
    headerSection: {

    },
    horiLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
        marginHorizontal: 10
    }
})
export default StatusHeader;