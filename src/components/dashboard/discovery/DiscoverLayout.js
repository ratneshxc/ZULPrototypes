import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PodcastComponent from './PodcastComponent';
import WeekStatus from './WeekStatus';
import {H3 } from 'native-base';

const DiscoverLayout = () => {
    return (
        <View style={styles.container}>
            <View>
                <H3>Discover Today</H3>
            </View>
            {/* <PodcastComponent /> */}
            <WeekStatus />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ffffff',
        marginTop:10,
        padding:5
    }
})

export default DiscoverLayout;