import React, { Component } from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { Root, ActionSheet, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

var BUTTONS = [
    { text: "Give Feedback on this question", icon: "flag" },
    { text: "Report", icon: "flag", iconColor: "#fa213b" },
    { text: "Cancel", icon: "close" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class OptionsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Root>
                <View style={styles.questionHeader}>
                    <TouchableOpacity  onPress={() =>
                                ActionSheet.show(
                                    {
                                        options: BUTTONS,
                                        cancelButtonIndex: CANCEL_INDEX,
                                        destructiveButtonIndex: DESTRUCTIVE_INDEX
                                    },
                                    buttonIndex => {
                                        this.setState({ clicked: BUTTONS[buttonIndex] });
                                    }
                                )}>
                        <Icon name="ellipsis-h" style={styles.moreIcon} size={30} color="#ffffff" />
                    </TouchableOpacity>
                </View>
            </Root>
        )
    }
}

const styles = StyleSheet.create({
    questionHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    moreIcon: {
        padding: 5
    }
})
export default OptionsSection;

