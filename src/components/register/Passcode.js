import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import { Button, Text, H2 } from 'native-base';

export default class Passcode extends React.Component {



    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
                </View>
                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
                    <View>
                        <H2 style={{ textAlign: 'center', marginVertical: 20 }}>Enter your 4 digit passcode</H2>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                keyboardType={"numeric"}
                                style={styles.input}
                            />
                            <TextInput
                                keyboardType={"numeric"}
                                style={styles.input}
                            />
                            <TextInput
                                keyboardType={"numeric"}
                                style={styles.input}
                            />
                            <TextInput
                                keyboardType={"numeric"}
                                style={styles.input}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={styles.input}
                            />
                            <TextInput
                                style={styles.input}
                            />
                            <TextInput
                                style={styles.input}
                            />
                            <TextInput
                                style={styles.input}
                            />
                        </View>
                        <Button block onPress={() => this.props.navigation.navigate("MainApp")}>
                            <Text>Let's Go</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    loginLogo: {
        height: 150,
        width: 150
    },
    input: {
        flex: 1,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ABABAB',
        marginBottom: 10,
        borderRadius: 5,
        margin: 5
    }

});
