import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Root, ActionSheet, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import TutorialModal from './TutorialModal';
import { connect } from 'react-redux'

var BUTTONS = [
    { text: "Give Feedback on this question", icon: "flag" },
    { text: "Report", icon: "flag", iconColor: "#fa213b" },
    { text: "Cancel", icon: "close" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const mapDispatchToProps = dispatch => ({
    openTutorialModal: () => dispatch({
        type: 'TutorialReducer_TutorialVisible',
        payload: true
    })
})

class OptionsSection extends Component {
   
    render() {
        return (
            <Root>
                <View style={styles.questionHeader}>
                    <TouchableOpacity style={styles.icons} onPress={this.props.openTutorialModal}>
                        <Icon name="info-circle" size={25} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons} onPress={() =>
                    
                        ActionSheet.show(
                            {
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,
                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                
                            },
                            buttonIndex => {
                                this.setState({ clicked: BUTTONS[buttonIndex] });
                            }
                        )}>
                        <Icon name="ellipsis-h" size={25} color="#ffffff" />
                    </TouchableOpacity>
                </View>
                <TutorialModal />
            </Root>
        )
    }
}

const styles = StyleSheet.create({
    questionHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icons: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        minWidth: 35,
        alignItems: 'center'
    }
})
export default connect(null, mapDispatchToProps)(OptionsSection);

