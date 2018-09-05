import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Thumbnail, Card } from 'native-base';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';

const mapStateToProps = state => (
    {
        expertList: state.Report.assessmentReport.expertList
    }
)

const ProfileCard = (props) => {
    return (
        <Card style={{ width: 150, paddingVertical: 10, marginHorizontal: 5, alignItems: 'center' }}>
            <Thumbnail source={props.profile.profileImage} />
            <Text style={{ marginVertical: 2,color:'#3a3a3a' }}>{props.profile.name}</Text>
            <Text style={{ fontSize: 12,color:'#3a3a3a' }}>{props.profile.speciality}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#3a3a3a' }}>{props.profile.score}</Text>
                <StarRating
                    disabled={false}
                    maxStars={1}
                    rating={1}
                    style={{ width: 50 }}
                    fullStarColor={'#00b386'}
                    starSize={18}
                />
            </View>
        </Card>
    )
}

const ExpertSuggestions = (props) => {
    return (
        <View>
            <Text style={styles.title}>{'Suggested Experts'.toUpperCase()}</Text>
            <ScrollView horizontal={true}>
                {props.expertList.map((x, i) => (
                    <ProfileCard profile={x} key={i} />
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        color: '#495057',
        fontSize: 13,
        fontWeight: 'bold',
        padding: 10
    }
})
export default connect(mapStateToProps)(ExpertSuggestions);