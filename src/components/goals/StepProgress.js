import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';


const labels = ["Level 1", "Level 2", "Level 3", "Level 4"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#228B22',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#228B22',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#228B22',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#228B22',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#228B22',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#228B22'
}
class StepProgress extends Component {
    constructor() {
        super();
        this.state = {
            currentPosition: 1
        }
    }
    render() {
        const props = this.props;
        return (
                <StepIndicator
                            customStyles={customStyles}
                            currentPosition={this.state.currentPosition}
                            labels={labels}
                            stepCount={4}
                        />
        );
    }
}


export default StepProgress;
