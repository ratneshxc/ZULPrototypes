import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'native-base';
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
            <Card style={{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row', backgroundColor: '#ffffff', padding: 10 }}>
                {props.observations.map((x, i) => (
                    x.type === 'danger' ?
                        <Text style={[styles.tag, { color: '#dc3545' }]} key={i}>{x.text}</Text> :
                        <Text style={[styles.tag, { color: '#00b386' }]} key={i}>{x.text}</Text>
                ))}
            </Card>
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
        paddingTop: 10,
        paddingLeft: 10
    }
})
export default connect(mapStateToProps)(Observations);