import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Card } from 'native-base';
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
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, backgroundColor: '#00a2da', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#fff', padding: 5, borderRadius: 10 }}>
            <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
          </View>
          <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

        </View>
        <View style={{ position: 'absolute', borderRadius: 10, backgroundColor: '#fff', top: Dimensions.get('screen').height / 2 - 100, right: 10, left: 10 }}>
          <WizardTab ref='WizardRef'>
            <UserDetails title="Zinger Details" nextHandler={this.goToNext} prevHandler={this.goToPrevious} />
            <OTP title="Enter OTP" nextHandler={this.goToNext} prevHandler={this.goToPrevious} />
            <Passcode title="Set Passcode" nextHandler={this.goToNext} prevHandler={this.goToPrevious} goToDashboard={this.Dashboard} />
          </WizardTab>
        </View>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 20 }}>
          <H2 style={{}}>Be A Zinger</H2>
        </View> */}

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
                  <Text style={{ color: '#3d5aae' }}>Step {i + 1}</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10, color: '#3d5aae' }}>{x.props.title}</Text>
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
    borderBottomWidth: 3,
    borderColor: '#ddd',
    borderRadius:10
  },
  selectedWizardStep: {
    flex: 1,
    padding: 5
  },
  selectedWizardInternal: {
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: '#3d5aae',
    paddingVertical: 5,
    borderRadius:10
  }
});
