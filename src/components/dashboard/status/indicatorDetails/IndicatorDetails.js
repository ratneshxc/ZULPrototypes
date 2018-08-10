import React from 'react';
import { View, StyleSheet } from 'react-native';
import IndicatorBarGraph from './IndicatorBarGraph';
import GoalCard from './GoalCard';
import IndicatorDailyStatus from './IndicatorDailyStatus';

const IndicatorDetails = (props) => {
    return (
        <View style={styles.container}>
            <IndicatorBarGraph />
            <GoalCard />
            <IndicatorDailyStatus />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    }
})
export default IndicatorDetails;
