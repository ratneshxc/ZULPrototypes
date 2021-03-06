import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const TodayScore = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainDivision}>

                <AnimatedCircularProgress
                    size={120}
                    width={8}
                    fill={80}
                    tintColor="#5067FF"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#ddd">
                    {
                        (fill) => (
                            <View>
                                <Text style={styles.points}>
                                    {props.stats.overall}%
                                </Text>
                                <Text style={[styles.caption,{color: props.stats.desccolor}]}>
                                {props.stats.shortdescription}
                                </Text>
                            </View>
                        )
                    }
                </AnimatedCircularProgress>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    points: {
        fontSize: 20,
        color: '#353535',
        textAlign: 'center'
    },
    caption: {
        fontSize: 15,
        textAlign: 'center',
        
    },
    mainDivision:{ 
        alignItems: 'center'
     }
})
export default TodayScore;