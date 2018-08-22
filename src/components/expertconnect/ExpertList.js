import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Thumbnail, Badge, Text, Icon } from 'native-base';


const ExpertList = (props) => {
    return (
        <FlatList
            data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }]}
            renderItem={({ item }) => <ExpertComponent item={item} />}
        />
    )
}
const styles = StyleSheet.create({
    container: {
    }
})


const ExpertComponent = () => {
    return (
        <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail large square source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                    <View style={{ flexDirection: 'row', backgroundColor: '#00b386', borderRadius: 10, marginVertical: 3, paddingHorizontal: 5, paddingVertical: 3 }}>
                        <Icon name="thumbs-up" type="FontAwesome" style={{ color: '#ffffff', fontSize: 15 }} />
                        <Text style={{ fontSize: 12, color: '#ffffff',marginLeft:3 }}>90 %</Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>350 votes</Text>
                    <Text style={{ fontSize: 12, color: '#00b386', marginVertical: 5 }}>Available Today</Text>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Text>Samira Reddy</Text>
                    <Text style={{ fontSize: 13, color: '#505050' }}>Dermatologies, MBBS</Text>
                    <Text style={{ fontSize: 13, color: '#505050', marginVertical: 5 }}>BTM,Thavarekere Main Road, Bengaluru</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12 }}>5 Yrs Exp</Text>
                        <Text style={{ fontSize: 12, marginLeft: 20 }}>250 Rs</Text>
                    </View>
                    <Text style={{ fontSize: 14, marginVertical: 5 }}>Services available:</Text>
                    <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Skin therapy</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Laser treatment</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Hair Transplantation</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Fungal therapy</Text>
                        </Badge>
                    </ScrollView>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ paddingVertical: 4, backgroundColor: '#ffffff', borderWidth: 1, margin: 10 }}>
                        <Text style={{ textAlign: 'center' }}>Contact</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#5067FF', margin: 10 }}>
                        <Text style={{ textAlign: 'center', color: '#ffffff' }}>Book Appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default ExpertList;

