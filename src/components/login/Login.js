import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Button from 'react-native-button'
import Form from './Form'

export default class login extends React.Component {

  takeAssessment = () => {
    this.props.navigation.navigate('Assessment');
  }

  render() {
    let screenWidth = Dimensions.get('window').width
    let screenHeight = Dimensions.get('window').height
    return (
      <View>
        <ImageBackground source={require('../../assests/images/Yoga2.jpg')}
          style={{ width: screenWidth, height: screenHeight }}>
          <Image source={require('../../assests/images/zul.png')} style={{ left: 110, top: 100, width: 100, height: 100 }}>
          </Image>
          <View><Form /></View>
          <View style={{ top: 50 }}><Text style={{ padding: 12, fontSize: 16, color: '#000000', textAlign: 'center' }}><Text style={{ fontWeight: 'bold' }}>20,000</Text> people have already taken assessment.Would you try?</Text></View>
          <View style={{ top: 40, left: 2 }}>
            <Button
              style={{
                fontSize: 20,
                color: '#fff',
                backgroundColor: '#009CDF',
                left: 20,
                borderRadius: 20,
                padding: 12, width: 300
              }}
              onPress={this.takeAssessment}
            >Take Assessment</Button>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({


  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
