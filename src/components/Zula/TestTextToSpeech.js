import React, { Component } from 'react';
import { View, StyleSheet ,Text} from 'react-native';
import AndroidTextToSpeech from 'react-native-tts';
export default class TextToSpeech extends React.Component {
    componentDidMount() {
       
            AndroidTextToSpeech.speak('good night!');
      
        
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Text to voice </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    }
})
