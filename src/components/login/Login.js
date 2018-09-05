import React from 'react';
import { StyleSheet } from 'react-native';
import Form from './Form';
import LinearGradient from 'react-native-linear-gradient';

class Login extends React.Component {

  goRegister = () => {
    this.props.navigation.navigate('Register');
  }
  goToDashboard = () => {
    this.props.navigation.navigate('MainApp');
  }

  render() {
    return (
      <LinearGradient colors={['#26D0CE', '#1A2980']} style={styles.loginInnerContainer}>
        <Form goRegister={this.goRegister} goToDashboard={this.goToDashboard} />
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