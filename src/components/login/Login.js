import React, { Component } from 'react';
import { Text, View, Button,StyleSheet } from 'react-native';

export default class Login extends Component {
  takeAssessment = () => {
    this.props.navigation.navigate('Assessment');
  }
  render() {
    return (
      <View>
        <Text>LogIn</Text>
        <Button onPress={this.takeAssessment} title="Take Assessment"></Button>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
