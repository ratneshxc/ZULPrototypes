import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Form from './Form';
import LoginFooter from './LoginFooter';
import WallpaperAnimation from '../animations/WallpaperAnimation';

export default class login extends React.Component {

  takeAssessment = () => {
    this.props.navigation.navigate('Assessment');
  }

  goRegister = () => {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={styles.loginInnerContainer}>
        <Form />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginInnerContainer: {
    flex: 1,
    backgroundColor: '#00a2da',
    padding: 20
  }
})