import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import AssessmentSummaryComponent from './AssessmentSummaryComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    assessment: state.Dashboard.assessment
})

const mapDispatchToProps = dispatch => ({
    notifyPhisical: (data) => dispatch({
        type: 'DashboardReducer_PhysicalNotification',
        payload: data
    }),
    notifyEmotional: (data) => dispatch({
        type: 'DashboardReducer_EmotionalNotification',
        payload: data
    }),
    notifySocial: (data) => dispatch({
        type: 'DashboardReducer_SocialNotification',
        payload: data
    }),
    notifyOccupational: (data) => dispatch({
        type: 'DashboardReducer_OccupationalNotification',
        payload: data
    }),
    notifySpiritual: (data) => dispatch({
        type: 'DashboardReducer_SpiritualNotification',
        payload: data
    }),
    notifyIntellectual: (data) => dispatch({
        type: 'DashboardReducer_IntellectualNotification',
        payload: data
    }),
    notifyFinancial: (data) => dispatch({
        type: 'DashboardReducer_FinancialNotification',
        payload: data
    }),
    notifyEnvironmental: (data) => dispatch({
        type: 'DashboardReducer_EnvironmentalNotification',
        payload: data
    })
})

class AssessmentSummaryLayout extends Component {
    componentWillMount() {
        let msg = 'You have to visit dermatologist today';
        setTimeout(() => {
            msg = msg == 'You have to visit dermatologist today' ? 'Its time for gym' : 'You have to visit dermatologist today'
            this.props.notifyPhisical(msg);
        }, 10000)

    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize:18,marginLeft:5}}>Wellness</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.blocks}>
                        <AssessmentSummaryComponent assessObj={this.props.assessment.physical} style={{ backgroundColor: '#502f1e' }} style1={{ color: '#502f1e' }} />
                    </View>
                    <View style={styles.blocks}>
                        <AssessmentSummaryComponent assessObj={this.props.assessment.emotional} style={{ backgroundColor: '#bb2133' }} style1={{ color: '#bb2133' }} />
                    </View>
                    <View style={styles.blocks}>
                        <AssessmentSummaryComponent assessObj={this.props.assessment.social} style={{ backgroundColor: '#192c56' }} style1={{ color: '#192c56' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.blocks}>
                        <AssessmentSummaryComponent assessObj={this.props.assessment.occupational} style={{ backgroundColor: '#ed8c24' }} style1={{ color: '#ed8c24' }} />
                    </View>
                    <View style={styles.blocks}>
                        <AssessmentSummaryComponent assessObj={this.props.assessment.spiritual} style={{ backgroundColor: '#642868' }} style1={{ color: '#642868' }} />
                    </View>
                    <View style={styles.blocks}>
                        <AssessmentSummaryComponent assessObj={this.props.assessment.intellectual} style={{ backgroundColor: '#fecf08' }} style1={{ color: '#fecf08' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.blocks}>
                        <AssessmentSummaryComponent assessObj={this.props.assessment.financial} style={{ backgroundColor: '#11b7e4' }} style1={{ color: '#11b7e4' }} />
                    </View>
                    <View style={styles.blocks}>
                        <AssessmentSummaryComponent assessObj={this.props.assessment.environmental} style={{ backgroundColor: '#0a5840' }} style1={{ color: '#0a5840' }} />
                    </View>
                    <View style={styles.blocks}>

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
        marginTop: 3
    },
    blocks: {
        flex: 1,
        height: Dimensions.get('window').width / 3,
        padding: 3
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentSummaryLayout);

