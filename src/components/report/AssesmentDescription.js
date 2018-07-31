import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class AssesmentDescription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Your Thought Control score indicates that you have negative Stress. We suggest you go on a vaction or go to movie. Taking an off will reinvent your mind and help you see things from a different perspective ...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        padding:10
    },
    textStyle:{
        color:'#222222',

    }
});