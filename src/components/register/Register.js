import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Keyboard } from 'react-native';
import { Text } from 'native-base';
import UserDetails from './UserDetails';
import OTP from './OTP';
import Passcode from './Passcode';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      title: '',
      description: '',
      showConfirm: true,
      showProgress: false,
      isKeyboardOpen: false
    };
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      isKeyboardOpen: true
    })
  }

  _keyboardDidHide = () => {
    this.setState({
      isKeyboardOpen: false
    })
  }

  showAlert = (title, desc, showConfirm, showProgress) => {
    this.setState({
      showAlert: true,
      title: title,
      description: desc,
      showConfirm: showConfirm,
      showProgress: showProgress
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
      title: '',
      description: ''
    });
  };
  goLandingPage = () => {
    this.props.navigation.navigate('LandingComponent');
  }
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
    const { showAlert, title, description, showConfirm, showProgress } = this.state;
    return (
      <LinearGradient colors={['#26D0CE', '#1A2980']} style={{ flex: 1, padding: 20 }}>
        <View style={{ alignItems: 'center' }}>
          {!this.state.isKeyboardOpen && <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />}
          <Text style={{ fontSize: 25, color: '#fff', textAlign: 'center' }}>Sign Up</Text>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
          <WizardTab ref='WizardRef'>
            <UserDetails title="Zinger Details" showAlert={this.showAlert} nextHandler={this.goToNext} prevHandler={this.goToPrevious} />
            <OTP title="Enter OTP" showAlert={this.showAlert} nextHandler={this.goToNext} prevHandler={this.goToPrevious} />
            <Passcode title="Set Passcode" showAlert={this.showAlert} nextHandler={this.goToNext} prevHandler={this.goToPrevious} goToDashboard={this.Dashboard} />
          </WizardTab>
          <TouchableOpacity style={{ padding: 5 }} onPress={this.goLandingPage}>
            <Text style={{ textDecorationLine: 'underline', color: '#ffffff', textAlign: 'center' }}>Quit Sign Up</Text>
          </TouchableOpacity>
        </View>

        <AwesomeAlert
          alertContainerStyle={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
          // titleStyle={{ fontSize: 20, color: '#3a3a3a' }}
          messageStyle={{ fontSize: 15, color: '#3a3a3a' }}
          confirmButtonTextStyle={{ fontSize: 16, paddingVertical: 5, textAlign: 'center' }}
          confirmButtonStyle={{ width: 200 }}
          show={showAlert}
          showProgress={showProgress}
          title={title}
          message={description}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={showConfirm}
          cancelText=""
          confirmText="Continue"
          confirmButtonColor="#00c497"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
            this.goToNext();
          }}
        />
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
