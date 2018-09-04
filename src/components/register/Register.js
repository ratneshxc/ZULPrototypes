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
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <LinearGradient colors={['#63E2FF', '#B066FE']} style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <View style={{ padding: 5, borderRadius: 10, marginTop: 20 }}>
            <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
          </View>
          <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
        </LinearGradient>
        <View style={{ flex: 1, backgroundColor: '#dcf6ff' }}>

        </View>
        <View style={{ position: 'absolute', borderRadius: 10, backgroundColor: '#fff', top: Dimensions.get('screen').height / 2 - 100, right: 10, left: 10 }}>
          <WizardTab ref='WizardRef'>
            <UserDetails title="Zinger Details" nextHandler={this.goToNext} prevHandler={this.goToPrevious} />
            <OTP title="Enter OTP" nextHandler={this.goToNext} prevHandler={this.goToPrevious} />
            <Passcode title="Set Passcode" nextHandler={this.goToNext} prevHandler={this.goToPrevious} goToDashboard={this.Dashboard} />
          </WizardTab>
        </View>
      </View>
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
        <View style={{ flexDirection: 'row' }}>
          {children.map((x, i) => (
            i == this.state.currentStep ?
              <TouchableOpacity key={i} onPress={() => this.setCurrentStep(i)} style={styles.selectedWizardStep}>
                <View style={styles.selectedWizardInternal}>
                  <Text style={{ color: '#00c497' }}>Step {i + 1}</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10, color: '#00c497' }}>{x.props.title}</Text>
                </View>
              </TouchableOpacity> :
              <TouchableOpacity key={i} onPress={() => this.setCurrentStep(i)} style={styles.wizardStep}>
                <View style={styles.wizardInternal}>
                  <Text>Step {i + 1}</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>{x.props.title}</Text>
                </View>
              </TouchableOpacity>
          ))}
        </View>
        <View style={{ padding: 5 }}>
          {children[this.state.currentStep]}
        </View>
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
