import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';

const mapStateToProps = state => ({
  currentQuestion: state.Assessment.currentQuestion
})


class QuestionSection extends Component {
  render() {
    const currentQuestion = this.props.currentQuestion;
    return (
      <ImageBackground source={currentQuestion.imageURL} resizeMode="cover" style={styles.backImage}>
        <View style={styles.questionView}>
          <View style={styles.questionHeader}></View>
          <Progress.Bar progress={0.3} width={null} color={"#0366d6"} unfilledColor={'#ffffff'} />
          
          <View style={styles.questionContainer}>
            <Text style={styles.questionStatement}>{currentQuestion.statement}</Text>
          </View>
        </View>
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
    margin: 10,
    backgroundColor: '#395697c7',
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
    fontWeight: 'bold',
    fontSize: 35
  }
})
