import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import Form from './Form';

export default class login extends React.Component {

  takeAssessment = () => {
    this.props.navigation.navigate('Assessment');
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../../assests/images/Yoga2.jpg')}>
        <Form />
        <View>
          <Text>20,000 people have already taken assessment.Would you try?</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.takeAssessment}>
            <Text>Take Assessment</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

