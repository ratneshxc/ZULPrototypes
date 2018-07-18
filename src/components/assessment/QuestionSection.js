import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
import FadeInView from '../animations/FadeInView';
import SlideRightView from '../animations/SlideRightView';

const mapStateToProps = state => ({
  currentQuestion: state.Assessment.currentQuestion
})


class QuestionSection extends Component {
  render() {
    const currentQuestion = this.props.currentQuestion;
    return (

      <ImageBackground source={currentQuestion.imageURL} resizeMode="cover" style={styles.backImage}>
        <SlideRightView>
          <View style={styles.questionView}>
            <View style={styles.questionHeader}></View>
            <Progress.Bar progress={currentQuestion.progressBar} width={null} color={"#0366d6"} unfilledColor={'#ffffff'} />

            <View style={styles.questionContainer}>
              <FadeInView duration={500} delay={200}>
                <Text style={styles.questionStatement}>{currentQuestion.statement}</Text>
              </FadeInView>
            </View>
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
    justifyContent: 'flex-end',
    padding: 10
  },
  questionHeader: {
    flex: 1
  },
  questionContainer: {
    flex: 9,
    justifyContent: 'flex-end',
  },
  questionStatement: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 30
  }
})
