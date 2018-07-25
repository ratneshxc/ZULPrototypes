import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';


export default class Dashboard extends React.Component {
  render() {
      return (
          <View style={styles.container}>
          <Text>Dashboard</Text>
          </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
  }
})
