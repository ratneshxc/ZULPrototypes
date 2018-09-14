import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
import { Thumbnail, Badge, Text, Icon, Button, Toast } from 'native-base';

const expertData = [
    {
        key: 'a',
        img: require('../../assests/images/profilepic/gym.jpg'),
        name: 'Sanjay Singhania',
        dimension: require('../../assests/images/dashboard/physical.png'),
        appointmentDate: '22 Aug',
        appointmentTime: '10:00 AM',
        speciality: 'Fitness expert'
    },
    {
        key: 'a',
        img: require('../../assests/images/profilepic/cute1.jpg'),
        name: 'Samira Reddy',
        dimension: require('../../assests/images/dashboard/social.png'),
        appointmentDate: '10 Aug',
        appointmentTime: '09:00 AM',
        speciality: 'Fitness expert'
    },
    {
        key: 'a',
        img: require('../../assests/images/profilepic/suresh.png'),
        name: 'Dr. Suresh Kumar',
        dimension: require('../../assests/images/dashboard/emotional.png'),
        appointmentDate: '09 Jul',
        appointmentTime: '11:00 AM',
        speciality: 'Fitness expert'
    },
    {
        key: 'a',
        img: require('../../assests/images/profilepic/stylish-girl.jpg'),
        name: 'Hima Soni',
        dimension: require('../../assests/images/dashboard/intellectual.png'),
        appointmentDate: '05 Jun',
        appointmentTime: '12:30 AM',
        speciality: 'Fitness expert'
    },
    {
        key: 'a',
        img: require('../../assests/images/profilepic/yogagirl.jpg'),
        name: 'Sonam Bothra',
        dimension: require('../../assests/images/dashboard/physical.png'),
        appointmentDate: '02 May',
        appointmentTime: '11:00 AM',
        speciality: 'Fitness expert'
    },
    {
        key: 'a',
        img: require('../../assests/images/profilepic/beautiful-girl.jpg'),
        name: 'Sanjana Ranawat',
        dimension: require('../../assests/images/dashboard/physical.png'),
        appointmentDate: '11 Apr',
        appointmentTime: '07:00 AM',
        speciality: 'Fitness expert'
    },

    {
        key: 'a',
        img: require('../../assests/images/profilepic/suresh.png'),
        name: 'Dr. Ramesh Kumar',
        dimension: require('../../assests/images/dashboard/emotional.png'),
        appointmentDate: '14 Mar',
        appointmentTime: '08:00 AM',
        speciality: 'Fitness expert'
    },
];


class AppointmentList extends React.Component {
    componentDidMount() {
        if (this.props.booked) {
            Toast.show({
                text: "Booking confirmed !",
                type: 'success',
                duration: 3000
            });
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: '#f7f7f7' }}>
                {/*Recently Contacted*/}
                <View style={{ flexDirection: 'row', marginTop: 10 }} >
                    <Text style={[styles.title, { flex: 1 }]}>{'Upcoming'.toUpperCase()}</Text>
                    <TouchableOpacity onPress={() => this.props.goToSearch()}>
                        <Text style={{ color: "#294787", textDecorationLine: 'underline' }}>Find experts</Text>
                    </TouchableOpacity>
                </View>
                {/*Recent Experts*/}
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderBottomColor: '#ddd', borderBottomWidth: 1, padding: 5, paddingVertical: 10 }}>
                    <View style={{ alignItems: 'center', paddingVertical: 5 }}>
                        <View style={{ borderRightColor: '#ddd', borderRightWidth: 1, paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 17, color: '#3a3a3a' }}>10 Sept</Text>
                            <Text style={{ fontSize: 13, color: '#3a3a3a' }}>10:30 AM</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Thumbnail small round source={require('../../assests/images/profilepic/beautiful-girl.jpg')} />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                        <View style={{}}>
                            <Text style={{ color: '#3a3a3a', fontSize: 17 }}>Rupali Yadav</Text>
                            <Text note>Fitness Expert</Text>
                        </View>
                    </View>
                    <View>
                        <Image style={{ width: 25, height: 25 }} source={require('../../assests/images/dashboard/physical.png')} />
                    </View>
                </View>
                {/*Find and connect*/}
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }} >
                    <Text style={styles.title}>{'Previous'.toUpperCase()}</Text>
                </View>
                <FlatList
                    data={expertData}
                    style={{ backgroundColor: "#ffffff" }}
                    renderItem={({ item }) => <AppointmentComponent item={item} goToReport={this.props.goToReport} />}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    title: {
        paddingHorizontal: 10,
        color: '#495057',
        fontSize: 13,
        fontWeight: 'bold'
    }
})


const AppointmentComponent = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#ddd', borderBottomWidth: 1, padding: 5, paddingVertical: 10 }}>
            <View style={{ alignItems: 'center', paddingVertical: 5 }}>
                <View style={{ borderRightColor: '#ddd', borderRightWidth: 1, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 17, color: '#3a3a3a' }}>{props.item.appointmentDate}</Text>
                    <Text style={{ fontSize: 13, color: '#3a3a3a' }}>{props.item.appointmentTime}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', padding: 5 }}>
                <Thumbnail small round source={props.item.img} />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                <View style={{}}>
                    <Text style={{ color: '#3a3a3a', fontSize: 17 }}>{props.item.name}</Text>
                    <Text note>{props.item.speciality}</Text>

                </View>
            </View>
            <View>
                <Image style={{ width: 25, height: 25 }} source={props.item.dimension} />
            </View>
        </View>
    )
}


export default AppointmentList;

