import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    {
        score: state.Report.assessmentReport.score
    }
)

const OverallScore = (props) => {
    let score = props.score;
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{'Overall Score'.toUpperCase()}</Text>
            </View>
            <View style={{ backgroundColor: '#ffffff', padding: 10 }}>
                <AnimatedCircularProgress style={{ alignSelf: 'center' }}
                    size={180}
                    width={15}
                    fill={score.value}
                    tintColor="#4dad4a"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#ddd">
                    {
                        (fill) => (
                            <View>
                                <Text style={{ fontSize: 20, textAlign: 'center', color: '#3a3a3a' }}>
                                    {`${score.value}%`}
                                </Text>
                                <Text style={{ fontSize: 25, color: '#3a3a3a' }}>
                                    {score.caption}
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
    title: {
        color: '#495057',
        fontSize: 13,
        fontWeight: 'bold',
        padding: 10
    }
})
export default connect(mapStateToProps)(OverallScore);