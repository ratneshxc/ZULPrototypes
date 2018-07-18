import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Button from 'react-native-button';
export default class App extends Component {
  onLogin() {
   console.log('login');
  }

  render() {
    return (
         <View style={styles.container}>
        <TextInput  underlineColorAndroid='transparent'
          placeholder={'Username'}
          placeholderTextColor='white'
          style={styles.input}
        />
        <TextInput  underlineColorAndroid='transparent'
          placeholder={'Password'}
          placeholderTextColor='white'
          secureTextEntry={true}
          style={styles.input}
        />
           <Button
          style={{
            fontSize:20,
            color:'#fff',
            backgroundColor:'#009CDF',
            borderRadius:20,
            padding:12,width:300
          }}
          onPress={this.onLogin.bind(this)}
        >Login</Button>
       <View style={{flexDirection:'row'}}>
       <Button
          style={{
           fontSize:16,
           color:'#000000',
              borderRadius:20,
           padding:12,right:12,width:180
       }}
         onPress={this.forgotPassword}
       >Forgot password?</Button>
        <Button
          style={{
           fontSize:16,
           color:'#000000',
          borderRadius:20,
           left:10,
           padding:12,width:100
       }}
         onPress={this.Register}
       >Register</Button>
           </View>
           </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top:50,
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
