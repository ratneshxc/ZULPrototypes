import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import OverallScore from './overallscore/OverallScore';
import StatusLayout from './status/StatusLayout';
import StatusHeader from './StatusHeader';
import AssessmentList from './assessment/AssessmentList';

const mapDispatchToProps = dispatch => ({

})

class Dashboard extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ width: 150 }} resizeMode="contain" source={require('../../assests/images/nav-logo-wide.png')} />
                        </View>
                        <View>
                            <TouchableOpacity style={{ padding: 10 }}>
                                <Icon name="cog" type="FontAwesome" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <StatusHeader />
                    <OverallScore />
                    <StatusLayout />
                    <AssessmentList />
                </ScrollView>
            </View>
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
        padding: 5,
        flexDirection: 'row'
    }
})
