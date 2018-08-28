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
      <View style={{ flex: 1 }}>
        <View style={styles.loginInnerContainer}>
          <Form />
          <LoginFooter takeAssessment={this.takeAssessment} goRegister={this.goRegister} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginInnerContainer: {
    flex: 1
  }
})