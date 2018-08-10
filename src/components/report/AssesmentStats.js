import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import InfoAction from './InfoAction';
import AssesmentSummaryLayout from './AssesmentSummaryLayout';
export default class AssesmentStatus extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: 5,
          backgroundColor: "#ffffff",
          // backgroundColor: '#dddddd52'
        }}
      >
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={{ flex: 1, color: '#000000', fontWeight: 'bold', fontSize: 16 }}> Summary</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <InfoAction />

          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}
        >

          <AssesmentSummaryLayout stats={this.props.stats}/>
        </View>
      </View>
    )
  }
}
