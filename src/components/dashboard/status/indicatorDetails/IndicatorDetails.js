import React from 'react';
import { View, StyleSheet } from 'react-native';
import IndicatorBarGraph from './IndicatorBarGraph';
import GoalCard from './GoalCard';
import IndicatorDailyStatus from './IndicatorDailyStatus';
import { Container, Content } from 'native-base';

const IndicatorDetails = (props) => {
    return (
        <Container>
            <Content>
                <View style={styles.container}>
                    <IndicatorBarGraph />
                    <GoalCard />
                    <IndicatorDailyStatus />
                </View>
            </Content>
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    }
})
export default IndicatorDetails;
