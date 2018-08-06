
import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';


class AssessmentInfo extends Component {
    goAssessment = () => {
        this.props.navigation.navigate('Assessment');
      }
    render() {
        return (
            <View>
             <TouchableOpacity onPress={this.goAssessment} style={{height:30,width:300,backgroundColor:'green'}}>
                <Text>Click Me</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AssessmentInfo;
