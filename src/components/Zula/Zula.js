import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ZulaWakeUpbtn from './ZulaWakeUpbtn';
import ZulaMessageContainer from './ZulaMessageContainer';
import ZulaPopUpCollection from './popups/ZulaPopUpCollection';

class Zula extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <ZulaMessageContainer /> */}
                <ZulaPopUpCollection />
                {/* <ZulaWakeUpbtn /> */}
            </View>
        )
    }
}

export default Zula;

const styles = StyleSheet.create({
    container: {
    }
})
