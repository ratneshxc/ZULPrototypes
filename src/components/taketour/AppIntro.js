import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import { Text } from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import Image from 'react-native-remote-svg';
import LinearGradient from 'react-native-linear-gradient';

const slides = [
  {
    key: 'sd0',
    title: 'Physical',
    text: 'Physical Activity & Fitness, Diet & Nutrition, Medical Self-Care',
    icon: require('../../assests/images/dashboard/physical.svg'),
    colors: ['#43cea2', '#185a9d']
  },
  {
    key: 'sd1',
    title: 'Emotional',
    text: 'Stress Management, Depression & Anxiety, Crisis Care',
    icon: require('../../assests/images/dashboard/emotional.svg'),
    colors: ['#1A2980', '#26D0CE']
  },
  {
    key: 'sd2',
    title: 'Environmental',
    text: 'Respect for & Awareness of Surroundings, Community Impact ',
    icon: require('../../assests/images/dashboard/environmental.svg'),
    colors: ['#348F50', '#56B4D3']
  },
  {
    key: 'sd3',
    title: 'Financial',
    text: "Financial Behaviour & Outcomes, Managing Expenses & Financial Stress",
    icon: require('../../assests/images/dashboard/financial.svg'),
    colors: ['#02AAB0', '#00CDAC']
  },
  {
    key: 'sd4',
    title: 'Intellectual',
    text: 'Creativity, Curiosity & Lifelong Learning for Personal and Career Development',
    icon: require('../../assests/images/dashboard/intellectual.svg'),
    colors: ['#314755', '#26a0da']
  },
  {
    key: 'sd5',
    title: 'Occupational',
    text: 'Safe and Nurturing Workplace Environment, Addressing Stress',
    icon: require('../../assests/images/dashboard/occupational.svg'),
    colors: ['#373B44', '#4286f4']
  },
  {
    key: 'sd6',
    title: 'Social',
    text: 'Meaningful Relationships with Family, Friends, Community & Co-Workers ',
    icon: require('../../assests/images/dashboard/social.svg'),
    colors: ['#8360c3', '#2ebf91']
  },
  {
    key: 'sd7',
    title: 'Spiritual',
    text: 'Love, Hope, Charity, Values & Beliefs',
    icon: require('../../assests/images/dashboard/spiritual.svg'),
    colors: ['#283c86', '#45a247']
  }
];

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 20
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

export default class AppIntro extends React.Component {
  _renderItem = props => (
    <LinearGradient colors={props.colors} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignItems: 'center', padding: 20, flexDirection: 'column' }}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 20, marginVertical: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={props.icon} style={{ width: 150, height: 150 }} />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
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