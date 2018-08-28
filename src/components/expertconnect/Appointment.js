import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Thumbnail, Badge, Text, Icon } from 'native-base';
import StarRating from 'react-native-star-rating';


const ExpertList = (props) => {
    return (
        <View>
            {/*Recently Contacted*/}
            <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#fff' }} >
                <Text style={{ flex: 1 }}>Upcoming</Text>
                <Text style={{ color: "#00b386", textDecorationLine: 'underline' }}>View More</Text>
            </View>
            {/*Recent Experts*/}
            <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#ffffff' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Thumbnail large square source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                        <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                            <Text style={{ flex: 1 }}>Consultation with Samira </Text>
                            <Icon name='heart' type="FontAwesome" style={{ fontSize: 18, color: 'red', marginRight: 15, }} />
                            <TouchableOpacity>
                                <Icon name='ellipsis-v' type="FontAwesome" style={{ fontSize: 18, }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 13, color: '#505050' }}>22nd August 2018, 10:00AM</Text>


                        <View style={{ flexDirection: 'row' ,marginTop:10}} >
                            <View style={{ flex: 1,marginLeft:0 }}>
                                <TouchableOpacity style={{ paddingVertical: 5, paddingLeft:0,backgroundColor: '#ffffff', borderWidth: 1, margin: 3, borderColor: '#ddd' }} onPress={() => this.props.navigation.navigate('Booking')}>
                                    <Text style={{ textAlign: 'center' }}><Icon name='wechat' type="FontAwesome" style={{ fontSize: 18, marginLeft: 5 }} /></Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#ffffff', borderWidth: 1, margin: 3, borderColor: '#ddd' }} onPress={() => this.props.navigation.navigate('Booking')}>
                                    <Text style={{ textAlign: 'center' }}><Icon name='play-circle' type="FontAwesome" style={{ fontSize: 18, marginLeft: 5 }} /></Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#ffffff', borderWidth: 1, margin: 3, borderColor: '#ddd' }} onPress={() => this.props.navigation.navigate('Booking')}>
                                    <Text style={{ textAlign: 'center' }}><Icon name='book' type="FontAwesome" style={{ fontSize: 18, marginLeft: 5 }} /> 50%</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#ffffff', borderWidth: 1, margin: 3, borderColor: '#ddd' }} onPress={() => this.props.navigation.navigate('Booking')}>
                                    <Text style={{ textAlign: 'center' }}><Icon name='plus' type="FontAwesome" style={{ fontSize: 18, marginLeft: 5 }} /> 5</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
            {/*Find and connect*/}
            <View style={{ flexDirection: 'row', padding: 5, backgroundColor: '#fff' }} >
                <Text style={{ flex: 1 }}>Past Appointments</Text>
                <Text style={{ color: "#00b386", textDecorationLine: 'underline' }}>View More</Text>
            </View>
            <FlatList
                data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }]}
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
        <View style={{ flexDirection: 'column', padding: 5, marginVertical: 1, backgroundColor: '#ffffff' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', padding: 5 }}>
                <Thumbnail large square source={require('../../assests/images/profilepic/suresh.png')} />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                    <Text style={{ flex: 1 }}>Consultation with Preetam </Text>
                    <Icon name='heart' type="FontAwesome" style={{ fontSize: 18, color: 'red', marginRight: 15, }} />
                    <TouchableOpacity>
                        <Icon name='ellipsis-v' type="FontAwesome" style={{ fontSize: 18, }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 13, color: '#505050' }}>21st August 2018, 10:00AM</Text>


                <View style={{ flexDirection: 'row' ,marginTop:10}} >
                    <View style={{ flex: 1,marginLeft:0 }}>
                        <TouchableOpacity style={{ paddingVertical: 5, paddingLeft:0,backgroundColor: '#ffffff', borderWidth: 1, margin: 3, borderColor: '#ddd' }} onPress={() => this.props.navigation.navigate('Booking')}>
                            <Text style={{ textAlign: 'center' }}><Icon name='wechat' type="FontAwesome" style={{ fontSize: 18, marginLeft: 5 }} /></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#ffffff', borderWidth: 1, margin: 3, borderColor: '#ddd' }} onPress={() => this.props.navigation.navigate('Booking')}>
                            <Text style={{ textAlign: 'center' }}><Icon name='play-circle' type="FontAwesome" style={{ fontSize: 18, marginLeft: 5 }} /></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#ffffff', borderWidth: 1, margin: 3, borderColor: '#ddd' }} onPress={() => this.props.navigation.navigate('Booking')}>
                            <Text style={{ textAlign: 'center' }}><Icon name='book' type="FontAwesome" style={{ fontSize: 18, marginLeft: 5 }} /> 50%</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#ffffff', borderWidth: 1, margin: 3, borderColor: '#ddd' }} onPress={() => this.props.navigation.navigate('Booking')}>
                            <Text style={{ textAlign: 'center' }}><Icon name='plus' type="FontAwesome" style={{ fontSize: 18, marginLeft: 5 }} /> 5</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    </View>
    )
}


export default ExpertList;

