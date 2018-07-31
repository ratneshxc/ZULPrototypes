import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Badge } from 'native-base';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/FontAwesome';


const AssessmentSummaryComponent = (props) => {
    return (
        <Card style={[styles.container]}>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ ...props.style, height: 3, width: props.assessObj.compPercentage }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}><Text style={{ fontSize: 10, fontWeight: 'bold', paddingHorizontal: 3 }}>{props.assessObj.compPercentage}</Text></View>
                    <View style={{ flex: 3, justifyContent: 'flex-end', flexDirection: 'row' }}><Text style={{ fontSize: 10, paddingHorizontal: 2 }}>{props.assessObj.remainingTime}</Text></View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    style={{ height: 30, width: 40 }}
                    source={props.assessObj.icon}
                />
                <Text>{props.assessObj.title.toUpperCase()}</Text>
            </View>
            <View style={[styles.titleContainer]}>
                {props.assessObj.notification !== '' && <Icon style={props.style1} name="bell" />}
                <Text style={{ ...props.style1, fontSize: 12 }}>{props.assessObj.notification}</Text>
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