import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import { H3 } from 'native-base';
import MoreAction from './MoreAction';
import Sample from './SampleGoals';
export class RecommendationPanel extends Component {
    constructor() {
        super();
        this.state = {

            assessment: {
                physical: {
                    title: 'Run 5k steps',
                    remainingTime: '2 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/physical.svg')
                },
                emotional: {
                    title: 'Go on a date',
                    remainingTime: '5 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/emotional.svg')
                },
                
                occupational: {
                    title: 'Define OKR',
                    remainingTime: '83 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/occupational.svg')
                },
                spiritual: {
                    title: 'Mediate',
                    remainingTime: '73 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/spiritual.svg')
                },
           
                financial: {
                    title: 'Save 50K',
                    remainingTime: '25 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/financial.svg')
                },
                environmental: {
                    title: 'Plant a tree',
                    remainingTime: '20 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/environmental.svg')
                }
            }
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1,flexDirection:'row' }}>
                    <Text  style={{ flex: 1,color:'#000000',fontWeight:'bold',fontSize:16 }}> Recommendations</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <MoreAction />

                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Sample />
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

export default RecommendationPanel