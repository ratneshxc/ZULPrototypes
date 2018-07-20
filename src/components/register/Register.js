import React, { Component } from 'react';
import {
  View, Text, Image, StyleSheet, Dimensions,
  ImageBackground, KeyboardAvoidingView, ScrollView
} from 'react-native';
import Button from 'react-native-button'
import Form from './Form';

export default class Register extends React.Component {

  
  Dashboard = () => {
    this.props.navigation.navigate('Dashboard');
  }

  render() {
    let screenWidth = Dimensions.get('window').width
    let screenHeight = Dimensions.get('window').height
    return (
      <ScrollView contentContainerStyle={{}}>

        <View>
          <ImageBackground source={require('../../assests/images/reg-bg1.jpg')}
            style={{ width: screenWidth, height: screenHeight-25 }}>

            <View><Form Dashboard={this.Dashboard} /></View>

          </ImageBackground>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
