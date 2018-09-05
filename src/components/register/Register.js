import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Card } from 'native-base';
import UserDetails from './UserDetails';
import OTP from './OTP';
import Passcode from './Passcode';
import LinearGradient from 'react-native-linear-gradient';

export default class Register extends React.Component {

  Dashboard = () => {
    this.props.navigation.navigate('MainApp');
  }

  goToNext = () => {
    this.refs.WizardRef.goToNext();
  }

  goToPrevious = () => {
    this.refs.WizardRef.goToPrevious();
  }

  render() {
    return (
      <LinearGradient colors={['#63E2FF', '#B066FE']} style={{ flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
          <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Sign Up</Text>
          <WizardTab ref='WizardRef'>
            <UserDetails title="Zinger Details" nextHandler={this.goToNext} prevHandler={this.goToPrevious} />
            <OTP title="Enter OTP" nextHandler={this.goToNext} prevHandler={this.goToPrevious} />
            <Passcode title="Set Passcode" nextHandler={this.goToNext} prevHandler={this.goToPrevious} goToDashboard={this.Dashboard} />
          </WizardTab>
        </View>
      </LinearGradient>
    )
  }
}

class WizardTab extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0
    }
  }

  setCurrentStep = (step) => {
    this.setState({
      currentStep: step
    })
  }

  goToNext = () => {
    this.setCurrentStep(++this.state.currentStep)
  }

  goToPrevious = () => {
    this.setCurrentStep(--this.state.currentStep)
  }
  render() {
    let { children } = this.props;

    return (
      <View style={styles.container}>
        {children[this.state.currentStep]}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  loginLogo: {
    height: 100,
    width: 100
  },
  wizardStep: {
    flex: 1,
    padding: 5
  },
  wizardInternal: {
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#ffffff',
    borderBottomWidth: 2,
    borderColor: '#ddd',
    borderRadius: 10
  },
  selectedWizardStep: {
    flex: 1,
    padding: 5
  },
  selectedWizardInternal: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#00c497',
    paddingVertical: 5,
    borderRadius: 10
  }
});
