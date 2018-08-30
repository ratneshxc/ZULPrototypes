import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Card, Container, Header, Body, Left, Button, Icon, Right, Title, Content, Accordion, Badge, Segment, Item, Input } from 'native-base';
import Video from 'react-native-video';

const screenwidth = Dimensions.get('window').width - 20;

class GoalVideo extends Component {
   
    render() {
        return (
            <View style={{backgroundColor:'#f0f0f0',}}>
                <Text style={{ alignSelf:'center', color:'black', fontWeight:'bold' }}>Watch this video to complete your activity</Text>
                <Video source={require("../../assests/videos/DSC_0082.mp4") }   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}
                    paused={true}
                    controls={true}
                    posterResizeMode={"center"}
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onEnd={this.onEnd}                      // Callback when playback finishes
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    backgroundVideo: {
        height:220,
        width:screenwidth,
        alignSelf:'center'
      },
});
export default GoalVideo;