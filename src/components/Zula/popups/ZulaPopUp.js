import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Card } from 'native-base';

const width = Dimensions.get('window').width;
const ZulaPopUp = (props) => {
    return (
        <View style={styles.container}>
            <Card style={styles.innerContainer}>
                {props.content}
            </Card>
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                <View style={styles.triangleShapeCSS} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 125,
        right: 20,
        left: 20
    },
    innerContainer: {
        borderRadius: 5,
        borderWidth: 0,
        flex: 1
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