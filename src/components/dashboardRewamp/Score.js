import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const Score = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize:16}}>Your Score</Text>
            </View>
            <View>
                <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Text style={{ color: '#353535',fontSize:30 }}>70%</Text>
                </View>
                <View style={{ backgroundColor: '#ddd' }}>
                    <View style={{ height: 8, width: '70%', backgroundColor: 'green' }}></View>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{ color: '#353535', fontSize: 18, textAlign: 'center' }}>Seems to have very good condition</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginTop: 5,
        padding: 10
    }
})
export default Score;

