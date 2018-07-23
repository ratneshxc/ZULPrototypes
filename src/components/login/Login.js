import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import Form from './Form';
import LoginFooter from './LoginFooter';
import WallpaperAnimation from '../animations/WallpaperAnimation';

export default class login extends React.Component {
  constructor(){
    super();
    this.state={
      imageURL:require('../../assests/images/loginwallpaper.jpg')
    }
    setInterval(()=>{
      this.setState({
        imageURL:require('../../assests/images/loginwallpaper1.jpg')
      })
    },20000);
  }
  takeAssessment = () => {
    this.props.navigation.navigate('Assessment');
  }

  goRegister = () => {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WallpaperAnimation>
          <Image style={styles.loginContainer} resizeMode="cover" source={this.state.imageURL}>
          </Image>
        </WallpaperAnimation>
        <View style={styles.loginInnerContainer}>
          <Form />
          <LoginFooter takeAssessment={this.takeAssessment} goRegister={this.goRegister} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  },
  loginInnerContainer: {
    backgroundColor: '#00000054',
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 80,
    padding: 10,
    position: 'absolute'
  }
})