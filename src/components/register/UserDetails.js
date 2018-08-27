import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Text, H3 } from 'native-base';

export default class UserDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>UserName :</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text>Mobile Number :</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                    />
                </View>
                <Button block onPress={this.props.nextHandler}>
                    <Text>Next</Text>
                </Button>
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
    }

});

