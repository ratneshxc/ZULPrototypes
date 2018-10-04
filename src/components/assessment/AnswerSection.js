
import React, { Component } from 'react';
import { Animated, Text, View, StyleSheet, TouchableOpacity, ScrollView, Alert, Dimensions } from 'react-native';
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
      optionAnswer: this.props.currentQuestion.options.slice(0, this.optionIndex),
      checkFadeIn: null,
      checkMoreOptionsBtn: null,
      checkLessOptionsBtn: null,
      fadeAnimation: new Animated.Value(0),
      showAlert: false,
      MoreOptions: true
    };
  }

  optionIndex = 4;
  totalOptions = this.props.currentQuestion.options.length;

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
      checkFadeIn: null,
      checkMoreOptionsBtn: null,
      checkLessOptionsBtn: null
    });
    for (let item of this.state.optionAnswer) {
      if (item.checked) {
        this.setState({
          checkFadeIn: this.renderButton(this.props.currentQuestion.no - 1),
          checkMoreOptionsBtn: (this.state.MoreOptions) ? this.renderMoreOptionsButton(this.props.currentQuestion.no - 1) : null,
          checkLessOptionsBtn: (!this.state.MoreOptions) ? this.renderLessOptionsButton(this.props.currentQuestion.no - 1) : null
        });
      }
    }
  }

  //To Display more CheckBox options on Click of More Options button
  showMoreOptions = (index) => {
    for (let i = index; i < this.totalOptions; i++) {
      this.state.optionAnswer.push(this.props.currentQuestion.options[i]);
    }
    this.setState({
      optionAnswer: this.state.optionAnswer,
      MoreOptions: false,
      checkMoreOptionsBtn: null,
      checkLessOptionsBtn: this.renderLessOptionsButton(this.props.currentQuestion.no - 1)
    })
  }

  //To Display only first four options on click of Less Options button
  showLessOptions() {
    this.state.optionAnswer = this.props.currentQuestion.options.slice(0, this.optionIndex),
      this.setState({
        optionAnswer: this.state.optionAnswer,
        MoreOptions: true,
        checkLessOptionsBtn: null,
        checkMoreOptionsBtn: this.renderMoreOptionsButton(this.props.currentQuestion.no - 1)
      })
  }

  //To Render the Next Button
  renderButton = (index) => {
    const nextBtn = (this.totalOptions <= 4) ?
      <Button small onPress={() => this.selectAnswer(index)} full>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Next</Text>
      </Button>
      // <TouchableOpacity onPress={() => this.showMoreOptions(this.optionIndex)}>
      //   <Text style={{ alignItems='center', borderWidth = 1, borderColor = 'black', padding= 10 }}>Next</Text>
      // </TouchableOpacity>
      :
      <Button small onPress={() => this.selectAnswer(index)} style={styles.NextBtn}>
        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', textAlign: 'center', alignContent: 'center', marginLeft: 30 }}>Next</Text>
      </Button>
      // <TouchableOpacity  onPress={() => this.showMoreOptions(this.optionIndex)}>
      //   <Text style={{ alignItems='center', borderWidth = 1, borderColor = 'black', padding= 10 }}>Next</Text>
      // </TouchableOpacity>
    return nextBtn;
  }

  //To Render More Options Button
  renderMoreOptionsButton = (index) => {
    return <Button small onPress={() => this.showMoreOptions(this.optionIndex)} style={styles.moreOptionsBtn}>
      <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>More Options...</Text>
    </Button>
    // return <TouchableOpacity  onPress={() => this.showMoreOptions(this.optionIndex)}>
    //   <Text style={{ alignItems='center', backgroundColor= '#DDDDDD', padding= 10 }}>More Options</Text>
    // </TouchableOpacity>
  }

  //To render Less Options Button
  renderLessOptionsButton = (index) => {
    return <Button small onPress={() => this.showLessOptions(index)} style={styles.lessOptionsBtn}>
      <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>Less Options...</Text>
    </Button>
  //    return <TouchableOpacity style={{ alignItems='center', backgroundColor= '#DDDDDD', padding= 10 }} onPress={() => this.showMoreOptions(this.optionIndex)}>
  //    <Text>More Options</Text>
  //  </TouchableOpacity>
  }

  render() {

    return (
      <ScrollView>
        { this.totalOptions > 4 ? <Text style={{color:'red', textAlign:'right', paddingRight:4}}>This Question contains multiple options</Text>: null}
        <View style={styles.optionView}>
          {
            (this.props.currentQuestion.ansType === 'single') ?
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

          {/* If there are more than 4 check options, we need More Options &  Next button*/}
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            {(this.state.MoreOptions && this.totalOptions > 4) ?
              this.state.checkMoreOptionsBtn : this.state.checkLessOptionsBtn
            }
            {(this.props.currentQuestion.ansType === 'multiple' && this.totalOptions > 4) ?
              this.state.checkFadeIn : null
            }
          </View>

          {/* If there are only 4 check options, we need only next button*/}
          {(this.props.currentQuestion.ansType === 'multiple' && this.totalOptions <= 4) ?
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
  },
  moreOptionsBtn: {
    backgroundColor: 'green',
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 100
  },
  lessOptionsBtn: {
    backgroundColor: 'orange',
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 100
  },
  NextBtn: {
    //backgroundColor: 'blue',
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 100
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerSection);


