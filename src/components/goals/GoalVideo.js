import React, { Component } from 'react';
import { Platform, View, StyleSheet, Image, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Card, Container, Header, Body, Left, Button, Icon, Right, Title, Content, Accordion, Badge, Segment, Item, Input } from 'native-base';
import Video from 'react-native-video';

const screenwidth = Dimensions.get('window').width - 20;

class GoalVideo extends Component {
    constructor() {
        super();
        this.state = {
            visibilityImageState: true
        }
    }
    videoToggle = () => {
            this.setState({
                visibilityImageState: !this.state.visibilityImageState
            })
    }
    render() {
        return (
            <View style={{borderBottomWidth: 0.5, borderBottomColor: 'lightgray'}}>
                <View style={{ padding: 5, backgroundColor: '#fff', marginVertical: 2 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text style={{  fontSize: 18, color: '#000000' }}>{'Practise pranayama for 30 minutes'}</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                            {/* <Text style={{ alignSelf: 'center', color: 'gray' }}>Watch this video to complete your activity</Text> */}
                            {this.state.visibilityImageState ?
                                <TouchableOpacity onPress={this.videoToggle}>
                                    <Image style={{ height: 220, width: screenwidth, alignSelf: 'center' }} source={require("../../assests/icons/imagesVideo.jpeg")} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.videoToggle}>
                                    <Video source={require("../../assests/videos/DSC_0082.mp4")}   // Can be a URL or a local file.
                                        ref={(ref) => {
                                            this.player = ref
                                        }}
                                        paused={false}
                                        controls={false}
                                        posterResizeMode={"center"}
                                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                                        onEnd={this.onEnd}                      // Callback when playback finishes
                                        onError={this.videoError}               // Callback when video cannot be loaded
                                        style={styles.backgroundVideo} />
                                </TouchableOpacity>
                            }
                        </View>

                    </View>
                </View>

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