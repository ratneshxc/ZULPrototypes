import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Text } from 'native-base';
import {connect} from 'react-redux';

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


class FooterSection extends React.Component {

    goToNextQuestion = () => {
        setTimeout(() => {
          this.props.loadingNextQuestion(true);
          setTimeout(() => {
            this.props.goToQuestion(this.props.questions[this.props.currentQuestion.no]);
            this.props.loadingNextQuestion(false);
          }, 200)
        }, 500)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.footerBtn}>
                    <Button danger style={styles.btn} onPress={this.props.goToLoginClick}>

                        <Text>Cancel</Text>
                    </Button>
                </View>
                <View style={styles.submitBtn}>
                    <Button success style={styles.btn}>

                        <Text>Submit</Text>
                    </Button>
                </View>
                <View style={styles.footerBtn}>
                    <Button info style={styles.btn} onPress={this.goToNextQuestion}>
                        <Text>Skip</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FooterSection)


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    footerBtn: {
        flex: 1,
        flexDirection: 'row'
    },
    submitBtn: {
        flex: 2,
        flexDirection: 'row'
    },
    btn: {
        flex: 1,
        margin: 5,
        justifyContent:'center'
    }
})