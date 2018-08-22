import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Image from 'react-native-remote-svg';
const WalkGoal = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: '#353535',fontSize:20 }}>Walk</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Text style={{ color: '#353535' }}>20% completed</Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '20%' }}></View>
                    <Image style={{ width: 30, height: 40 }} source={require('../../../assests/images/goals/physical.svg')} />
                </View>
                <View style={{ backgroundColor: '#ddd' }}>
                    <View style={{ height: 5, width: '20%', backgroundColor: 'green' }}></View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text>0Km</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text>5Km</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default WalkGoal;