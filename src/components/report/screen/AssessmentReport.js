import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ReportHeader from '../layout_elements/ReportHeader';
import AssesmentStats from '../layout_elements/AssesmentStats';
import RecommendationPanel from '../layout_elements/RecommendationPanel';
import ExpertsPanel from '../layout_elements/ExpertsPanel';
import AssesmentAction from '../layout_elements/AssesmentAction';
import reportData from '../../../data/ReportData';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentAssessmentDetails: state.Assessment.currentAssessmentDetails
})
class AssessmentReport extends React.Component {

    goToDashboard = () => {
        this.props.navigation.navigate('Home');
    }
    render() {
        return (

            <View style={styles.container}>
                <ReportHeader title={reportData[this.props.currentAssessmentDetails].title} />
                <ScrollView style={[styles.container, styles.paddingleftright]}>
                    <AssesmentStats stats={reportData[this.props.currentAssessmentDetails].score} />
                    <RecommendationPanel data={reportData[this.props.currentAssessmentDetails].recommendations} />
                    <ExpertsPanel data={reportData[this.props.currentAssessmentDetails].experts} />

                    <AssesmentAction goToDashboard={this.goToDashboard} />

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //backgroundColor:'#ffffff'

        backgroundColor: '#dddddd52'

    },
    paddingleftright: {
        paddingLeft: 10,
        paddingRight: 10
    }
})
export default connect(mapStateToProps, null)(AssessmentReport)