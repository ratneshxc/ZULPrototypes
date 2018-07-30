import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { H3 } from 'native-base';

const screenWidth = Dimensions.get("window").width;

class NewsFeeds extends Component {
    constructor() {
        super();
        this.state = {
            entries: [{
                title: 'Pritam'
            },
            {
                title: 'Anand'
            },
            {
                title: 'Anand'
            },
            {
                title: 'Anand'
            }]
        }
    }


    _renderItem({ item, index }) {
        return (
            <View>
                <ImageBackground style={{ width: screenWidth, height: 200 }} resizeMode="cover" source={require('../../../assests/images/health-image.png')}>
                    <View>

                    </View>
                </ImageBackground>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <H3>News Feeds</H3>
                </View>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth - 80}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        marginTop:10,
        padding:5
    }
})

export default NewsFeeds;