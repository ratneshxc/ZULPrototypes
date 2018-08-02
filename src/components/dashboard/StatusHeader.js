import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
const StatusHeader = (props) => {
    return (
        <View style={styles.headerSection}>
            <View style={styles.section}>
                <TouchableOpacity style={styles.sectionBtn}>
                    <Text style={styles.sectionText}>Today</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <TouchableOpacity style={styles.sectionBtn}>
                    <Text style={styles.sectionText}>Week</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <TouchableOpacity style={styles.sectionBtn}>
                    <Text style={styles.sectionText}>Month</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <TouchableOpacity style={styles.sectionBtn}>
                    <Text style={styles.sectionText}>Year</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerSection: {
        flexDirection: 'row'
    },
    section: {
        flex: 1,
        padding: 5
    },
    sectionText: {
        textAlign: 'center'
    },
    sectionBtn: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        backgroundColor:'#ffffff'
    }
})
export default StatusHeader;