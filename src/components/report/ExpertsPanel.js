import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { H3 } from 'native-base';
import MoreAction from './MoreAction';
import Sample from './SampleExperts';
export class ExpertsPanel extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ flex: 1, color: '#000000', fontWeight: 'bold', fontSize: 16 }}> Experts</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <MoreAction />

                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Sample data={this.props.data}/>
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
    blocks: {
        flex: 1,
        height: Dimensions.get('window').width / 3,
        padding: 3
    }
});

export default ExpertsPanel