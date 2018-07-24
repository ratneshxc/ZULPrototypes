import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Draggable from 'react-native-draggable';

export default class ZulaWakeUpbtn extends Component {
    render() {
        let width = Dimensions.get('screen').width / 2 - 10;
        let height = Dimensions.get('screen').height / 2 - 100;
        return (
            <Draggable style={styles.zulaBtn} renderShape='image' imageSource={require('../../assests/images/suresh.png')} renderSize={80}
                offsetX={width} offsetY={height}
                pressDragRelease={this._changeFace}
                longPressDrag={() => console.log('long press')}
                pressDrag={() => console.log('press drag')}
                pressInDrag={() => console.log('in press')}
                pressOutDrag={() => console.log('out press')}
            />
        )
    }
}
const styles = StyleSheet.create({
    zulaBtn: {
        zIndex: 10
    }
})
