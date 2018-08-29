import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ backgroundColor: '#fff', padding: 5, borderRadius: 10 }}>
            <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
          </View>
        </View>
        <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, color: '#fff', textAlign: 'center', marginVertical: 10 }}>Login To Account</Text>
          <TextInput underlineColorAndroid='transparent'
            placeholder={'Username'}
            style={[styles.input, { borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}
          />
          <TextInput underlineColorAndroid='transparent'
            placeholder={'Password'}
            secureTextEntry={true}
            style={[styles.input, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}
          />
          <TouchableOpacity style={styles.logInBtn}>
            <Text style={styles.whiteText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={styles.whiteText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerBtn} onPress={this.goRegister}>
            <Text style={styles.whiteText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 20,
    fontSize: 20
  },
  loginLogo: {
    height: 100,
    width: 100
  },
  logInBtn: {
    backgroundColor: '#27ae60',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10
  },
  forgotBtn: {
    padding: 5
  },
  whiteText: {
    color: '#ffffff'
  },
  registerBtn: {
    backgroundColor: '#2980b9',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10
  }
});
