import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const TodayScore = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{marginBottom:10}}>Today's Score</Text>
            <View style={{alignItems:'center'}}>
                <AnimatedCircularProgress
                    size={120}
                    width={15}
                    fill={80}
                    tintColor="#5067FF"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#ddd">
                    {
                        (fill) => (
                            <Text style={styles.points}>
                                54%
                        </Text>
                        )
                    }
                </AnimatedCircularProgress>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 5
    },
    points: {
        fontSize: 20,
        color:'#353535'
    }
})
export default TodayScore;