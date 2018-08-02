import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Badge } from 'native-base';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/FontAwesome';


const AssessmentSummaryComponent = (props) => {
    return (
        <Card style={[styles.container]}>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ ...props.style, height: 3, width: props.assessObj.compPercentage === '' ? 0 : props.assessObj.compPercentage }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            style={{ height: 20, width: 30 }}
                            source={props.assessObj.icon}
                        />
                    </View>
                    <View style={{ flex: 3, justifyContent: 'flex-end', flexDirection: 'row' }}><Text style={{ fontSize: 10, paddingHorizontal: 2 }}>{props.assessObj.remainingTime}</Text></View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Image
                    style={{ height: 50, width: 60 }}
                    source={props.assessObj.icon}
                /> */}
                <Text style={{ fontSize: 40, color: '#353535' }}>{props.assessObj.compPercentage === '' ? '?' : props.assessObj.compPercentage}</Text>
            </View>
            <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                <Text>{props.assessObj.title.toUpperCase()}</Text>
            </View>
        </Card >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleContainer: {
        padding: 5,
        flex: 1,
    }
})
export default AssessmentSummaryComponent;