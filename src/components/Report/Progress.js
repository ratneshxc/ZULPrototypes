import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import PercentageCircle from 'react-native-percentage-circle';
export default class Progress extends React.Component {
    render() {
        return ( 
           
            <View style={styles.card}>
                <Text style={styles.header}>Strength and Energy</Text>
                <View style={styles.profileimage}>
                    <PercentageCircle radius={40} percent={70} color={"#3498db"} borderWidth={5}></PercentageCircle>
                </View>
            </View>
           
        );
    }
}
const styles = StyleSheet.create({
    card: {
        height:'20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 10,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'lightgrey',
    },
    profileimage: {
        bottom:'20%',
        width: 80,
        height: 80,
        borderRadius: 100,
        borderColor: '#fff',
        backgroundColor: '#eee',
    },
    header: {
        height:'40%',
        fontWeight: 'bold',
    },
  

});