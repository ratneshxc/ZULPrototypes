import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import AssessmentSummaryComponent from '../../assessment/assessmentSummary/AssessmentSummaryComponent';

const screenWidth = Dimensions.get("window").width;

class AssessmentList extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: [{
                title: 'Financial',
                remainingTime: '20 days overdue',
                compPercentage: '',
                notification: '',
                icon: require('../../../assests/images/dashboard/financial.svg')
            }, {
                title: 'Physical',
                remainingTime: '16 days overdue',
                compPercentage: '',
                notification: '',
                icon: require('../../../assests/images/dashboard/physical.svg')
            }, {
                title: 'Spiritual',
                remainingTime: '15 days overdue',
                compPercentage: '',
                notification: '',
                icon: require('../../../assests/images/dashboard/spiritual.svg')
            }, {
                title: 'Social',
                remainingTime: '12 days overdue',
                compPercentage: '',
                notification: '',
                icon: require('../../../assests/images/dashboard/social.svg')
            }, {
                title: 'Emotional',
                remainingTime: '10 days overdue',
                compPercentage: '',
                notification: '',
                icon: require('../../../assests/images/dashboard/emotional.svg')
            }]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginLeft:5,marginTop:5}}>Assessments Overdue</Text>
                <ScrollView horizontal={true}>
                    {this.state.entries.map((x, i) => (
                        <View style={{padding:5}} key={i}>
                            <AssessmentSummaryComponent assessObj={x} />
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ffffff',
        margin:5
    }
})
export default AssessmentList;