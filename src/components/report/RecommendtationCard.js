import React, { Component } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { Card, Badge } from 'native-base';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/FontAwesome';


const RecommendationCard = (props) => {
    return (
        <Card style={[styles.container]} transparent>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        backgroundColor: '#fff',
                        borderRadius: 100,
                    }}
                >
                    <Image
                        style={{ height: 30, width: 40 }}
                        source={props.assessObj.icon}
                    />
                </TouchableOpacity>
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
export default RecommendationCard;