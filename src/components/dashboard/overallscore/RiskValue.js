import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'native-base';

const RiskValue = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 10, fontSize: 13, color: '#353535' }}>Risk</Text>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                {/* <Icon name="arrow-down" style={{ fontSize: 50, color: '#ed1727' }} /> */}
                <Text style={{ fontSize: 40, color: '#ed1727' }}>30%</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
export default RiskValue;
