import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    {
        observations: state.Report.assessmentReport.observations
    }
)


const Observations = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 10 }}>Observations</Text>
            <View style={{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row' }}>
                {props.observations.map((x, i) => (
                    x.type === 'danger' ?
                        <Text style={[styles.tag, { backgroundColor: '#ea9798' }]} key={i}>{x.text}</Text> :
                        <Text style={[styles.tag, { backgroundColor: '#8adc88' }]} key={i}>{x.text}</Text>
                ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 2,
        backgroundColor:'#ffffff',
        padding:10
    },
    tag: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 2,
        marginRight: 5,
        marginBottom: 5
    }
})
export default connect(mapStateToProps)(Observations);