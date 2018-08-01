import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Badge } from 'native-base';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/FontAwesome';


const RecommendationCard = (props) => {
    return (
        <Card style={[styles.container]} transparent>
            <View style={{ flex: 1, alignItems: 'center' }}>
              
                    <Image
                        style={{ height: 50, width: 60 }}
                        source={props.assessObj.icon}
                    />
                <Text style={{marginTop:5,color:'#000000'}}>{props.assessObj.title}</Text>
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
export default RecommendationCard;