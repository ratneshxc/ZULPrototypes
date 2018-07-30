import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class AssesmentDescription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Your Thought Control score indicates that you have negative Stress ...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        padding:10
    },
    textStyle:{
        color:'#222222',
        fontWeight:'bold',

    }
});