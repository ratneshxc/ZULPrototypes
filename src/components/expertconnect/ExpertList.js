import React from 'react';
import { View, StyleSheet, TouchableOpacity,TouchableHighlight, FlatList, ScrollView } from 'react-native';
import { Thumbnail, Badge, Text, Icon,Button } from 'native-base';
import StarRating from 'react-native-star-rating';
const expertData =[
    {
        key:'a',
        img:require('../../assests/images/profilepic/gym.jpg'),
        name:'Sanjay Singhania',
        degree:'MBBS, DOMS',
        speciality:'Yoga expert',
        experience:5,
        rating:4.3,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/cute1.jpg'),
        name:'Samira Reddy',
        degree:'MBBS, BODMS',
        speciality:'Child Specialists',
        experience:10,
        rating:4.2,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/suresh.png'),
        name:'Dr. Suresh Kumar',
        degree:'PhD, M.S, B.S',
        speciality:'Family expert',
        experience:5,
        rating:4.1,
        reviews:250
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/girl.jpg'),
        name:'Sukhi Rukhi',
        degree:'M.S, B.S',
        speciality:'Yoga expert',
        experience:5,
        rating:4.3,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/beautiful-girl.jpg'),
        name:'Sanjana Ranawat',
        degree:'M.S, B.S',
        speciality:'Yoga expert',
        experience:5,
        rating:4.3,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/stylish-girl.jpg'),
        name:'Hima Soni',
        degree:'M.Sc, B.Sc',
        speciality:'Meditation expert',
        experience:5,
        rating:4.3,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/suresh.png'),
        name:'Dr. Ramesh Kumar',
        degree:'PhD, M.S, B.S',
        speciality:'Family expert',
        experience:5,
        rating:4.1,
        reviews:250
    },
];

const ExpertList = (props) => {
    return (
        <FlatList
            data={expertData}
            renderItem={({ item }) => <ExpertComponent item={item} bookExperts={props.bookExperts} viewExperts={props.viewExperts}/>}
        />
    )
}
const styles = StyleSheet.create({
    container: {
    }
})


const ExpertComponent = (props) => {
    return (
        <View style={{ flexDirection: 'column', padding: 3 , backgroundColor: '#F0F0F0'}}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff',paddingBottom:2 }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail medium round source={props.item.img} />
                   
                    {/* <Text style={{ fontSize: 12, color: '#00b386', marginVertical: 5 }}>Available Today</Text> */}
                </View>
                <TouchableOpacity  style={{ flex: 2}} >
                {/* onPress={()=>props.viewExperts()} */}
                <View style={{ flex: 2, paddingHorizontal: 10,paddingRight:2 }}>
                    <View style={{ flexDirection:'row',padding:0 ,margin:0 }}>
                        <Text style={{ flex: 1 ,fontSize:18,marginLeft:10}}>{props.item.name}</Text>
                         <Icon name='heart' type="FontAwesome" style={{ fontSize: 18 ,marginRight:4}} />
                         
                    </View>
                    <Text style={{ fontSize: 14,marginLeft:10  }}>{props.item.speciality}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 3,marginLeft:10 }}>
                    <Text style={{color:'#000',fontSize:14}}>{props.item.rating} </Text>
                        <StarRating
                            disabled={false}
                            maxStars={1}
                            rating={1}
                            fullStarColor={'#000'}
                            starSize={16}
                        />
                        <View style={{flex:1}}>
                        </View>
                        <Button rounded primary style={{height:25,marginVertical:1}}  onPress={()=>props.bookExperts()} >
                                {/* onPress={()=>props.goToBooking()} */}
                                    <Text>Connect</Text>
                                </Button>
                    </View>
                    
                    {/* <Text style={{ fontSize: 13, color: '#505050', margin:0}}>{props.item.degree}</Text> */}
                   
                    {/* <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12 }}>{props.item.experience} Yrs Exp</Text>
                    </View> */}
                </View>
                </TouchableOpacity>
                {/* <View style={{ flex: 1, paddingHorizontal: 10,paddingRight:2 }}>
                <View style={{ flexDirection: 'row', marginTop: 0 ,marginLeft:10}}>
                    <Text style={{color:'#294787'}}>{props.item.rating}</Text>
                        <StarRating
                            disabled={false}
                            maxStars={1}
                            rating={1}
                            style={{ width: 50 }}
                            fullStarColor={'#294787'}
                            starSize={18}
                        />
                    </View>
                     <Text style={{ fontSize: 12, color: '#294787', marginLeft:10 }}>{props.item.reviews} Reviews</Text> 
                    <View >
                                <TouchableOpacity  style={{ paddingVertical: 4, backgroundColor:'white' , borderWidth: 1, margin: 0, marginLeft: 0, borderColor: '#294787', borderRadius: 50 }} onPress={()=>props.bookExperts()}>
                                    <Text style={{ textAlign: 'center', color: '#294787' }}>Connect </Text>
                                </TouchableOpacity>
                            </View>
                </View> */}
            </View>

        </View>
    )
}


export default ExpertList;

