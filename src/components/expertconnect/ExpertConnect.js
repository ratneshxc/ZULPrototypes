import React, { Component } from 'react';

import { AppRegistry, ProgressBarAndroid, FlatList, StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, ImageBackground } from 'react-native';

import dashboardData from '../../data/expertConnectListData';

import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';
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
                        borderBottomColor: '#AAAAAA',
                        borderBottomWidth: 1



                    }}>
                        <View style={{ flexDirection: 'column',flex:1,marginRight:5}}>
                            <Image style={{ width: 50, height: 50, borderRadius: 100}} source={require('../../assests/images/suresh.png')} />
                            <View style={{ flexDirection: 'row' }}>

<Text style={[styles.textStyle, { color: "#28a745" }]}>Available </Text>



</View>
<View style={{ flexDirection: 'row'}}>

<Text style={[styles.textStyle, { marginRight: 10 }]}>$37 
</Text>



</View>

                        </View>

                        <View style={{ flex: 2, flexDirection: 'column' }}>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>Dr. Pritam K</Text>



                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={styles.textStyle}>MBBS,DOMS</Text>



                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={styles.textStyle}>Dermitologist</Text>



                            </View>
                      
                       
                            <View style={{ flexDirection: 'row' }}>

<Text style={styles.textStyle}>BrookField Hospital</Text>



</View>

                           
                       

                        </View>
                        <View style={{ flexDirection: 'column', marginLeft:5}}>
                            <Text style={{color:"#000"}}>70%</Text>
                            <Progress.Bar style={{borderRadius:0,borderWidth:0,marginLeft:-1,padding:0}} progress={0.7} width={50} color={"#28a745"} unfilledColor={'#AAAAAA'} />
                            <Text style={{color:"#000" }}>150 votes</Text>
                            <Text style={{color:"#000" }}>9 yrs exp</Text>
                            <Text
                                        style={{ color: "#17a2b8", textDecorationStyle: "solid", textDecorationLine: "underline" }}>
                                        30 Reviews
                                 </Text>
                               

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
                        <Right style={{ flexDirection: 'row', paddingRight: 10 }}>
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
            <View style={{ flex: 1, marginBottom: 50, flexDirection: 'column' }}>

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
        fontSize: 15,
        flex: 1
    },
    container: {

        flex: 1,

        justifyContent: "space-evenly",

        padding: 10,

        right: 10

    },
    textStyle: {
        flex: 5,
        fontFamily: 'Arial',
        color: "#222",
        fontSize: 15,
    }

});

