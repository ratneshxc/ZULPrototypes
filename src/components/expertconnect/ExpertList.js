import React from 'react';
import { View, StyleSheet, TouchableOpacity,TouchableHighlight, FlatList, ScrollView } from 'react-native';
import { Thumbnail, Badge, Text, Icon } from 'native-base';
import StarRating from 'react-native-star-rating';


const ExpertList = (props) => {
    return (
        <FlatList
            data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }]}
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
        <View style={{ flexDirection: 'column', padding: 5 , backgroundColor: '#F0F0F0'}}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff' }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail large square source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                   
                    {/* <Text style={{ fontSize: 12, color: '#00b386', marginVertical: 5 }}>Available Today</Text> */}
                </View>
            
                <View style={{ flex: 2, paddingHorizontal: 10,paddingRight:2 }}>
                    <View style={{ flexDirection:'row',padding:0 ,margin:0 }}>
                        <Text style={{ flex: 1 }}>Samira Reddy</Text>
                    </View>
                    <Text style={{ fontSize: 13, color: '#505050', margin:0}}>Dermatologiest, MBBS</Text>
                    <Text style={{ fontSize: 13, color: '#505050' }}>Child Specialists</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12 }}>5 Yrs Exp</Text>
                    </View>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10,paddingRight:2 }}>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{color:'#00b386'}}>4.2</Text>
                        <StarRating
                            disabled={false}
                            maxStars={1}
                            rating={1}
                            style={{ width: 50 }}
                            fullStarColor={'#00b386'}
                            starSize={18}
                        />
                    </View>
                    <Text style={{ fontSize: 12, color: '#00b386', textDecorationLine: 'underline' }}>350 Reviews</Text>
                    <View >
                                <TouchableOpacity style={{ paddingVertical: 4, backgroundColor: '#007bff', borderWidth: 1, margin: 5, marginLeft: 0, borderColor: '#F0F0F0', borderRadius: 2 }}>
                                    <Text style={{ textAlign: 'center', color: 'white' }}>{/*<Icon name='usb' type="FontAwesome" style={{ fontSize: 18, color: 'white' }} />*/}Connect </Text>
                                </TouchableOpacity>
                            </View>
                </View>
            </View>
            {/* <View style={{ flexDirection: 'row' }} >
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ paddingVertical: 4, backgroundColor: '#ffffff', borderWidth: 1, margin: 10 ,borderColor:'#ddd'}} onPress={()=>props.bookExperts()}>
                        <Text style={{ textAlign: 'center' }}>Free <Icon name='wechat' type="FontAwesome" style={{ fontSize:18,marginLeft:5}} /></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#ffffff', borderWidth: 1, margin: 10,borderColor:'#ddd' }}  onPress={()=>props.bookExperts()}>
                        <Text style={{ textAlign: 'center' }}>₹100 <Icon name='play-circle' type="FontAwesome" style={{ fontSize:18,marginLeft:5}} /></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#ffffff', borderWidth: 1, margin: 10 ,borderColor:'#ddd'}} onPress={()=>props.bookExperts()}>
                        <Text style={{ textAlign: 'center'}}>₹300 <Icon name='calendar-plus-o' type="FontAwesome" style={{ fontSize:18,marginLeft:5}} /></Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    )
}


export default ExpertList;

