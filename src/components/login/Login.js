import React from 'react';
import { StyleSheet, Keyboard } from 'react-native';
import Form from './Form';
import LinearGradient from 'react-native-linear-gradient';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isKeyboardOpen: false
    }
  }
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

  goRegister = () => {
    this.props.navigation.navigate('Register');
  }
  goToDashboard = () => {
    this.props.navigation.navigate('MainApp');
  }

  render() {
    return (
      <LinearGradient colors={['#26D0CE', '#1A2980']} style={styles.loginInnerContainer}>
        <Form isKeyboardOpen={this.state.isKeyboardOpen} goRegister={this.goRegister} goToDashboard={this.goToDashboard} />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  loginInnerContainer: {
    flex: 1,
    padding: 20
  }
})

export default Login;