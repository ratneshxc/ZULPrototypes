import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentAssessmentDetails: state.Assessment.currentAssessmentDetails
})
class AssessmentReport extends React.Component {

    goToDashboard = () => {
        this.props.navigation.navigate('Home');
    }
    goToAssesment =() => {
        this.props.navigation.navigate('AssessmentLayout');
    }
    render() {
        return (

            <View style={styles.container}>
                {/* <ReportHeader title={reportData[this.props.currentAssessmentDetails].title} />
                <ScrollView style={[styles.container, styles.paddingleftright]}>
                    <AssesmentStats stats={reportData[this.props.currentAssessmentDetails].score} />
                    <RecommendationPanel data={reportData[this.props.currentAssessmentDetails].recommendations} />
                    <ExpertsPanel data={reportData[this.props.currentAssessmentDetails].experts} />

                    <AssesmentAction goToDashboard={this.goToDashboard} />

                </ScrollView> */}
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