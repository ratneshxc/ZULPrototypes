import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Icon, H2, Input, Item } from 'native-base';
import CommentSection from './CommentSection';

const mapStateToProps = state => ({
    isCommentModalVisible: state.Comment.isCommentModalVisible,
    comments: state.Comment.comments
})

const mapDispatchToProps = dispatch => ({
    closeCommentModal: () => dispatch({
        type: 'CommentReducer_ShowComment',
        payload: false
    }),
    getComments: () => dispatch({
        type: 'CommentReducer_GetComments',
        payload: [{
            imagePath: require('../../assests/images/profilepic/suresh.png'),
            name: 'Cristos',
            comment: 'I just love the question but I dint find the option which I am thinking',
            time: '15 min ago',
            isLiked: false
        }, {
            imagePath: require('../../assests/images/profilepic/beautiful-girl.jpg'),
            name: 'Maria Gualadupe',
            comment: 'Thats a very good question by the way',
            time: '1 hr ago',
            isLiked: false
        }, {
            imagePath: require('../../assests/images/profilepic/girl.jpg'),
            name: 'Sofia',
            comment: 'I just hate the question like anything',
            time: '10 days ago',
            isLiked: false
        }, {
            imagePath: require('../../assests/images/profilepic/stylish-girl.jpg'),
            name: 'María de los Ángeles',
            comment: 'I am feeling depressed after reading this question.',
            time: '1 month ago',
            isLiked: false
        }]
    })
})


class Comment extends Component {

    componentWillMount() {
        this.props.getComments();
    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.isCommentModalVisible}
                onRequestClose={() => {

                }}>
                <View style={styles.commentModal}>
                    <View style={styles.comment}>
                        <View style={styles.modalHeader}>
                            <View style={styles.header}>
                                <H2>Comments</H2>
                                <Text>Total {this.props.comments.length} comments</Text>
                            </View>
                            <View style={styles.close}>
                                <TouchableHighlight
                                    style={styles.closeBtn}
                                    onPress={this.props.closeCommentModal}>
                                    <Icon name="times-circle" type="FontAwesome" size={25} />
                                </TouchableHighlight>
                            </View>

                        </View>
                        <View style={styles.modalBody}>
                            <View style={{ flex: 1 }}>
                                <ScrollView>
                                    {this.props.comments.map((x, i) => (
                                        <CommentSection key={i} comment={x} />
                                    ))}
                                </ScrollView>
                            </View>
                            <View>
                                <Item regular>
                                    <Input placeholder='Write a Comment...' />
                                </Item>

                                <TouchableOpacity style={styles.commentBtn}>
                                    <Text style={{ color: '#ffffff', textAlign: 'center' }}>Add</Text>
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
    commentModal: {
        flex: 1,
        backgroundColor: '#00000066',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    comment: {
        backgroundColor: '#ffffff',
        height: Dimensions.get("window").height * 0.7
    },
    modalHeader: {
        flexDirection: 'row',
    },
    close: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    header: {
        flex: 1,
        padding: 5
    },
    modalBody: {
        flex: 1,
        flexDirection: 'column',
        padding: 5
    },
    closeBtn: {
        padding: 5,
        margin: 3
    },
    commentBtn: {
        backgroundColor: '#5067FF',
        width: 80,
        paddingVertical: 10,
        margin: 5,
        borderRadius: 10
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment);