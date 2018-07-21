
import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { connect } from 'react-redux';
import FadeInView from '../animations/FadeInView';

const mapStateToProps = state => ({
  currentQuestion: state.Assessment.currentQuestion,
  questions: state.Assessment.questions
})

const mapDispatchToProps = dispatch => ({
  goToQuestion: (question) => dispatch({
    type: 'AssessmentReducer_GetQuestion',
    payload: question
  }),
  loadingNextQuestion: (isLoading) => dispatch({
    type: 'AssessmentReducer_IsNextQuestionLoading',
    payload: isLoading
  })
})

class AnswerSection extends Component {
  goToNextQuestion = () => {
    setTimeout(() => {
      this.props.loadingNextQuestion(true);
      setTimeout(() => {
        this.props.goToQuestion(this.props.questions[this.props.currentQuestion.no]);
        this.props.loadingNextQuestion(false);
      }, 100)
    }, 500)

  }
  render() {
    return (
        <ScrollView style={styles.optionView}>
          <RadioGroup
            size={24}
            thickness={2}
            color='rgb(0, 96, 168)'
            highlightColor='#3956976b'
            onSelect={(index, value) => this.goToNextQuestion()}
          >
            {this.props.currentQuestion.options.map((x, i) => (

              <RadioButton style={styles.radio} key={i} value={x.value} >
                <FadeInView duration={500} delay={i * 100 + 200}>
                  <Text style={styles.labeltext}>{x.label}</Text>
                </FadeInView>
              </RadioButton>

            ))}
          </RadioGroup>
          <View></View>
        </ScrollView>
        
    );
  }
}

const styles = StyleSheet.create({
  optionView: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  radio: {
    padding: 20,
    backgroundColor: '#d6dff552',
    marginVertical: 2,
    borderRadius: 10
  },
  labeltext: {
    fontSize: 18,
    marginLeft: 10,
    color: 'rgb(0, 96, 168)'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerSection);


