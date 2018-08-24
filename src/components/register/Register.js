import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import { Button, Text, H2 } from 'native-base';

export default class Register extends React.Component {


  Dashboard = () => {
    this.props.navigation.navigate('Dashboard');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
        </View>
        <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
          <View>
            <H2 style={{ textAlign: 'center', marginVertical: 20 }}>Create an account</H2>
            <TextInput
              placeholder={'Name'}
              style={styles.input}
            />
            <TextInput
              placeholder={'Mobile Number'}
              keyboardType={"numeric"}  
              style={styles.input}
            />
            <Button block onPress={()=>this.props.navigation.navigate("OTP")}>
              <Text>Next</Text>
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
    width: "100%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ABABAB',
    marginBottom: 10,
    borderRadius: 5
  }

});
