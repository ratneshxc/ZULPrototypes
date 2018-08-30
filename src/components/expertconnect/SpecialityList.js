import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Thumbnail, Badge, Text, Icon } from 'native-base';
import StarRating from 'react-native-star-rating';
const expertData = [{
    key: 'key1',
    title: "Meditation Experts",
    icon: 'tripadvisor',
    img: require('../../assests/images/profilepic/yogi.jpg'),
    description: 'Mind fit classes, Meditation Session ...'
},
{
    key: 'key2',
    title: "Financial Experts",
    icon: 'rupee',
    img: require('../../assests/images/profilepic/financialExpert.jpg'),
    description: 'Investment Advice, Financial Coaching ...'
},
{
    key: 'key3',
    title: "Relationship Experts",
    icon: 'heart',
    img: require('../../assests/images/profilepic/loveguru.jpg'),
    description: 'Relationship advice, Marraige Counsilling ...'
},
{ 
    key: 'key4',
    title: "Carrier Counsellors",
    icon: 'child',
    img: require('../../assests/images/profilepic/teacher.jpg'),
    description: 'Carrier Guidance, Parent advice...'
},
{
    key: 'key5',
    title: "Fitness Experts",
    icon: 'spotify',
    img: require('../../assests/images/profilepic/gym.jpg'),
    description: 'Weight loss, Abs and Muscles ...'
},
{
    key: 'key6',
    title: "Relationship Experts",
    icon: 'heart',
    img: require('../../assests/images/profilepic/loveguru.jpg'),
    description: 'Relationship advice, Marraige Counsilling ...'
},
{
    key: 'key7',
    title: "Meditation Experts",
    icon: 'tripadvisor',
    img: require('../../assests/images/profilepic/yogi.jpg'),
    description: 'Mind fit classes, Meditation Session ...'
},]

const ExpertList = (props) => {
    return (
        <View>
            {/*Recently Contacted*/}
            <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F0F0F0' }} >
                <Text style={{ flex: 1 }}>Recently Contacted</Text>
                <Text style={{ color: "#00b386", textDecorationLine: 'underline' }}>View More</Text>
            </View>
            {/*Recent Experts*/}
            <View style={{ flexDirection: 'column', padding: 5, backgroundColor: '#F0F0F0' }}>
                <View style={{ flex: 1, flexDirection: 'row',backgroundColor: '#fff'  }}>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Thumbnail large square source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                        <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                            <Text style={{ flex: 1 }}>Samira Reddy</Text>
                            <Icon name='heart' type="FontAwesome" style={{ fontSize: 18 }} />

                        </View>
                        <Text style={{ fontSize: 13, color: '#505050' }}>Child Specialist</Text>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flex: 2 }}>
                                <TouchableOpacity style={{ paddingVertical: 4, backgroundColor: '#007bff', borderWidth: 1, margin: 5, marginLeft: 0, borderColor: '#F0F0F0', borderRadius: 2 }}>
                                    <Text style={{ textAlign: 'center', color: 'white' }}><Icon name='usb' type="FontAwesome" style={{ fontSize: 18, color: 'white' }} /> Connect</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2 }}></View>
                        </View>
                    </View>
                </View>
            </View>
            {/*Find and connect*/}
            <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F0F0F0' }}>
                <Text style={{ flex: 1 }}>Find & Connect</Text>

            </View>
            <FlatList
                data={expertData}
                renderItem={({ item }) => <SpecialityComponent item={item} goToExperts={props.goToExperts} />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})


const SpecialityComponent = (props) => {
    return (

        <View style={{ flexDirection: 'column', padding: 5, backgroundColor: '#F0F0F0' }} >
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff' }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail small square source={props.item.img} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                    <TouchableOpacity onPress={() => props.goToExperts()} >
                        <View>
                            <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                                <Text style={{ flex: 1 }}>{props.item.title}</Text>
                                <Icon name={props.item.icon} type="FontAwesome" style={{ fontSize: 18 }} />
                            </View>
                            <Text style={{ fontSize: 14, marginTop: 2 }}>{props.item.description}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default ExpertList;

