import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import RecommendationCard from './RecommendtationCard';
import { H3 } from 'native-base';
export class ExpertsPanel extends Component {
    constructor() {
        super();
        this.state = {

            assessment: {
                physical: {
                    title: 'Anuradha B',
                    remainingTime: '2 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/physical.svg')
                },
                emotional: {
                    title: 'Varsha K',
                    remainingTime: '5 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/emotional.svg')
                },
                
                occupational: {
                    title: 'Chandni H',
                    remainingTime: '83 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/occupational.svg')
                },
                spiritual: {
                    title: 'Apurv Adarsh',
                    remainingTime: '73 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/spiritual.svg')
                },
           
                financial: {
                    title: 'Karthik S M',
                    remainingTime: '25 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/financial.svg')
                },
                environmental: {
                    title: 'Shweta Goyal',
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
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <H3>Experts</H3>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.blocks}>
                        <RecommendationCard assessObj={this.state.assessment.physical} style={{ backgroundColor: '#502f1e' }} style1={{ color: '#502f1e' }} />
                    </View>
                    <View style={styles.blocks}>
                        <RecommendationCard assessObj={this.state.assessment.emotional} style={{ backgroundColor: '#bb2133' }} style1={{ color: '#bb2133' }} />
                    </View>
                    <View style={styles.blocks}>
                        <RecommendationCard assessObj={this.state.assessment.financial} style={{ backgroundColor: '#11b7e4' }} style1={{ color: '#11b7e4' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.blocks}>
                        <RecommendationCard assessObj={this.state.assessment.occupational} style={{ backgroundColor: '#ed8c24' }} style1={{ color: '#ed8c24' }} />
                    </View>
                    <View style={styles.blocks}>
                        <RecommendationCard assessObj={this.state.assessment.spiritual} style={{ backgroundColor: '#642868' }} style1={{ color: '#642868' }} />
                    </View>
                    <View style={styles.blocks}>
                        <RecommendationCard assessObj={this.state.assessment.environmental} style={{ backgroundColor: '#0a5840' }} style1={{ color: '#0a5840' }} />
                    </View>
                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 5,
        marginTop: 10
    },
    blocks: {
        flex: 1,
        height: Dimensions.get('window').width / 3,
        padding: 3
    }
});

export default ExpertsPanel