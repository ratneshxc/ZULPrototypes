import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
export default class AssesmentStatus extends Component {
  render() {
    return (
      <View 
        style ={{
          flex:1,
          alignItems:"center"
,          marginTop:10
        }}
      >
          <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
      </View>
    )
  }
}