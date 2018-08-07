import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ZulaWakeUpbtn from './ZulaWakeUpbtn';
import ZulaMessageContainer from './ZulaMessageContainer';
import ZulaNotification from './ZulaNotification';
import ZulaWelcomeMessage from './ZulaWelcomeMessage';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isZulaWishContainerVisible: state.Zula.isZulaWishContainerVisible
})

class Zula extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ZulaMessageContainer />
                <ZulaWakeUpbtn />
                {/* <ZulaNotification /> */}
                {this.props.isZulaWishContainerVisible && <ZulaWelcomeMessage />}
            </View>
        )
    }
}

export default connect(mapStateToProps)(Zula);

const styles = StyleSheet.create({
    container: {
    }
})
