import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import ShareAction from './SharAction';
import DownloadAction from './DownloadAction';
export default class AssesmentStatus extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection:'row',
          marginTop:5
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center"            
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
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            alignSelf:'center'
          }}
        >
         <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.textStyle]}>50% of your peers has same score</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.textStyle]}><Text style={{color: '#dc3545'}}>10% below</Text> the healthy average</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.textStyle]}>Strong Areas: <Text style={{color: '#28a745'}}>Thought Clarity</Text></Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.textStyle]}>Improvement Areas: <Text style={{color: '#dc3545'}}>High Stress</Text></Text>
          </View>
          <View style={{ flexDirection: 'row' ,justifyContent:'flex-end',marginTop:10}}>
                                <ShareAction />
                                <DownloadAction />

          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
      flex: 5,
      fontFamily: 'Arial',
      color: "#222",
      fontSize: 14,
  }

});