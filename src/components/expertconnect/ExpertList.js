import React from 'react';
import { View, StyleSheet, TouchableOpacity,TouchableHighlight, FlatList, ScrollView,Image } from 'react-native';
import { Thumbnail, Badge, Text, Icon,Button } from 'native-base';
import StarRating from 'react-native-star-rating';
const expertData =[
    {
        key:'a',
        img:require('../../assests/images/profilepic/Ananda_Bodhi.jpeg'),
        name:'Anandha bodhi',
        degree:'MBBS, DOMS',
        speciality:'Yoga teacher',
        experience:5,
        dimension: require('../../assests/images/dashboard/physical.png'),
        rating:4.3,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/chat.png'),
        name:'Smiti Sarangi',
        degree:'MBBS, BODMS',
        speciality:'Lifestyle management expert',
        experience:10,
        rating:4.2,
        dimension:require('../../assests/images/dashboard/emotional.png'),
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/joshi.png'),
        name:'Dr. Akhila josh',
        degree:'PhD, M.S, B.S',
        speciality:'Family expert',
        experience:5,
        rating:4.1,
        dimension:require('../../assests/images/dashboard/spiritual.png'),
        reviews:250
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/Rachna.png'),
        name:'Madhumita S',
        degree:'M.Sc, B.Sc',
        speciality:'Yoga and meditation expert',
        dimension:require('../../assests/images/dashboard/intellectual.png'),
        experience:5,
        rating:4.3,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/Seema.jpg'),
        name:'Uma Sudhakar',
        degree:'M.S, B.S',
        speciality:'Yoga expert',
        dimension:require('../../assests/images/dashboard/physical.png'),
        experience:5,
        rating:4.3,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/anupama.jpg'),
        name:'Ayesha Rehman',
        degree:'M.S, B.S',
        speciality:'Clinical nutritionist',
        experience:5,
        dimension:require('../../assests/images/dashboard/physical.png'),
        rating:4.3,
        reviews:150
    },
  
    {
        key:'a',
        img:require('../../assests/images/profilepic/yulu.jpg'),
        name:'Anupama Jhingon',
        degree:'PhD, M.S, B.S',
        speciality:'Family expert',
        dimension:require('../../assests/images/dashboard/emotional.png'),
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
        <View style={{ flexDirection: 'column', padding: 3 , backgroundColor: '#ffffff'}}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff',paddingBottom:2 }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail medium round source={props.item.img} />
                            </View>
                <TouchableOpacity  style={{ flex: 2}} onPress={()=>props.bookExperts()} >
           
                <View style={{ flex: 2, paddingHorizontal: 1,borderBottomColor:'#ddd',borderBottomWidth:1 }}>
                    <View style={{ flexDirection:'row',padding:0 ,margin:0 }}>
                        <Text style={{ flex: 1 ,marginLeft:10}}>{props.item.name}</Text>
                        <Image style={{ width: 20, height: 20}} source={props.item.dimension} />

                    </View>
                    <Text style={{ fontSize: 12,marginLeft:10 ,color: '#505050'  }}>{props.item.speciality}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 0,marginLeft:10 }}>
                    <Text style={{color: '#505050',fontSize:12}}>{props.item.rating} </Text>
                        <StarRating
                            disabled={false}
                            maxStars={1}
                            rating={1}
                            fullStarColor={'#505050'}
                            starSize={13}
                        />
                        <View style={{flex:1}}>
                        </View>
                        <Button rounded primary style={{height:25,marginVertical:3}}  onPress={()=>props.bookExperts()} >
                      
                                    <Text>Connect</Text>
                                </Button>
                    </View>
                    
                </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}


export default ExpertList;

