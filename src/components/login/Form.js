import React, { Component } from 'react';
import { TextInput, View, StyleSheet,Image } from 'react-native';
import Button from 'react-native-button';
export default class App extends Component {
  onLogin() {
    console.log('login');
  }

  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../../assests/images/animation.gif')}>
        </Image>
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
        <Button onPress={this.onLogin.bind(this)}>Login</Button>
        <View>
          <Button onPress={this.forgotPassword}>Forgot password?</Button>
          <Button onPress={this.Register}>Register</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
  },
  input: {

  },
});
