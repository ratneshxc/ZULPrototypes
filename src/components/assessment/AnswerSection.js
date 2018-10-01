
import React, { Component } from 'react';
import { Animated, Text, View, StyleSheet, ScrollView, Alert, Dimensions } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { connect } from 'react-redux';
import FadeInView from '../animations/FadeInView';
import { CheckBox } from 'react-native-elements'
import { Button } from 'native-base';
const windowObj = Dimensions.get('window');

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
  constructor(props) {
    super(props);
    this.state = {
      optionAnswer: this.props.currentQuestion.options,
      checksOptionAnswer:[],
      checkFadeIn: null,
      fadeAnimation: new Animated.Value(0),
      showAlert: false
    };
  }


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

  selectCheckBox = (index) => {
    this.state.optionAnswer[index].checked = !this.state.optionAnswer[index].checked;
    this.setState({
      optionAnswer: this.state.optionAnswer,
      checkFadeIn: null
    });
    for (let item of this.state.optionAnswer) {
      if (item.checked) {
        this.setState({
          checkFadeIn: this.renderButton(this.props.currentQuestion.no - 1)
        });
      }
    }
  }
  renderButton = (index) => {
    return <Button onPress={() => this.selectAnswer(index)} full>
      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Next</Text>
    </Button>
  }
  
  // generatechecksOptionAnswer = (num) => {
  //   var q = num/4;
  //   var r = num%4;
  //   for (let i = 0; i < q; i++) {
  //     var arr = [];
  //     for (let j = 0; j < 4; j++) {
  //       arr[j] = this.props.currentQuestion.options[j];
  //     }
  //     checksOptionAnswer.push(arr);
  //   }
  // }
  render() {
    // if(this.props.currentQuestion.ansType === 'multiple'){
    //   generatechecksOptionAnswer(this.props.currentQuestion.options.length);
    // }
    return (
      <ScrollView>
        <View style={styles.optionView}>
          {(this.props.currentQuestion.ansType === 'single') ?
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
            :
            this.state.optionAnswer.map((x, i) => (
              <CheckBox
                key={i}
                title={x.label}
                checked={x.checked}
                onPress={() => this.selectCheckBox(i)}
                containerStyle={{ backgroundColor: '#ffffff', borderWidth: 0 }}
                checkedColor='#1e90ff'
                size={35}
                textStyle={{ fontSize: 17 }}
              />
            ))
          }
          {(this.props.currentQuestion.ansType === 'multiple') ?
            this.state.checkFadeIn : null
          }
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  optionView: {
    paddingHorizontal: 10,
    paddingVertical: 10
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


