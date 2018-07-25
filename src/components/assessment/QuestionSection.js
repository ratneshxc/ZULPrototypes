import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
import FadeInView from '../animations/FadeInView';
import SlideRightView from '../animations/SlideRightView';
// import OptionsSection from './OptionsSection';
// import LikeSection from './LikeSection';
import QuestionHeader from './QuestionHeader';


const mapStateToProps = state => ({
  currentQuestion: state.Assessment.currentQuestion
})


class QuestionSection extends Component {

  render() {
    const currentQuestion = this.props.currentQuestion;
    return (

      <ImageBackground source={currentQuestion.imageURL} resizeMode="cover" style={styles.backImage}>
        <QuestionHeader />
        <Progress.Bar style={{borderRadius:0,borderWidth:0,marginLeft:-1,padding:0}} progress={currentQuestion.progressBar} width={null} color={currentQuestion.progressBarColor} unfilledColor={'#ffffff'} />
        <SlideRightView>
          <View style={styles.questionView}>
            {/* <OptionsSection />           */}
            <View style={styles.questionContainer}>
              <FadeInView duration={500} delay={200}>
                <Text style={styles.questionStatement}>{currentQuestion.statement}</Text>
              </FadeInView>
            </View>
            {/* <LikeSection /> */}
          </View>
        </SlideRightView>
      </ImageBackground>

    );
  }
}


export default connect(mapStateToProps)(QuestionSection)

const styles = StyleSheet.create({
  backImage: {
    flex: 1
  },
  questionView: {
    margin: 15,
    backgroundColor: '#00000066',
    flex: 1,
    padding: 10,
    flexDirection:'column'
  },

  questionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  questionStatement: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 30
  }
})
