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
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>High Expenditure</Text>
            </View>
            <View style={{ marginVertical: 30 }}>
                <Text style={{ fontSize: 18 }}>You seem to have spent more money than expected, I would suggest you to plan your expenses accordingly.</Text>
            </View>
            <Text style={{ fontSize: 13 }}>Details :</Text>
            <View style={{ flexDirection: 'row', borderColor: '#ddd', borderWidth: 1 }}>
                <View style={{ flexDirection: 'column', flex: 1, borderColor: '#ddd', borderRightWidth: 1 }}>
                    <View style={{ flex: 1, padding: 3 }}>
                        <Text>Actual Expenditure</Text>
                    </View>
                    <View style={{ flex: 1, borderColor: '#ddd', borderTopWidth: 1, padding: 3 }}>
                        <Text>Expected Expenditure</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={{ flex: 1, padding: 3 }}>
                        <Text style={{ fontWeight: 'bold' }}>1500 Rs/Month</Text>
                    </View>
                    <View style={{ flex: 1, borderColor: '#ddd', borderTopWidth: 1, padding: 3 }}>
                        <Text style={{ fontWeight: 'bold' }}>500 Rs/Month</Text>
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
        padding: 10
    }
})
export default connect(null, mapDispatchToProps)(VitalWarning);