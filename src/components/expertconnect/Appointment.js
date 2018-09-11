import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView,Image } from 'react-native';
import { Thumbnail, Badge, Text, Icon, Button ,Toast} from 'native-base';

const expertData =[
    {
        key:'a',
        img:require('../../assests/images/profilepic/gym.jpg'),
        name:'Sanjay Singhania',
        dimension:require('../../assests/images/dashboard/physical.png'),
        appointment:'22nd August 2018, 10:00AM'
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/cute1.jpg'),
        name:'Samira Reddy',
        dimension:require('../../assests/images/dashboard/social.png'),
        appointment:'21st August 2018, 10:00AM'
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/suresh.png'),
        name:'Dr. Suresh Kumar',
        dimension:require('../../assests/images/dashboard/emotional.png'),
        appointment:'20th August 2018, 10:00AM'
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/stylish-girl.jpg'),
        name:'Hima Soni',
        dimension:require('../../assests/images/dashboard/intellectual.png'),
        appointment:'15th August 2018, 10:00AM'
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/yogagirl.jpg'),
        name:'Sonam Bothra',
        dimension:require('../../assests/images/dashboard/physical.png'),
        appointment:'13th August 2018, 10:00AM'
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/beautiful-girl.jpg'),
        name:'Sanjana Ranawat',
        dimension:require('../../assests/images/dashboard/physical.png'),
        appointment:'12th August 2018, 10:00AM'
    },
  
    {
        key:'a',
        img:require('../../assests/images/profilepic/suresh.png'),
        name:'Dr. Ramesh Kumar',
        dimension:require('../../assests/images/dashboard/emotional.png'),
        appointment:'11th August 2018, 10:00AM'
    },
];


class AppointmentList extends React.Component {
    componentDidMount() {
        // Toast.show({
        //     text: "Booking confirmed !",
        //     type:'success',
        //     duration:3000
        //   });
    }
    render(){
    return (
        <View style={{ backgroundColor: '#F5FCFF' }}>
            {/*Recently Contacted*/}
            <View style={{ flexDirection: 'row', padding: 5 }} >
                <Text style={{ flex: 1 }}>{'Upcoming'.toUpperCase()}</Text>
               <TouchableOpacity onPress={() => this.props.goToSearch()}> 
               <Text style={{ color: "#294787", textDecorationLine: 'underline' }}>Find experts</Text>
               </TouchableOpacity>
            </View>
            {/*Recent Experts*/}
            <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#ffffff' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Thumbnail medium round source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                        <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                            <Text style={{ flex: 1 }}>Samira Reddy</Text>
                            <Image style={{ width: 20, height: 20 }} source={require('../../assests/images/dashboard/physical.png')} />
                        </View>
                        <Text style={{ fontSize: 13, color: '#505050' }}>10th September 2018, 01:00PM</Text>
                        <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 10 }}>


                            <View style={{ flex: 1 }}>
                            </View>
                            <Button rounded primary style={{ height: 25, marginVertical: 1 }} onPress={() => this.props.goToBooking()} >

                                <Text>Reschedule</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
            {/*Find and connect*/}
            <View style={{ flexDirection: 'row', padding: 5, }} >
                <Text style={{ flex: 1 }}>{'Previous'.toUpperCase()}</Text>
            </View>
            <FlatList
                data={expertData}
                style={{backgroundColor:"#ffffff"}}
                renderItem={({ item }) => <AppointmentComponent item={item} goToReport={this.props.goToReport} />}
            />
        </View>
    )
}
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
                <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2,borderBottomColor:'#ddd',borderBottomWidth:1 }}>
                    <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                        <Text style={{ flex: 1 }}>{props.item.name}</Text>
                        <Image style={{ width: 20, height: 20 }} source={props.item.dimension} />
                    </View>
                    <Text style={{ fontSize: 13, color: '#505050' }}>{props.item.appointment}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 10 }}>


                        <View style={{ flex: 1 }}>
                        </View>
                        <Button rounded primary style={{ height: 25, marginVertical: 3 }} onPress={() => props.goToReport()} >
                            <Text>Get Report</Text>
                        </Button>
                    </View>

                </View>
            </View>
        </View>
    )
}


export default AppointmentList;

