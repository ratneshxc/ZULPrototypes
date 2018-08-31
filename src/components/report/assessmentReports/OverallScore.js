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
                <Text style={styles.title}>Overall Score</Text>
            </View>
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
                            <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                {`${score.value}%`}
                            </Text>
                            <Text style={{ fontSize: 25 }}>
                                {score.caption}
                            </Text>
                        </View>
                    )
                }
            </AnimatedCircularProgress>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 10
    },
    title: {

    }
})
export default connect(mapStateToProps)(OverallScore);