import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
import StatusBody from './StatusBody';
import ConfigurableStatusLayout from './ConfigurableStatusLayout';

const mapDispatchToProps = dispatch => ({
    showConfigModal: (value) => dispatch({
        type: 'DashboardReducer_ShowConfirationModal',
        payload: value
    })
})

const StatusLayout = (props) => {
    return (
        <View style={styles.container}>
            <StatusBody />
            <ConfigurableStatusLayout />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding:5,
        backgroundColor:'#ffffff'
    }
})
export default connect(null, mapDispatchToProps)(StatusLayout);