import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { H2, Card } from 'native-base';
import UserDetails from './UserDetails';
import OTP from './OTP';
import Passcode from './Passcode';

export default class Register extends React.Component {

  Dashboard = () => {
    this.props.navigation.navigate('Dashboard');
  }

  goToNext = () => {
    this.refs.WizardRef.goToNext();
  }

  goToPrevious = () => {
    this.refs.WizardRef.goToPrevious();
  }

  render() {
    return (
      <View style={{ padding: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 20 }}>
          <H2 style={{}}>Be A Zinger</H2>
        </View>
        <WizardTab ref='WizardRef'>
          <UserDetails title="Zinger Details" nextHandler={this.goToNext} prevHandler={this.goToPrevious} />
          <OTP title="Enter OTP" nextHandler={this.goToNext} prevHandler={this.goToPrevious} />
          <Passcode title="Set Passcode" nextHandler={this.goToNext} prevHandler={this.goToPrevious} goToDashboard={this.Dashboard} />
        </WizardTab>
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

      <Card style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          {children.map((x, i) => (
            i == this.state.currentStep ?
              <TouchableOpacity key={i} onPress={() => this.setCurrentStep(i)} style={styles.selectedWizardStep}>
                <View style={styles.selectedWizardInternal}>
                  <Text style={{ color: '#ffffff' }}>Step {i + 1}</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10, color: '#ffffff' }}>{x.props.title}</Text>
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
      </Card>
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
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 5,
    backgroundColor: '#ffffff'
  },
  selectedWizardStep: {
    flex: 1,
    padding: 5
  },
  selectedWizardInternal: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3d5aae',
    paddingVertical: 5,
    backgroundColor: '#3d5aae'
  }
});
