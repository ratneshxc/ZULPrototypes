import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Text, H3 } from 'native-base';

export default class UserDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ marginBottom: 5 }}>UserName :</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={{ marginBottom: 5 }}>Mobile Number :</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.zulBtn} onPress={this.props.nextHandler}>
                    <Text style={[styles.whiteText, { fontWeight: 'bold' }]}>{'Next'.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        width: "100%",
        fontSize: 20,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    zulBtn: {
        backgroundColor: '#00c497',
        alignItems: 'center',
        paddingVertical: 15,
        marginVertical: 15,
        borderRadius: 10
    },
    whiteText: {
        color: '#fff'
    }

});

