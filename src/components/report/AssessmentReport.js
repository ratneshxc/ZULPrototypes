import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ReportHeader from './ReportHeader';
import AssesmentStats from './AssesmentStats';
import RecommendationPanel from './RecommendationPanel';
import ExpertsPanel from './ExpertsPanel';
import AssesmentAction from './AssesmentAction';
import ReportData from '../../data/ReportData';
import reportData from '../../data/ReportData';
export default class AssessmentReport extends React.Component {

    goToDashboard=()=>{
        this.props.navigation.navigate('Home');
    }
    render() {
        return (

            <View style={styles.container}>
                <ReportHeader />
                <ScrollView style={[styles.container,{  paddingLeft:10,paddingRight:10}]}>
                    <AssesmentStats stats={reportData["Strength and Energy"].score} />
                    <RecommendationPanel data={reportData["Strength and Energy"].recommendations} />
                    <ExpertsPanel data={reportData["Strength and Energy"].experts}/>
                 
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
