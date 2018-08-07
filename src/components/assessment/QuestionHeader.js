import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    totalReward: state.Reward.totalReward
})

class QuestionHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerLeft}>
                    <Text style={styles.header}>{this.props.currentQuestion.Category}</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold', marginTop: 3 }}>
                        <Icon name="trophy" style={{ marginRight: 5 }} size={20} />
                        <Text>{this.props.totalReward}</Text>
                    </Text>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps)(QuestionHeader);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5067ffd1',
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    headerLeft: {
        flex: 1
    },
    headerRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})