import React, { Component } from 'react';
import { View, Text, Button,Image } from 'react-native';


export default class login extends React.Component {
  takeAssessment = () => {
    this.props.navigation.navigate('Assessment');
  }

  render() {
    return (
      <View>
        
        <Button title="Take Assessment" onPress={this.takeAssessment} />
      </View>
    )
  }
}
