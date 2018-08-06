import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import Image from 'react-native-remote-svg';

const width = Dimensions.get('window').width;

const ZulaWelcomeMessage = (props) => {
    return (
        <View style={styles.container}>
            <Card style={styles.innerContainer}>
                <View style={styles.body}>
                    <View style={{flex:1}}>
                        <Text style={{ color: '#ffffff' }}>Hey KK, How are you feeling today?</Text>
                    </View>
                    <View style={{ flexDirection: 'row',flex:1}}>
                        <TouchableOpacity style={styles.emojiContainer}>
                            <Image style={styles.emoji} source={require('../../assests/images/emoji/01.svg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emojiContainer}>
                            <Image style={styles.emoji} source={require('../../assests/images/emoji/02.svg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emojiContainer}>
                            <Image style={styles.emoji} source={require('../../assests/images/emoji/03.svg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emojiContainer}>
                            <Image style={styles.emoji} source={require('../../assests/images/emoji/04.svg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emojiContainer}>
                            <Image style={styles.emoji} source={require('../../assests/images/emoji/05.svg')} />
                        </TouchableOpacity>
                    </View>
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
        maxWidth: width - 60
    },
    innerContainer: {
        backgroundColor: '#5067ffe3',
        borderRadius: 5,
        borderWidth: 0,
        flex:1
    },
    body: {
        padding: 5,
        flex:1
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
    },
    emoji: {
        width: 40,
        height: 40
    },
    emojiContainer: {
        flex: 1,
        paddingHorizontal: 10
    }
})
export default ZulaWelcomeMessage;