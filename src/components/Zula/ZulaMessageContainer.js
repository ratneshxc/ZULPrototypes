import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';


const width = Dimensions.get('screen').width;

const mapStateToProps = state => ({
    zulaText: state.Zula.zulaMessageText,
    isZulaMessageContainerVisible: state.Zula.isZulaMessageContainerVisible
})

class ZulaMessageContainer extends Component {
    render() {

        return (
            this.props.isZulaMessageContainerVisible===true && <View style={styles.container}>
                <Text style={styles.zulaText}>{this.props.zulaText}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5067FF',
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 60,
        width: width,
        padding:5
    },
    zulaText:{
        color:'#ffffff',
        fontSize:15
    }
})

export default connect(mapStateToProps)(ZulaMessageContainer);
