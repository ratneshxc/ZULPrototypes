import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Card } from 'native-base';

const width = Dimensions.get('window').width;

const ZulaNotification = (props) => {
    return (
        <View style={styles.container}>
            <Card style={styles.innerContainer}>
                <View style={styles.body}>
                    <Text style={{ color: '#ffffff' }}>Hey KK, you have important update from Dr. Zul Sharma. Click here for more details</Text>
                </View>
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
        right: 30,
        maxWidth:width-60
    },
    innerContainer: {
        backgroundColor: '#5067ffe3',
        borderRadius: 5,
        borderWidth: 0
    },
    body: {
        padding: 5
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
export default ZulaNotification;