import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Button} from 'native-base';

export default class AssesmentAction extends Component {
  render() {
    return (
      <View style={styles.container}>    
      <Button full primary style={styles.mt15}>
            <Text style={{color:'white'}}>Go To Dashboard</Text>
          </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mt15:{
        marginBottom:20
    },
    container: {
        flex:1,
        flexDirection:'column',
        padding:10
    },
    textStyle:{
        color:'#222222',

    }
});