import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
        </View>
        <TextInput underlineColorAndroid='transparent'
          placeholder={'Username'}
          placeholderTextColor='white'
          style={styles.input}
        />

        <TextInput underlineColorAndroid='transparent'
          placeholder={'Password'}
          placeholderTextColor='white'
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.logInBtn}>
          <Text style={styles.whiteText}>Login</Text>
        </TouchableOpacity>
        <View>          
          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={styles.whiteText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7
  },
  input: {
    margin: 5,
    backgroundColor:'#dedede63'
  },
  loginLogo: {
    height: 150,
    width: 150
  },
  logoContainer: {
    alignItems: 'center'
  },
  logInBtn: {
    backgroundColor: '#27ae60',
    margin: 5,
    alignItems: 'center',
    padding: 10
  },
  forgotBtn: {
   padding:5
  },
  whiteText:{
    color:'#ffffff'
  }
});
