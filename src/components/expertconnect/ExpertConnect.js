import React, { Component } from 'react';

import { AppRegistry, ProgressBarAndroid, FlatList, StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, ImageBackground } from 'react-native';

import dashboardData from '../../data/expertConnectListData';

//import { Card, CardItem,CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


import { Card, CardItem } from 'native-base';

class FlatListItem extends Component {

    _onPressButton(e) {

        console.log('Button pressed');

    }

    render() {

        return (

            <View >

                <Card style={{ height: 120 }}>

                    <CardItem style={{

                        flex: 2,

                        flexDirection: 'row',

                        backgroundColor: '#FFFFFF'


                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 100, marginRight: 5 }} source={require('../../assests/images/suresh.png')} />
                            <Text style={{ marginRight: 5, flex: 1 }}>70%</Text>
                            <Text style={{ marginRight: 5 }}>150 votes</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column' }}>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ flex: 5, fontWeight: 'bold' }}>Dr. Pritam Kurunukar</Text>



                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ flex: 5 }}>MBBS,DOMS,Fellowship in Glaucoma</Text>



                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ flex: 5 }}>Dermitologist</Text>



                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ flex: 5 }}>$37</Text>



                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ flex: 5 }}>9 years of experience</Text>



                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ flex: 5 }}>Available today at BrookField Hospital</Text>



                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>

                                <View style={{ flexDirection: 'row' }}>

                                    <Text style={{ flex: 7 }}>{this.props.item.time}</Text>

                                    <View style={{ flex: 1 }}>
                                    </View>

                                    <Image

                                        source={{ uri: this.props.item.peopleImageUrl }}

                                        style={{ width: 20, height: 20 }}

                                    >

                                    </Image>
                                    <View style={{ flex: 0.25 }}></View>
                                    <Text>{this.props.item.people}</Text>

                                    <View style={{ flex: 0.5 }}>

                                    </View>

                                    <View style={{ flex: 1 }}></View>

                                </View>

                            </View>

                        </View>
                    </CardItem>
                </Card>

            </View>

        );

    }

}

export default class Daily extends Component {

    _onPressButton(e) {

        console.log('Button pressed');

    }

    render() {

        return (
            <View style={{ flex: 1, marginBottom: 50 }}>



                <View >

                    <FlatList

                        data={dashboardData}

                        renderItem={({ item, index }) => {
                            return (


                                <FlatListItem item={item} index={index}>

                                </FlatListItem>);

                        }}

                    >

                    </FlatList>

                </View>

            </View>

        );

    }

}

const styles = StyleSheet.create({
    BackgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    flatListItem: {
        color: '#eee',
        padding: 10,
        fontSize: 16
    },
    container: {

        flex: 1,

        justifyContent: "space-evenly",

        padding: 10,

        right: 10

    }

});

