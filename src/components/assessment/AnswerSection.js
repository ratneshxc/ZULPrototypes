
import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
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
  getAllQuestion: (questions) => dispatch({
    type: 'AssessmentReducer_GetAllQuestions',
    payload: questions
  }),
  loadingNextQuestion: (isLoading) => dispatch({
    type: 'AssessmentReducer_IsNextQuestionLoading',
    payload: isLoading
  }),
  addReward: (reward) => dispatch({
    type: 'RewardReducer_AddReward',
    payload: reward
  }),
  congratulate: (value) => dispatch({
    type: 'RewardReducer_Congratulate',
    payload: value
  }),
  openRewardModal: (value) => dispatch({
    type: 'RewardReducer_RewardModalVisible',
    payload: value
  })
})

class AnswerSection extends Component {

  selectAnswer = (index) => {
    this.props.questions[this.props.currentQuestion.no - 1].selectedIndex = index;
    this.props.getAllQuestion(this.props.questions);
    let questionIndex = this.props.currentQuestion.no;
    if (questionIndex !== this.props.questions.length) {
      if (this.props.currentQuestion.no >= this.props.questions.length) {
        questionIndex--;
      }
      if (this.props.currentQuestion.no == 5) {
        this.props.addReward(100);
        this.props.congratulate(true);
        setTimeout(() => {
          this.props.openRewardModal(true);
        }, 500)
        setTimeout(() => {
          this.props.congratulate(false);
        }, 1800)
      } else {
        setTimeout(() => {
          this.props.loadingNextQuestion(true);
          setTimeout(() => {
            this.props.goToQuestion(this.props.questions[questionIndex]);
            this.props.loadingNextQuestion(false);
          }, 200)
        }, 500)
      }
    } else {
      Alert.alert(
        'Congratulations',
        'Just one more step to go. Do you want to submit assessment and get report?',
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          {
            text: 'Get Report', onPress: () => {
              this.props.goToReportClick();
            }
          },
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    return (
      <ScrollView style={styles.optionView}>
        <RadioGroup
          size={24}
          thickness={2}
          color='rgb(0, 96, 168)'
          highlightColor='#3956976b'
          selectedIndex={this.props.currentQuestion.selectedIndex}
          onSelect={(index, value) => this.selectAnswer(index)}
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


