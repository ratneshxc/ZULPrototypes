import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import SVGImage from 'react-native-remote-svg';
export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ padding: 5, borderRadius: 10 }}>
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
          <TouchableOpacity style={styles.logInBtn} onPress={this.props.goToDashboard}>
            <Text style={[styles.whiteText, { fontWeight: 'bold' }]}>{'Login'.toUpperCase()}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.forgotBtn}>
                <Text style={[styles.whiteText, { textDecorationLine: 'underline' }]}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity style={styles.registerBtn} onPress={this.props.goRegister}>
                <Text style={[styles.whiteText, { textDecorationLine: 'underline' }]}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
              <TouchableOpacity>
                <SVGImage style={{ width: 100, height: 80 }} source={require('../../assests/images/loginwallpapers/FaceID.svg')} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
              <TouchableOpacity>
                <SVGImage style={{ width: 100, height: 80 }} source={require('../../assests/images/loginwallpapers/TouchID.svg')} />
              </TouchableOpacity>
            </View>
          </View>

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
    backgroundColor: '#00c497',
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10
  },
  forgotBtn: {
    padding: 5
  },
  whiteText: {
    color: '#ffffff',
    fontSize: 15
  },
  registerBtn: {
    padding: 5
  }
});
