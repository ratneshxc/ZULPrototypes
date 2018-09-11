import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView,Image } from 'react-native';
import { Thumbnail, Badge, Text, Icon, Button } from 'native-base';
const expertData = [{
    key: 'key1',
    title: "Meditation gurus",
    icon: require('../../assests/images/dashboard/spiritual.png'),
    img: require('../../assests/images/profilepic/yogi.jpg'),
    description: 'Mind fit classes, Meditation session, Advanced yoga session...'
},
{
    key: 'key2',
    title: "Financial advisors",
    icon: require('../../assests/images/dashboard/financial.png'),
    img: require('../../assests/images/profilepic/financialExpert.jpg'),
    description: 'Investment Advice, Financial coaching, Retirement planning ...'
},
{
    key: 'key3',
    title: "Relationship experts",
    icon: require('../../assests/images/dashboard/emotional.png'),
    img: require('../../assests/images/profilepic/loveguru.jpg'),
    description: 'Relationship advice,Marriage counselling, Parenting tips ...'
},
{
    key: 'key4',
    title: "Career counsellors",
    icon: require('../../assests/images/dashboard/intellectual.png'),
    img: require('../../assests/images/profilepic/teacher.jpg'),
    description: 'Career guidance, Parent advice, Interest development...'
},
{
    key: 'key5',
    title: "Fitness trainer",
    icon: require('../../assests/images/dashboard/physical.png'),
    img: require('../../assests/images/profilepic/gym.jpg'),
    description: 'Weight loss, Abs and Muscles, Lean body workout ...'
},
{
    key: 'key6',
    title: "Relationship Experts",
    icon:require('../../assests/images/dashboard/emotional.png'),
    img: require('../../assests/images/profilepic/loveguru.jpg'),
    description: 'Relationship advice, Marriage counselling, Parenting tips ...'
},
{
    key: 'key7',
    title: "Meditation gurus",
    icon: require('../../assests/images/dashboard/spiritual.png'),
    img: require('../../assests/images/profilepic/yogi.jpg'),
    description: 'Mind fit classes, Meditation session, Advanced yoga session...'
},]

const ExpertList = (props) => {
    return (
        <View>
            {/*Recently Contacted*/}
            <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F5FCFF' }} >
                <Text style={{ flex: 1 }}>{'Recently connected'.toUpperCase()}</Text>
                <Text style={{ color: "#294787", textDecorationLine: 'underline' }}>View more</Text>
            </View>
            {/*Recent Experts*/}
            <View style={{ flexDirection: 'column', padding: 5, backgroundColor: '#F5FCFF' }}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#fff' }}>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Thumbnail medium round source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                        <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                            <Text style={{ flex: 1, fontSize: 18 }}>Samira Reddy</Text>
                            <Image style={{ width: 20, height: 20 }} source={require('../../assests/images/dashboard/physical.png')} />

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
            <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#F5FCFF' }}>
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

        <View style={{ flexDirection: 'column', padding: 3, paddingVertical: 1, backgroundColor: '#FFF' }} >
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff', padding: 2 }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail round source={props.item.img} style={{ height: 50 }} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                    <TouchableOpacity onPress={() => props.goToExperts()} >
                        <View style={{borderBottomColor:'#ddd',borderBottomWidth:1}}>
                            <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                                <Text style={{ flex: 1, fontSize: 18 }}>{props.item.title}</Text>
                                <Image style={{ width: 20, height: 20 }} source={props.item.icon} />
                            </View>
                            <Text style={{ fontSize: 12, marginTop: 1,marginBottom:10 }}>{props.item.description}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default ExpertList;

