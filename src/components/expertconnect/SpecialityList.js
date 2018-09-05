import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Thumbnail, Badge, Text, Icon, Button } from 'native-base';
const expertData = [{
    key: 'key1',
    title: "Meditation gurus",
    icon: 'tripadvisor',
    img: require('../../assests/images/profilepic/yogi.jpg'),
    description: 'Mind fit classes, Meditation session, Advanced yoga session...'
},
{
    key: 'key2',
    title: "Financial advisors",
    icon: 'rupee',
    img: require('../../assests/images/profilepic/financialExpert.jpg'),
    description: 'Investment Advice, Financial coaching, Retirement planning ...'
},
{
    key: 'key3',
    title: "Relationship experts",
    icon: 'heart',
    img: require('../../assests/images/profilepic/loveguru.jpg'),
    description: 'Relationship advice, Marraige counsilling, Parenting tips ...'
},
{
    key: 'key4',
    title: "Carrier counsellors",
    icon: 'child',
    img: require('../../assests/images/profilepic/teacher.jpg'),
    description: 'Carrier guidance, Parent advice, Interest development...'
},
{
    key: 'key5',
    title: "Fitness trainer",
    icon: 'spotify',
    img: require('../../assests/images/profilepic/gym.jpg'),
    description: 'Weight loss, Abs and Muscles, Lean body workout ...'
},
{
    key: 'key6',
    title: "Relationship Experts",
    icon: 'heart',
    img: require('../../assests/images/profilepic/loveguru.jpg'),
    description: 'Relationship advice, Marraige counsilling, Parenting tips ...'
},
{
    key: 'key7',
    title: "Meditation gurus",
    icon: 'tripadvisor',
    img: require('../../assests/images/profilepic/yogi.jpg'),
    description: 'Mind fit classes, Meditation session, Advanced yoga session...'
},]

const ExpertList = (props) => {
    return (
        <View>
            {/*Recently Contacted*/}
            <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F0F0F0' }} >
                <Text style={{ flex: 1 }}>{'Recently connected'.toUpperCase()}</Text>
                <Text style={{ color: "#294787", textDecorationLine: 'underline' }}>View More</Text>
            </View>
            {/*Recent Experts*/}
            <View style={{ flexDirection: 'column', padding: 5, backgroundColor: '#F0F0F0' }}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#fff' }}>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Thumbnail medium round source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                        <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                            <Text style={{ flex: 1, fontSize: 18 }}>Samira Reddy</Text>
                            <Icon name='heart' type="FontAwesome" style={{ fontSize: 18 }} />

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>

                            <View style={{ flex: 2 }}>
                                <Button rounded primary style={{height:30}}  onPress={()=>props.goToBooking()} >
                                {/* onPress={()=>props.goToBooking()} */}
                                    <Text>Connect</Text>
                                </Button>
                            </View>
                            <View style={{ flex: 3 }}></View>
                        </View>
                    </View>
                </View>
            </View>
            {/*Find and connect*/}
            <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F0F0F0' }}>
                <Text style={{ flex: 1 }}>{'Find & Connect'.toUpperCase()}</Text>

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

        <View style={{ flexDirection: 'column', padding: 3, paddingVertical: 1, backgroundColor: '#F0F0F0' }} >
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff', padding: 2 }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail round source={props.item.img} style={{ height: 50 }} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                    <TouchableOpacity onPress={() => props.goToExperts()} >
                        <View>
                            <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                                <Text style={{ flex: 1, fontSize: 18 }}>{props.item.title}</Text>
                                <Icon name={props.item.icon} type="FontAwesome" style={{ fontSize: 18 }} />
                            </View>
                            <Text style={{ fontSize: 12, marginTop: 2 }}>{props.item.description}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default ExpertList;

