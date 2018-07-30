import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Card} from 'native-base';

const PodcastComponent = () => {
    return (
        <Card style={styles.container}>
            <Text>Podcast component</Text>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})

export default PodcastComponent;