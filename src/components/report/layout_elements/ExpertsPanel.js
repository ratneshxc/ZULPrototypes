import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MoreAction from '../components/ActionComponent';
import ExpertCard from '../components/ExpertCard';
export class ExpertsPanel extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headingStyles}>
                    <Text style={styles.headingText}> Experts</Text>
                    <View style={styles.actionArea}>
                        <MoreAction name="ellipsis-h" />

                    </View>
                </View>
                <View style={styles.contentArea}>
                    <ExpertCard data={this.props.data} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        marginTop: 10
    },
    headingStyles: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom:0
    },
    headingText: {
        flex: 1,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14
    },
    actionArea: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    contentArea: {
        flexDirection: 'row'
    }

});

export default ExpertsPanel