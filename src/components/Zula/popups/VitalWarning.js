import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'native-base';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch({
        type: 'ZulaReducer_Vital',
        payload: false
    })
})

const VitalWarning = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Icon name="exclamation-triangle" style={{ fontSize: 60, color: '#de9630' }} type="FontAwesome" />
                <Text style={{ fontSize: 20, marginTop: 10, color: '#3a3a3a' }}>High Expenditure</Text>
            </View>
            <View style={{ marginVertical: 30 }}>
                <Text style={{ fontSize: 18,color: '#3a3a3a' }}>You have spent more money than expected, plan your expenses accordingly.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{color: '#3a3a3a'}}>Actual</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{color: '#3a3a3a'}}>Expected</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold',color: '#3a3a3a' }}>15,000 Rs/Month</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold',color: '#3a3a3a' }}>10,000 Rs/Month</Text>
                    </View>
                </View>
            </View>
            <Text style={{ textAlign: 'center', marginVertical: 10, textDecorationLine: 'underline' }}>Need help ?</Text>
            <TouchableOpacity style={{ backgroundColor: '#5067ffe3', padding: 10 }} onPress={props.hideModal}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>GOT IT</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
export default connect(null, mapDispatchToProps)(VitalWarning);