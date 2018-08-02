
import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';


class AssessmentInfo extends Component {
    render() {
        return (
            <View>
                <Button
                    onPress={this._onPressButton}
                    title="Press Me"
                />
            </View>
        );
    }
}

export default AssessmentInfo;
