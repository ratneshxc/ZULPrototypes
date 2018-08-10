import React, { Component } from "react";
import {
  Header,
  Title,
  Button,
  Right,
  Body,
} from "native-base";

import{View,Text,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ReportsHeader extends React.Component {


    render() {
        return (
           
          <View style={styles.container}>
          <View style={styles.headerLeft}>
              <Text style={styles.header}>{this.props.title}</Text>
          </View>
          <View style={styles.headerRight}>
              <Text style={{ color: '#ffffff', fontWeight: 'bold', marginTop: 3 }}>
              <Icon name="ellipsis-v" size={25} style={{color:"#FFFFFF"}} />
              </Text>
          </View>
      </View>
          
        )
    }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#5067ffd1',
      paddingVertical: 10,
      paddingHorizontal: 15,
      flexDirection: 'row'
  },
  header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ffffff'
  },
  headerLeft: {
      flex: 2
  },
  headerRight: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end'
  }
})