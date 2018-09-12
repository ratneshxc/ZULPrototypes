import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Text, H2 } from 'native-base';

export default class OTP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            digitOne: null,
            digitTwo: null,
            digitThree: null,
            digitFour: null,
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                digitOne: '4',
                digitTwo: '6',
                digitThree: '0',
                digitFour: '3',
            })
            setTimeout(() => {
                this.props.showAlert("Verifying mobile number", "Just a moment", false, true);
                setTimeout(() => {
                    this.props.showAlert("Verification Successful", "", false, false);
                    setTimeout(() => {
                        this.props.showAlert("Set Passcode", "Secure your account by setting up passcode.", true, false);
                    }, 2000)
                }, 4000)
            }, 2000)
        }, 3000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginLeft: 5, color: '#ffffff', fontSize: 20 }}>Enter OTP which is sent on ur mobile:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid="#fff"
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            value={this.state.digitOne}
                        />

                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid="#fff"
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            value={this.state.digitTwo}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid="#fff"
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            value={this.state.digitThree}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid="#fff"
                            placeholderTextColor="#fff"
                            keyboardType={"numeric"}
                            style={styles.input}
                            value={this.state.digitFour}
                        />
                    </View>
                </View>
                <Text style={{ marginLeft: 5, marginVertical: 10, padding: 5, textAlign: 'center', textDecorationLine: 'underline', color: '#ffffff' }}>Dint get OTP?</Text>
                <TouchableOpacity style={styles.zulBtn} onPress={this.props.nextHandler}>
                    <Text style={[styles.whiteText, { fontWeight: 'bold' }]}>{'Submit OTP'.toUpperCase()}</Text>
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
        borderRadius: 5
    },
    whiteText: {
        color: '#fff'
    }

});
