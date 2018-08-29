import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Button, Text, H2 } from 'native-base';

export default class Passcode extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginLeft: 5, marginBottom: 5 }}>Passcode:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                </View>
                <Text style={{ marginLeft: 5, marginBottom: 5 }}>Re-enter Passcode:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
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
        padding: 10
    },
    loginLogo: {
        height: 150,
        width: 150
    },
    input: {
        fontSize: 20,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 5
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
