import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Text, H2 } from 'native-base';

export default class Passcode extends React.Component {
    curFocInput = 1;
    goToNextTextInput = (text) => {
        setTimeout(() => {
            if (this.curFocInput > 0 && this.curFocInput < 8) {
                this.curFocInput++;
            }
            this.refs[this.curFocInput].focus();

        }, 400)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginLeft: 5, color: '#ffffff', fontSize: 20 }}>Passcode:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            ref={'1'}
                            underlineColorAndroid="#fff"
                            secureTextEntry={true}
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            onChangeText={(text) => this.goToNextTextInput(text)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            ref={'2'}
                            underlineColorAndroid="#fff"
                            secureTextEntry={true}
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            onChangeText={(text) => this.goToNextTextInput(text)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            ref={'3'}
                            underlineColorAndroid="#fff"
                            secureTextEntry={true}
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            onChangeText={(text) => this.goToNextTextInput(text)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            ref={'4'}
                            underlineColorAndroid="#fff"
                            secureTextEntry={true}
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            onChangeText={(text) => this.goToNextTextInput(text)}
                        />
                    </View>
                </View>
                <Text style={{ marginLeft: 5, color: '#ffffff', marginTop: 10, fontSize: 20 }}>Re-enter Passcode:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            ref={'5'}
                            underlineColorAndroid="#fff"
                            secureTextEntry={true}
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            onChangeText={(text) => this.goToNextTextInput(text)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            ref={'6'}
                            underlineColorAndroid="#fff"
                            secureTextEntry={true}
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            onChangeText={(text) => this.goToNextTextInput(text)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            ref={'7'}
                            underlineColorAndroid="#fff"
                            secureTextEntry={true}
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            onChangeText={(text) => this.goToNextTextInput(text)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            ref={'8'}
                            underlineColorAndroid="#fff"
                            secureTextEntry={true}
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            onChangeText={(text) => this.goToNextTextInput(text)}
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
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 20,
        marginHorizontal: 5,
        borderRadius: 5,
        textAlign: 'center',
        color: '#fff'
    },
    zulBtn: {
        backgroundColor: '#00c497',
        alignItems: 'center',
        paddingVertical: 15,
        marginVertical: 15,
        borderRadius: 5
    },
    whiteText: {
        color: '#fff'
    }

});
