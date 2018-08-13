import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import ReportHeader from './ReportHeader';
import AssesmentStats from './AssesmentStats';
import RecommendationPanel from './RecommendationPanel';
import ExpertsPanel from './ExpertsPanel';
import AssesmentAction from './AssesmentAction';
import reportData from '../../data/ReportData';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentAssessmentDetails: state.Assessment.currentAssessmentDetails
})
 class AssessmentReport extends React.Component {
    
    goToDashboard=()=>{
        this.props.navigation.navigate('Home');
    }
    render() {
        return (

            <View style={styles.container}>
              <ReportHeader title={reportData[this.props.currentAssessmentDetails].title}/>
                <ScrollView style={[styles.container,{  paddingLeft:10,paddingRight:10}]}>
                    <AssesmentStats stats={reportData[this.props.currentAssessmentDetails].score} />
                    <RecommendationPanel data={reportData[this.props.currentAssessmentDetails].recommendations} />
                    <ExpertsPanel data={reportData[this.props.currentAssessmentDetails].experts}/>
                 
                    <AssesmentAction goToDashboard={this.goToDashboard}/>

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
        
    }
})
export default connect(mapStateToProps,null)(AssessmentReport)