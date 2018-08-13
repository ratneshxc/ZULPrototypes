import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, Badge, Icon } from 'native-base';
import Image from 'react-native-remote-svg';
// import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux'; 

const mapDispatchToProps=(dispatch)=>({
    selectCurrentAssessment:(value)=>dispatch({
        type:'AssessmentReducer_SelectAssessmentType',
        payload:value
    }),
    selectCurrentAssessmentDetails:(value)=>dispatch({
        type:'AssessmentReducer_SelectAssessmentDetails',
        payload:value
    })
})


const AssessmentSummaryComponent = (props) => {
     selectAssessment = () => {
        props.goAssessmentInfo();
        props.selectCurrentAssessment(props.assessObj.title.toUpperCase());
        props.selectCurrentAssessmentDetails(props.assessObj.title.toUpperCase());
    }

    return (
        <TouchableOpacity style={[styles.container]} onPress={selectAssessment}>
        <Card style={{flex:1}}>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ height: 3,backgroundColor:'#00b386', width: props.assessObj.compPercentage === '' ? 0 : props.assessObj.compPercentage }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 3, justifyContent: 'flex-end', flexDirection: 'row' }}><Text style={{ fontSize: 10, paddingHorizontal: 2 }}>{props.assessObj.remainingTime}</Text></View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
                <Text style={{ fontSize: 30, color: '#353535' }}>{props.assessObj.compPercentage}</Text>
            </View>
            <View style={{ alignItems: 'center', padding: 10 }}>
                <Text>{props.assessObj.title}</Text>
            </View>
        </Card>
        </TouchableOpacity>
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
export default connect(null,mapDispatchToProps)(AssessmentSummaryComponent);