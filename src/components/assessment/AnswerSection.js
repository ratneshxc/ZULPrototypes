
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentQuestion: state.Assessment.currentQuestion,
  questions: state.Assessment.questions
})

const mapDispatchToProps = dispatch => ({
  goToQuestion: (question) => dispatch({
    type: 'AssessmentReducer_GetQuestion',
    payload: question
  })
})

class AnswerSection extends Component {
  goToNextQuestion = () => {
    this.props.goToQuestion(this.props.questions[this.props.currentQuestion.no]);
  }
  render() {
    return (
      <View style={styles.optionView}>
        <RadioGroup
          size={24}
          thickness={2}
          color='rgb(0, 96, 168)'
          highlightColor='#3956976b'
          onSelect={(index, value) => this.goToNextQuestion()}
        >
          {this.props.currentQuestion.options.map((x, i) => (
            <RadioButton style={styles.radio} key={i} value={x.value} >
              <Text style={styles.labeltext}>{x.label}</Text>
            </RadioButton>
          ))}
        </RadioGroup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionView: {
    padding: 10
  },
  radio: {
    padding: 20
  },
  labeltext: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '500'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerSection);


