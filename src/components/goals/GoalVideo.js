import React, { Component } from 'react';
import { Platform, View, StyleSheet, Image, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Card, Container, Header, Body, Left, Button, Icon, Right, Title, Content, Accordion, Badge, Segment, Item, Input } from 'native-base';
import Video from 'react-native-video';

const screenwidth = Dimensions.get('window').width - 20;

class GoalVideo extends Component {

    render() {
        return (
            <View style={{ backgroundColor: '#f0f0f0', }}>
                <Card style={{ padding: 5, backgroundColor: '#fff', marginVertical: 2 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text style={{ fontSize: 16, color: '#3a3a3a' }}>{'Daily 10 min meditation'}</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Text style={{ alignSelf: 'center', color: 'black' }}>Watch this video to complete your activity</Text>
                            <Image source={require("../../assests/icons/imagesVideo.jpeg")} style={{ alignSelf: 'center' }} />
                            {/* <Video source={require("../../assests/videos/DSC_0082.mp4") }   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}
                    paused={true}
                    controls={true}
                    posterResizeMode={"center"}
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onEnd={this.onEnd}                      // Callback when playback finishes
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo} /> */}
                        </View>

                    </View>
                </Card>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    backgroundVideo: {
        height: 220,
        width: screenwidth,
        alignSelf: 'center'
    },
});
export default GoalVideo;