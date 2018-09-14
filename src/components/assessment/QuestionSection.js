import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import {Badge, Header, Footer, FooterTab, Left, Right, Body, Button, Container, Content } from 'native-base';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
import FadeInView from '../animations/FadeInView';
import SlideRightView from '../animations/SlideRightView';
// import QuestionHeader from './QuestionHeader';


const mapStateToProps = state => ({
  currentQuestion: state.Assessment.currentQuestion,
  isNextQuestionLoading: state.Assessment.isNextQuestionLoading,
  questions: state.Assessment.questions
})


class QuestionSection extends Component {

  render() {
    const currentQuestion = this.props.currentQuestion;
    return (

      <ImageBackground source={currentQuestion.imageURL} resizeMode="cover" style={styles.backImage}>
        {/* <QuestionHeader currentQuestion={currentQuestion}/> */}
        <Progress.Bar style={{ borderRadius: 0, borderWidth: 0, marginLeft: -1, padding: 0 }} progress={currentQuestion.progressBar} width={null} color={currentQuestion.progressBarColor} unfilledColor={'#ffffff'} />
        {!this.props.isNextQuestionLoading && <SlideRightView>
          <View style={styles.questionView}>
            <View>
              <Badge style={{backgroundColor:'#ffffff91'}}>
                <Text style={{fontWeight:'bold',color:'#000000',marginTop:3}}>{this.props.currentQuestion.no}/{this.props.questions.length}</Text>
              </Badge>
            </View>
            <View style={styles.questionContainer}>
              <FadeInView duration={500} delay={200}>
                <Text style={styles.questionStatement}>{currentQuestion.statement}</Text>
              </FadeInView>
            </View>
          </View>
        </SlideRightView>}
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
    flexDirection: 'column'
  },

  questionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  questionStatement: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 25
  }
})
