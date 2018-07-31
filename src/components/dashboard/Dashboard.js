import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { H2 } from 'native-base';
import AssessmentSummaryLayout from './assessmentSummary/AssessmentSummaryLayout';
import GoalSummaryLayout from './goalSummary/GoalSummaryLayout';
import DiscoverLayout from './discovery/DiscoverLayout';
import NewsFeeds from './newsFeeds/NewsFeeds';
import WishModal from './wish/WishModal';

const mapDispatchToProps = dispatch => ({

})


class Dashboard extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image style={{ width: 150 }} resizeMode="contain" source={require('../../assests/images/nav-logo-wide.png')} />
                </View>
                <AssessmentSummaryLayout />
                <GoalSummaryLayout />
                <DiscoverLayout />
                <NewsFeeds />
                <WishModal />
            </ScrollView>
        )
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd52'
    },
    header: {
        backgroundColor: '#ffffff',
        padding: 5
    }
})
