import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import RiskIndicators from './RiskIndicators';
import LowRiskIndicators from './LowRiskIndicators';
import { connect } from 'react-redux';
import ConfigurableStatusLayout from './ConfigurableStatusLayout';

const mapDispatchToProps = dispatch => ({
    showConfigModal: (value) => dispatch({
        type: 'DashboardReducer_ShowConfirationModal',
        payload: value
    })
})

class StatusLayout extends React.Component {
    goToIndicators = () => {
        this.props.goToScreen('Indicators')
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBody /> */}
                <RiskIndicators />
                <View style={{ backgroundColor: '#ddd', height: 1, marginHorizontal: 15 }}></View>
                <LowRiskIndicators />
                <View style={{ backgroundColor: '#ddd', height: 1, marginHorizontal: 15 }}></View>
                <TouchableOpacity onPress={this.goToIndicators} style={{ paddingVertical: 10, marginHorizontal: 80, marginVertical: 10, borderRadius: 15, backgroundColor: '#5067FF' }}><Text style={{ textAlign: 'center', color: '#ffffff' }}>See All Indicators</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#ffffff'
    }
})
export default connect(null, mapDispatchToProps)(StatusLayout);