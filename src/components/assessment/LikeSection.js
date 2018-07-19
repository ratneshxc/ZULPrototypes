import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LikeSection extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.optionsBody}>
                    <Text>Like</Text>
                </View>
                <View style={styles.optionsBody}>
                    <Text>Dislike</Text>
                </View>
                <View style={styles.optionsBody}>
                    <Text>Voice</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    optionsBody: {
        flex: 1
    }
})
