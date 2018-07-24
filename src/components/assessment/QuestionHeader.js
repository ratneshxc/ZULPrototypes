import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class QuestionHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerLeft}>
                    <Text style={styles.header}>Wholesomeness</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold', marginTop: 3 }}><Icon name="trophy" style={{ marginRight: 5 }} size={20} /><Text>25</Text></Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0366d6d9',
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