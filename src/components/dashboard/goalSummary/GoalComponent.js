import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Thumbnail, Card } from 'native-base';

const GoalComponent = (props) => {
    return (
        <Card>
            <View style={{ flexDirection: 'row', padding: 5 }}>
                <View>
                    <Thumbnail source={props.goalObj.imageURL} />
                </View>
                <View style={{ flex: 1 ,paddingLeft:5}}>
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: '#000000' }}>{props.goalObj.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text>Created: <Text style={{ fontWeight: 'bold' }}>{props.goalObj.createDate}</Text></Text>
                        </View>
                    </View>
                    <Text note>{props.goalObj.description}</Text>
                </View>
            </View>
            <View style={{ width: props.goalObj.completion, height: 5, backgroundColor: '#01d300' }}>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 1,
    }
})
export default GoalComponent;