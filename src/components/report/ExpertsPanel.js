import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import MoreAction from './ActionComponent';
import ExpertCard from './ExpertCard';
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
                <View style={styles.actionArea}>
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
        flexDirection: 'row'
    },
    headingText: {
        flex: 1,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16
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