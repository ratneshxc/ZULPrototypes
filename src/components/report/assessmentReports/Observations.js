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
        <View>
            <Text style={styles.title}>{'Observations'.toUpperCase()}</Text>
            <View style={{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row', backgroundColor: '#ffffff', padding: 10 }}>
                {props.observations.map((x, i) => (
                    x.type === 'danger' ?
                        <Text style={[styles.tag, { color: 'red' }]} key={i}>{x.text}</Text> :
                        <Text style={[styles.tag, { color: 'green' }]} key={i}>{x.text}</Text>
                ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    tag: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 2,
        marginRight: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10
    },
    title: {
        color: '#495057',
        fontSize: 13,
        fontWeight: 'bold',
        padding: 10
    }
})
export default connect(mapStateToProps)(Observations);