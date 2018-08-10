import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InfoAction from './InfoAction';
import AssesmentSummaryLayout from './AssesmentSummaryLayout';
export default class AssesmentStatus extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.summaryText}>
            Summary
          </Text>
          <View style={styles.actionArea}>
            <InfoAction />

          </View>
        </View>
        <View
          style={styles.assesmentLayout}
        >
          <AssesmentSummaryLayout stats={this.props.stats} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
    backgroundColor: "#ffffff",
    // backgroundColor: '#dddddd52'
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  summaryText: {
    flex: 1,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16
  },
  actionArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  assesmentLayout: {
    flex: 1,
    flexDirection: 'row',
  }


});