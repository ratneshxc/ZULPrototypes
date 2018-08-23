import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Thumbnail, Badge, Text, Icon } from 'native-base';
import StarRating from 'react-native-star-rating';


const ExpertList = (props) => {
    return (
        <View>
            {/*Recently Contacted*/}
            <View style={{flexDirection:'row',padding:5,backgroundColor:'#fff'}}>
                <Text style={{flex:1}}>Recently Contacted</Text>
                <Text style={{color:"#00b386",textDecorationLine:'underline'}}>View More</Text>
            </View>
            {/*Recent Experts*/}
            <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail large square source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                    <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                        <Text style={{ flex: 1 }}>Samira Reddy</Text>
                        <Icon name='heart' type="FontAwesome" style={{ fontSize: 18, color: 'red', marginRight: 15, }} />
                        <TouchableOpacity>
                            <Icon name='ellipsis-v' type="FontAwesome" style={{ fontSize: 18, }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 13, color: '#505050' }}>Child Specialists</Text>
                    <View style={{ flexDirection: 'row' }}>
                    
                <View style={{ flex: 2 }}>
                    <TouchableOpacity style={{ paddingVertical: 4, backgroundColor: '#007bff', borderWidth: 1, margin: 5,marginLeft:0, borderColor: '#ddd',borderRadius:2 }}>
                        <Text style={{ textAlign: 'center' ,color:'white'}}><Icon name='usb' type="FontAwesome" style={{ fontSize: 18,color:'white' }} /> Connect</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:2}}></View>
                </View>
                </View>
            </View>
        </View>
        {/*Find and connect*/}
            <View style={{flexDirection:'row',padding:5,backgroundColor:'#fff',marginTop:5}}>
                <Text style={{flex:1}}>Find & Connect</Text>
                
            </View>
            <FlatList
                data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }]}
                renderItem={({ item }) => <SpecialityComponent item={item} />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})


const SpecialityComponent = () => {
    return (
        <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail medium square source={require('../../assests/images/profilepic/yogi.jpg')} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                    <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                        <Text style={{ flex: 1 }}>Meditation Experts</Text>
                        <Icon name='tripadvisor' type="FontAwesome" style={{ fontSize: 18, color: 'red',  }} />
                        {/* <TouchableOpacity>
                            <Icon name='ellipsis-v' type="FontAwesome" style={{ fontSize: 18, }} />
                        </TouchableOpacity> */}
                    </View>
                    <Text style={{ fontSize: 14, marginTop: 2 }}>Services available:</Text>
                    <ScrollView horizontal={true} style={{ flexDirection: 'row'}}>
                        <Badge style={{ backgroundColor: '#ffffff', borderRadius: 5, padding: 5, marginRight: 5 ,borderWidth:1,borderColor:'#ddd'}}>
                            <Text style={{ color: '#007bff', fontSize: 14 }}>Meditation Session</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#ffffff', borderRadius: 5, padding: 5, marginRight: 5,borderWidth:1,borderColor:'#ddd' }}>
                            <Text style={{ color: '#007bff', fontSize: 14 }}>Peaceful living</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#ffffff', borderRadius: 5, padding: 5, marginRight: 5 ,borderWidth:1,borderColor:'#ddd'}}>
                            <Text style={{ color: '#007bff', fontSize: 14 }}>Life Advice</Text>
                        </Badge>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}


export default ExpertList;

