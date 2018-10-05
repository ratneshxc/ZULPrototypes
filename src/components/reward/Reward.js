import React, { Component } from 'react';
import { Modal, Text, Button, TouchableHighlight, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { Icon, H3, H2, Left } from 'native-base';

const mapStateToProps = state => ({
    isRewardModalVisible: state.Reward.isRewardModalVisible,
    currentQuestion: state.Assessment.currentQuestion,
    questions: state.Assessment.questions
})

const mapDispatchToProps = dispatch => ({
    closeRewardModal: () => dispatch({
        type: 'RewardReducer_RewardModalVisible',
        payload: false
    }),
    loadingNextQuestion: (isLoading) => dispatch({
        type: 'AssessmentReducer_IsNextQuestionLoading',
        payload: isLoading
    }),
    goToQuestion: (question) => dispatch({
        type: 'AssessmentReducer_GetQuestion',
        payload: question
    }),
})

class Reward extends React.Component {

    goToNextQuestion = () => {
        this.props.closeRewardModal();
        let questionIndex = this.props.currentQuestion.no;
        setTimeout(() => {
            this.props.loadingNextQuestion(true);
            setTimeout(() => {
                this.props.goToQuestion(this.props.questions[questionIndex]);
                this.props.loadingNextQuestion(false);
            }, 200)
        }, 500)
    }

    render() {
        let rewardsCount = 100;
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.isRewardModalVisible}
                onRequestClose={() => {

                }}>
                <View style={styles.rewardModal}>
                    <View style={styles.reward}>
                        <View style={styles.modalHeader}>
                            {/* <TouchableHighlight
                                style={styles.closeBtn}
                                onPress={this.props.closeRewardModal}>
                                <Icon name="times-circle" style={{ color: 'red' }} type="FontAwesome" size={25} />
                            </TouchableHighlight> */}
                        </View>

                        <View style={styles.modalBody}>
                            {/* <H3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Congratulations</H3> */}


                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Image style={{ width: 250, height: 50 }} source={require('../../assests/images/congrats/congratsFont.jpg')} />
                                <Image style={{ width: 150, height: 130 }} source={require('../../assests/images/reward.png')} />
                                {/* <H3 style={{ marginTop: 10 }}>You won</H3>
                                <H2>100</H2> */}
                                <H3 style={{ textAlign: 'center', fontWeight: 'bold', fontSize:24 ,color: 'orange', paddingTop:3 }}>You won {rewardsCount} Rewards</H3>
                                {/* <Text>Rewards</Text> */}
                            </View>

                            
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <TouchableHighlight  style={styles.cancel_RewardsBtn} onPress={this.props.closeRewardModal}>
                                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', top: -5}}>Cancel</Text>
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TouchableHighlight style={styles.gotBtn} onPress={this.goToNextQuestion}>
                                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', top: -5}}>Got It</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Reward);

const styles = StyleSheet.create({
    rewardModal: {
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        flex: 1,
        backgroundColor: '#00000014',
        justifyContent: 'center',
        alignItems: 'center'
    },
    reward: {

        backgroundColor: '#ffffff',
        width: 300,
        height: 300,
        borderRadius: 10
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    modalBody: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    closeBtn: {
        padding: 5,
        margin: 3
    },
    gotBtn: {
        backgroundColor: 'blue',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        width: 100,
        height: 25,
        alignItems: "center"
    },
    cancel_RewardsBtn: {
        backgroundColor: 'red',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        width: 100,
        height: 25,
        alignItems: "center"
    }
})
