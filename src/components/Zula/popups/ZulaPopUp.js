import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Card } from 'native-base';

const height = Dimensions.get('window').height;
const ZulaPopUp = (props) => {
    return (
        <View style={styles.backContainer}>
            <View style={styles.container}>
                <Card style={styles.innerContainer}>
                    {props.content}
                </Card>
                <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <View style={styles.triangleShapeCSS} />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    backContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height:height,
        backgroundColor:'#00000066'
    },
    container: {
        position: 'absolute',
        bottom: 125,
        right: 20,
        left: 20
    },
    innerContainer: {
        borderRadius: 5,
        borderWidth: 0,
        flex: 1,
        backgroundColor:'#fff'
    },
    triangleShapeCSS: {
        width: 0,
        height: 0,
        borderLeftWidth: 30,
        borderRightWidth: 5,
        borderTopWidth: 10,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#5067ffe3',
        marginRight: 10,
        marginTop: -5
    }
})
export default ZulaPopUp;
