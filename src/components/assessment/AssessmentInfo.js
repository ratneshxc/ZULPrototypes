
import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';


class AssessmentInfo extends Component {
    goAssessment = () => {
        this.props.navigation.navigate('Assessment');
      }
    render() {
        return (
            <View>
             <TouchableOpacity onPress={this.goAssessment} style={{backgroundColor:'green',height:25}}>
                <Text style={{alignSelf:'center', color:'white'}}>Take Assessment!!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AssessmentInfo;
