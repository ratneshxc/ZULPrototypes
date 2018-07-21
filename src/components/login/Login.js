import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import Form from './Form';
import LoginFooter from './LoginFooter';

export default class login extends React.Component {
  takeAssessment = () => {
    this.props.navigation.navigate('Assessment');
  }

  goRegister = () => {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <ImageBackground style={styles.loginContainer} source={require('../../assests/images/animation.gif')}>
        <View style={styles.loginInnerContainer}>
          <Form />
          <LoginFooter takeAssessment={this.takeAssessment} goRegister={this.goRegister} />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginInnerContainer: {
    backgroundColor: '#00000054',
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 80,
    padding: 10
  }
})