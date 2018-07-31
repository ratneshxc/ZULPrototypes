import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Icon, H3 } from 'native-base';
import Image from 'react-native-remote-svg'

const mapStateToProps = state => ({
    isWishVisible: state.Dashboard.isWishVisible
})

const mapDispatchToProps = dispatch => ({
    closeWishModal: () => dispatch({
        type: 'DashboardReducer_WishModalVisible',
        payload: false
    })
})


class WishModal extends Component {
    closeModal = () => {
        this.props.closeWishModal();
    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.isWishVisible}
                onRequestClose={() => {

                }}>
                <View style={styles.wishModal}>
                    <View style={styles.container}>
                        <H3 style={{ textAlign: 'center', marginBottom: 10 }}>Morning Sanjay</H3>
                        <H3 style={{ textAlign: 'center', marginBottom: 50 }}>How are you feeling today?</H3>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.emojiContainer}>
                                <TouchableOpacity onPress={this.closeModal}>
                                    <Image style={styles.emoji}
                                        source={require('../../../assests/images/emoji/01.svg')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.emojiContainer}>
                                <TouchableOpacity onPress={this.closeModal}>
                                    <Image style={styles.emoji}
                                        source={require('../../../assests/images/emoji/02.svg')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.emojiContainer}>
                                <TouchableOpacity onPress={this.closeModal}>
                                    <Image style={styles.emoji}
                                        source={require('../../../assests/images/emoji/03.svg')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.emojiContainer}>
                                <TouchableOpacity onPress={this.closeModal}>
                                    <Image style={styles.emoji}
                                        source={require('../../../assests/images/emoji/04.svg')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.emojiContainer}>
                                <TouchableOpacity onPress={this.closeModal}>
                                    <Image style={styles.emoji}
                                        source={require('../../../assests/images/emoji/05.svg')}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    wishModal: {
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0000001a',
        justifyContent: 'flex-end'
    },
    container: {
        backgroundColor: '#ffffff',
        paddingVertical: 30,
        borderRadius: 10
    },
    emoji: {
        width: 50,
        height: 50
    },
    emojiContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WishModal);
