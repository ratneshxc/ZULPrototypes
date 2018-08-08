import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ShareAction from './SharAction';
export default class AssesmentStatus extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: 5,
          backgroundColor: '#dddddd52'
        }}
      >
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={{ flex: 1, color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Summary</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <ShareAction />

          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            minHeight: 200
          }}
        >

          <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, padding: 5 }}>
            <AnimatedCircularProgress
              size={200}
              width={10}
              fill={80}
              tintColor="#5067FF"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#ddd">
              {
                (fill) => (
                  <View>
                    <Text style={styles.points}>
                      80%
                                </Text>
                    <Text style={styles.caption}>
                      Mind Master
                                </Text>
                  </View>
                )
              }
            </AnimatedCircularProgress>
          </View>
          {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <ShareAction />

          </View> */}
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
  },
  points: {
    fontSize: 20,
    color: '#353535',
    textAlign: 'center'
  },
  caption: {
    fontSize: 15,
    textAlign: 'center',
    color: 'green'
  }

});