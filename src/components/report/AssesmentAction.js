import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Button} from 'native-base';

export default class AssesmentAction extends Component {

    goToDashboard=()=>{
      this.props.goToDashboard();
  }
  render() {
    return (
      <View style={styles.container}>    
      <Button full  style={styles.mt15} onPress={this.goToDashboard}>
            <Text style={{color:'white'}} >Go To Dashboard</Text>
          </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mt15:{
        marginBottom:20,
        backgroundColor:'#5067ffd1'
    },
    container: {
        flex:1,
        flexDirection:'column',
        paddingTop:10
    },
    textStyle:{
        color:'#222222',

    }
});