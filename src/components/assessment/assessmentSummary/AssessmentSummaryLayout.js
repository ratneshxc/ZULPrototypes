import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import AssessmentSummaryComponent from './AssessmentSummaryComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    assessmentReport: state.Assessment.assessmentReport
})

const mapDispatchToProps = dispatch => ({

})

const chunkArray = (myArray, chunk_size) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}

class AssessmentSummaryLayout extends Component {

    goAssessmentInfo = () => {
        this.props.screenProps.goAssessmentInfo();
    }
    render() {
        let arrayGroup = chunkArray(this.props.assessmentReport, 3)
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 18, marginLeft: 5 }}>Assessment</Text>
                </View>
                <View>
                    {
                        arrayGroup.map((x, i) => (
                            <View key={i} style={{ flexDirection: 'row' }}>
                                {x.map((n, j) => (
                                    <View style={styles.blocks} key={j}>
                                        <AssessmentSummaryComponent goAssessmentInfo={this.goAssessmentInfo} assessObj={n} />
                                    </View>
                                ))}
                                
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 5,
        marginTop: 3
    },
    blocks: {
        flex: 1,
        height: Dimensions.get('window').width / 3,
        padding: 3
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentSummaryLayout);

