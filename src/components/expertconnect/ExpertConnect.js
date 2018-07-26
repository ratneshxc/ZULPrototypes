import React, { Component } from 'react';

import { AppRegistry, ProgressBarAndroid, FlatList, StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, ImageBackground } from 'react-native';

import dashboardData from '../../data/expertConnectListData';

import { Card, CardItem, Right, Left, Body } from 'native-base';
import Favorite from './FavoriteAction';
import MailAction from './MailAction';
import CallAction from './CallAction';
import BookAction from './BookAction';
import FilterAction from './FilterAction';
import ExpertConnectHeader from './ExpertConnectHeader';

class FlatListItem extends Component {

    _onPressButton(e) {

        console.log('Button pressed');

    }

    render() {

        return (

            <View >

                <Card>

                    <CardItem style={{

                        flex: 2,

                        flexDirection: 'row',

                        backgroundColor: '#FFFFFF',
                        


                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 100, marginRight: 5 }} source={require('../../assests/images/suresh.png')} />
                            <Text style={{ marginRight: 5, flex: 1 }}>70%</Text>
                            <Text style={{ marginRight: 5 }}>150 votes</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column' }}>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={[styles.textStyle,{fontWeight: 'bold'}]}>Dr. Pritam Kurunukar</Text>



                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={styles.textStyle}>MBBS,DOMS,Fellowship in Glaucoma</Text>



                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={styles.textStyle}>Dermitologist</Text>



                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={styles.textStyle}>$37 .. 30 Reviews</Text>



                            </View>
                            <View style={{ flexDirection: 'row' ,marginTop:10}}>

                                <Text style={styles.textStyle}>9 years of experience</Text>



                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={styles.textStyle}>Available today at BrookField Hospital</Text>



                            </View>

                        </View>
                    </CardItem>
                    <CardItem style={{



                        backgroundColor: '#FFFFFF'


                    }}
                        footer>
                        <Left>
                            <Favorite />
                        </Left>
                        <Body>
                            </Body>
                        <Right style={{ flexDirection: 'row' }}>
                            <MailAction />
                            <CallAction />
                            <BookAction />

                        </Right>
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
            <View style={{ flex: 1, marginBottom: 50 ,flexDirection:'column'}}>

            {/* <View style={{marginTop:5}} >
                <View style={{flex:1}}>
                <Text style={{marginLeft:10,fontWeight:'bold'}}>EXPERT CONNECT</Text>
                    </View>
                <View style={{marginRight:5}}>
                    <FilterAction />
                </View>
            </View> */}
            <ExpertConnectHeader />

                <View style={[styles.flatListItem]}>

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
        color: '#000',
        padding: 10,
        fontSize: 16,
        flex:1
    },
    container: {

        flex: 1,

        justifyContent: "space-evenly",

        padding: 10,

        right: 10

    },
    textStyle:{
        flex: 5, 
        fontFamily: 'Arial',
        color:"#222",
        fontSize: 16,
    }

});

