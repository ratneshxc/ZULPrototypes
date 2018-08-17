import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Header, Footer, FooterTab, Left, Right, Body, Button, Container, Content } from 'native-base';

const mapStateToProps = state => ({
    totalReward: state.Reward.totalReward
})

class QuestionHeader extends React.Component {
    render() {
        return (
            <View>
                {(Platform.OS === 'ios') ?
                    <Header>
                        <Left>
                            <Text style={styles.headerIos}>{this.props.currentQuestion.Category}</Text>
                        </Left>
                        <Right>
                            <Text style={{ fontWeight: 'bold' }}>
                                <Icon name="trophy" style={{ marginRight: 5 }} size={20} />
                                <Text>{this.props.totalReward}</Text>
                            </Text>
                        </Right>
                    </Header> :
                    <Header>
                        <Left>
                            <Text style={styles.header}>{this.props.currentQuestion.Category}</Text>
                        </Left>
                        <Right>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                <Icon name="trophy" style={{ marginRight: 5 }} size={20} />
                                <Text>{this.props.totalReward}</Text>
                            </Text>
                        </Right>
                    </Header>
                }
            </View>
        )
    }
}

export default connect(mapStateToProps)(QuestionHeader);

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#5067ffd1',
        // paddingVertical: 10,
        // paddingHorizontal: 15,
        // flexDirection: 'row'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 350,
        color: '#ffffff'
    },
    headerIos: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 350
        // color: '#ffffff'
    },
    headerLeft: {
        // flex: 1
    },
    headerRight: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'flex-end'
    }
})