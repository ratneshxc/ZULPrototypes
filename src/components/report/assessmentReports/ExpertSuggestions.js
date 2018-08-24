import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'native-base';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    {
        expertList: state.report.assessmentReport.expertList
    }
)

const profileCard=(props)=>{
    return(
        <View>
             <Thumbnail small source={props.profileImage} />
             <Text>{props.name}</Text>
             <Text>{props.speciality}</Text>
             <Text></Text>
        </View>
    )
}

const ExpertSuggestions = (props) => {
    return (
        <View style={styles.container}>
            <Text>Suggested Experts</Text>
            <ScrollView horizontal={true}>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default connect(mapStateToProps)(ExpertSuggestions);