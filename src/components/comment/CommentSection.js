import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CommentSection extends React.Component {
    render() {
        const comment = this.props.comment;
        return (
            <View style={styles.container}>
                <View>
                    <Thumbnail source={comment.imagePath} />
                </View>
                <View style={styles.commentSection}>
                    <View style={styles.commentDescription}>
                        <Text style={{ color: '#000000' }}>
                            <Text style={styles.name}>{comment.name} </ Text>
                            {comment.comment}
                        </Text>
                    </View>
                    <View style={styles.optionSection}>
                        <View style={styles.options}>
                            <TouchableOpacity style={styles.optionBtn}>
                                <Icon style={styles.optionIcon} size={16} name="reply" /><Text>Reply</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.options}>
                            <TouchableOpacity style={styles.optionBtn}>
                                <Icon style={styles.optionIcon} size={16} name="heart" /><Text>Like</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.time}>
                            <Text note>{comment.time}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    commentSection: {
        flex: 1,
        padding: 5
    },
    commentDescription: {
    },
    optionSection: {
        flexDirection: 'row'
    },
    options: {
        flex: 1
    },
    optionBtn: {
        flexDirection: 'row',
        padding: 5
    },
    optionIcon: {
        marginRight: 5
    },
    time: {
        flex: 2,
        padding: 5,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    name: {
        fontWeight: 'bold',
        color: '#5067FF'
    }
})
