import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PodcastComponent from './PodcastComponent';
import WeekStatus from './WeekStatus';

const DiscoverLayout = () => {
    return (
        <View style={styles.container}>
            <View>
            <Text style={{fontSize:18,marginLeft:5}}>Discover Today</Text>                
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