import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import ShareAction from './SharAction';
export default class AssesmentStatus extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: 5
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',

          }}
        >

        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
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
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <ShareAction />

          </View>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',

          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textStyle]}>{'\u2022'} 50% of your age group has same score as you</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textStyle]}>{'\u2022'} 10% below the healthy average of Emotional State</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textStyle]}>{'\u2022'} Strong Areas: <Text style={{ color: '#28a745' }}>Thought Clarity</Text></Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textStyle]}>{'\u2022'} Improvement Areas: <Text style={{ color: '#dc3545' }}>High Stress</Text></Text>
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
    fontSize: 15,
  }

});