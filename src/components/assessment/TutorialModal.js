import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';

const mapStateToProps = state => ({
    isTutorialVisible: state.Tutorial.isTutorialVisible,
    currentQuestion:state.Assessment.currentQuestion
})

const mapDispatchToProps = dispatch => ({
    closeTutorialModal: () => dispatch({
        type: 'TutorialReducer_TutorialVisible',
        payload: false
    })
})


class TutorialModal extends Component {
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.isTutorialVisible}
                onRequestClose={() => {
                  
                }}>
                <View style={styles.tutorialModal}>
                    <View style={styles.tutorial}>
                        <View style={styles.modalHeader}>
                            <TouchableHighlight
                                style={styles.closeBtn}
                                onPress={this.props.closeTutorialModal}>
                                <Icon name="times-circle" type="FontAwesome" size={25} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.modalBody}>
                            <Text>Hello World!</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    tutorialModal: {
        padding: 10,
        flex: 1,
        backgroundColor: '#00000066'
    },
    tutorial: {
        backgroundColor: '#ffffff',
        flex: 1,
        borderRadius: 10
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    modalBody: {
        flex: 1
    },
    closeBtn: {
        padding: 5,
        margin: 3
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TutorialModal);