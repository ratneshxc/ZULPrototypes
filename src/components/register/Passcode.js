import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Button, Text, H2 } from 'native-base';

export default class Passcode extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginLeft: 5, marginBottom: 5,color:'#ffffff',fontSize:20 }}>Passcode:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                            placeholder={'___'}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                            placeholder={'___'}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                            placeholder={'___'}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                            placeholder={'___'}
                        />
                    </View>
                </View>
                <Text style={{ marginLeft: 5, marginBottom: 5,color:'#ffffff',fontSize:20 }}>Re-enter Passcode:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                            placeholder={'___'}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                            placeholder={'___'}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                            placeholder={'___'}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                            placeholder={'___'}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.zulBtn} onPress={this.props.goToDashboard}>
                    <Text style={[styles.whiteText, { fontWeight: 'bold' }]}>{"Let's Go".toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
       
    },
    loginLogo: {
        height: 150,
        width: 150
    },
    input: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontSize: 20,
        marginHorizontal: 5,
        borderRadius: 10,
        textAlign:'center'
    },zulBtn: {
        backgroundColor: '#00c497',
        alignItems: 'center',
        paddingVertical: 15,
        marginVertical: 15,
        borderRadius: 10
    },
    whiteText:{
        color:'#fff'
    }

});
