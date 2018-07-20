import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default class LoginFooter extends React.Component {

    takeAssessment = () => {
        this.props.takeAssessment();
    }

    goRegister = () => {
        this.props.goRegister();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.statement}><Text style={{fontWeight:'bold'}}>78,20,083</Text> people have already taken assessments</Text>
                <TouchableOpacity style={styles.takeAssessmentBtn} onPress={this.takeAssessment}>
                    <Text style={styles.textWhite}>Take Assessment</Text>
                </TouchableOpacity>
                <Text style={styles.orStatement}>OR</Text>
                <TouchableOpacity style={styles.registerBtn} onPress={this.goRegister}>
                    <Text style={styles.textWhite}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3
    },
    takeAssessmentBtn: {
        backgroundColor: '#80399d',
        margin: 5,
        alignItems: 'center',
        padding: 10
    },
    registerBtn:{
        backgroundColor: '#2980b9',
        margin: 5,
        alignItems: 'center',
        padding: 10
    },
    statement: {
        margin: 5,
        fontSize:15,
        color:'#ffffff',
        textAlign:'center'
    },
    orStatement:{
        fontSize:15,
        color:'#ffffff',
        textAlign:'center'
    },
    textWhite:{
        color:'#ffffff'
    }
})