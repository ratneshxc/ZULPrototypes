import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Text, H3 } from 'native-base';

export default class UserDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                underlineColorAndroid="#fff"
                    placeholderTextColor="#fff"
                    placeholder={'Username'}
                    style={[styles.input, { borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}
                />
                <TextInput
                    underlineColorAndroid="#fff"
                    placeholderTextColor="#fff"
                    placeholder={'Mobile Number'}
                    style={[styles.input, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}
                />
                <TouchableOpacity style={styles.zulBtn} onPress={() => this.props.showAlert('Congratulations!', 'Now you are Zinger. We will take care of your wellness.', true, false)}>
                    <Text style={[styles.whiteText, { fontWeight: 'bold' }]}>{'Create new account'.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontSize: 20,
        color:'#fff'
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

