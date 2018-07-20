import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentQuestion: state.Assessment.currentQuestion
})

class LikeSection extends React.Component {
    constructor() {
        super();
        this.state = {
            iconColor: '#ffffff'
        }
    }

    iconClickHandler = () => {
        this.setState({
            iconColor: this.state.iconColor === '#ffffff' ? '#ff0000' : '#ffffff'
        })
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.optionsBody}>
                    <Text style={styles.likeText}>{this.props.currentQuestion.likes}</Text>
                    <TouchableOpacity onPress={this.iconClickHandler}>
                        <Text>
                            <Icon name="heart" size={25} color={this.state.iconColor} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps)(LikeSection)

const styles = StyleSheet.create({
    optionsBody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icon: {
        height: 20,
        width: 20
    },
    likeText: {
        color: '#ffffff',
        fontSize: 20,
        marginRight: 5
    }
})
