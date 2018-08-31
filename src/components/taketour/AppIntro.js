import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import { Text } from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import Image from 'react-native-remote-svg';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    color: '#fff'
  },
  title: {
    fontSize: 30,
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});

const slides = [
  {
    key: 'sd0',
    title: 'Physical',
    text: 'Physical Wellness is the ability to maintain a healthy quality of life that allows us to get through our daily activities without undue fatigue or physical stress. The ability to recognize that our behaviors have a significant impact on our wellness and adopting healthful habits (routine check ups, a balanced diet, exercise, etc.) while avoiding destructive habits (tobacco, drugs, alcohol, etc.) will lead to optimal Physical Wellness.',
    icon: require('../../assests/images/dashboard/physical.svg'),
    colors: ['#63E2FF', '#B066FE']
  },
  {
    key: 'sd1',
    title: 'Emotional',
    text: 'Emotional Wellness is the ability to understand ourselves and cope with the challenges life can bring. The ability to acknowledge and share feelings of anger, fear, sadness or stress; hope, love, joy and happiness in a productive manner contributes to our Emotional Wellness.',
    icon: require('../../assests/images/dashboard/emotional.svg'),
    colors: ['#A3A1FF', '#3A3897']
  },
  {
    key: 'sd2',
    title: 'Environmental',
    text: 'Environmental Wellness is the ability to recognize our own responsibility for the quality of the air, the water and the land that surrounds us. The ability to make a positive impact on the quality of our environment, be it our homes, our communities or our planet contributes to our Environmental Wellness.',
    icon: require('../../assests/images/dashboard/environmental.svg'),
    colors: ['#29ABE2', '#4F00BC']
  },
  {
    key: 'sd3',
    title: 'Financial',
    text: "Financial Wellness is the ability to have control over one's financial future and to take appropriate financial decisions in accordance with one's life needs.",
    icon: require('../../assests/images/dashboard/financial.svg'),
    colors: ['#63E2FF', '#B066FE']
  },
  {
    key: 'sd4',
    title: 'Intellectual',
    text: 'Intellectual Wellness is the ability to open our minds to new ideas and experiences that can be applied to personal decisions, group interaction and community betterment. The desire to learn new concepts, improve skills and seek challenges in pursuit of lifelong learning contributes to our Intellectual Wellness.',
    icon: require('../../assests/images/dashboard/intellectual.svg'),
    colors: ['#A3A1FF', '#3A3897']
  },
  {
    key: 'sd5',
    title: 'Occupational',
    text: 'Occupational Wellness is the ability to get personal fulfillment from our jobs or our chosen career fields while still maintaining balance in our lives. Our desire to contribute in our careers to make a positive impact on the organizations we work in and to society as a whole leads to Occupational Wellness.',
    icon: require('../../assests/images/dashboard/occupational.svg'),
    colors: ['#29ABE2', '#4F00BC']
  },
  {
    key: 'sd6',
    title: 'Social',
    text: 'Social Wellness is the ability to relate to and connect with other people in our world. Our ability to establish and maintain positive relationships with family, friends and co-workers contributes to our Social Wellness.',
    icon: require('../../assests/images/dashboard/social.svg'),
    colors: ['#63E2FF', '#B066FE']
  },
  {
    key: 'sd7',
    title: 'Spiritual',
    text: 'Spiritual Wellness is the ability to establish peace and harmony in our lives. The ability to develop congruency between values and actions and to realize a common purpose that binds creation together contributes to our Spiritual Wellness.',
    icon: require('../../assests/images/dashboard/spiritual.svg'),
    colors: ['#A3A1FF', '#3A3897']
  }
];

export default class AppIntro extends React.Component {
  _renderItem = props => (
    <LinearGradient colors={props.colors} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignItems: 'center', padding: 20 }}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 20, marginVertical: 20 }}>
        <Image source={props.icon} style={{ width: 200, height: 200 }} />
      </View>
      <Text style={styles.text}>{props.text}</Text>
    </LinearGradient>
  );
  _done = () => {
    this.props.navigation.navigate("LandingComponent")
  }

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        onDone={this._done}
        onSkip={this._done}
        bottomButton
        showSkipButton
      />
    );
  }
}