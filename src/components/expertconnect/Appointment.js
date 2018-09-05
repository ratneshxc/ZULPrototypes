import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Thumbnail, Badge, Text, Icon, Button } from 'native-base';

const expertData =[
    {
        key:'a',
        img:require('../../assests/images/profilepic/gym.jpg'),
        name:'Sanjay',
        dimension:'dumbbell',
        appointment:'22nd August 2018, 10:00AM'
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/cute1.jpg'),
        name:'Samira',
        dimension:'face',
        appointment:'21st August 2018, 10:00AM'
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/suresh.png'),
        name:'Dr. Suresh',
        dimension:'heart',
        appointment:'20th August 2018, 10:00AM'
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/stylish-girl.jpg'),
        name:'Hima',
        dimension:'owl',
        appointment:'15th August 2018, 10:00AM'
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/yogagirl.jpg'),
        name:'Sonam',
        dimension:'dumbbell',
        appointment:'13th August 2018, 10:00AM'
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/beautiful-girl.jpg'),
        name:'Sanjana',
        dimension:'dumbbell',
        appointment:'12th August 2018, 10:00AM'
    },
  
    {
        key:'a',
        img:require('../../assests/images/profilepic/suresh.png'),
        name:'Dr. Ramesh',
        dimension:'heart',
        appointment:'11th August 2018, 10:00AM'
    },
];


const AppointmentList = (props) => {
    return (
        <View style={{ backgroundColor: '#F0F0F0' }}>
            {/*Recently Contacted*/}
            <View style={{ flexDirection: 'row', padding: 5 }} >
                <Text style={{ flex: 1 }}>Upcoming</Text>
            </View>
            {/*Recent Experts*/}
            <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#ffffff' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Thumbnail medium round source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                        <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                            <Text style={{ flex: 1 }}>Consultation with Samira </Text>
                            <Icon name='dumbbell' type="MaterialCommunityIcons" style={{ fontSize: 18, marginRight: 5, }} />
                        </View>
                        <Text style={{ fontSize: 13, color: '#505050' }}>10th September 2018, 01:00PM</Text>
                        <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 10 }}>


                            <View style={{ flex: 1 }}>
                            </View>
                            <Button rounded primary style={{ height: 25, marginVertical: 1 }} onPress={() => props.navigation.navigate("Booking")} >

                                <Text>Reschedule</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
            {/*Find and connect*/}
            <View style={{ flexDirection: 'row', padding: 5, }} >
                <Text style={{ flex: 1 }}>Previous</Text>
            </View>
            <FlatList
                data={expertData}
                renderItem={({ item }) => <AppointmentComponent item={item} goToExperts={props.goToExperts} />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})


const AppointmentComponent = (props) => {
    return (
        <View style={{ flexDirection: 'column', padding: 5, marginVertical: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail medium round source={props.item.img} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                    <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                        <Text style={{ flex: 1 }}>Consultation with {props.item.name}</Text>
                        <Icon name={props.item.dimension} type="MaterialCommunityIcons" style={{ fontSize: 18, marginRight: 5, }} />
                    </View>
                    <Text style={{ fontSize: 13, color: '#505050' }}>{props.item.appointment}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 10 }}>


                        <View style={{ flex: 1 }}>
                        </View>
                        <Button rounded primary style={{ height: 25, marginVertical: 1 }} onPress={() => props.bookExperts()} >
                            <Text>Get Report</Text>
                        </Button>
                    </View>

                </View>
            </View>
        </View>
    )
}


export default AppointmentList;

