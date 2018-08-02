import React, { Component } from 'react';

import { AppRegistry, ProgressBarAndroid, FlatList, StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, ImageBackground } from 'react-native';

import expertListData from '../../../data/expertConnectListData';

import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardItem, Right, Left, Body } from 'native-base';
import Favorite from '../components/FavoriteAction';
import MailAction from '../components/MailAction';
import CallAction from '../components/CallAction';
import BookAction from '../components/BookAction';
import ExpertConnectHeader from '../components/ExpertConnectHeader';


class FlatListItem extends Component {

    _onPressButton(e) {

        console.log('Button pressed');

    }

    render() {

        return (

            <View >

                <Card style={{
                    padding: 2,
                }}>

                    <CardItem style={{

                        flex: 2,
                        padding: 2,
                        flexDirection: 'row',





                    }}>
                        <View style={{ flexDirection: 'column', marginRight: 10 }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 100 }} source={require('../../../assests/images/suresh.png')} />
                            <Text style={[{ color: "#28a745", marginTop: 9 }]}>{this.props.item.availableON}</Text>
                            <Text style={[{ color: "black" }]}>{this.props.item.fee}</Text>




                        </View>

                        <View style={{ flex: 2, flexDirection: 'column' }}>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>{this.props.item.name}</Text>



                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={styles.textStyle}>{this.props.item.education}</Text>



                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={styles.textStyle}>{this.props.item.designation}</Text>



                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={styles.textStyle}>{this.props.item.experience}</Text>



                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={styles.textStyle}>{this.props.item.location}</Text>



                            </View>




                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                            <Text style={{ color: "#000" }}>{this.props.item.reviewSummary.positiveVote}%</Text>
                            <Progress.Bar style={{ borderRadius: 0, borderWidth: 0, marginLeft: -1, padding: 0 }} progress={this.props.item.reviewSummary.progress} width={80} color={this.props.item.reviewSummary.progressColor} unfilledColor={'#AAAAAA'} />
                            <Text style={{ color: "#000" }}>{this.props.item.reviewSummary.totalVotes} Votes</Text>
                            <Text
                                style={{ color: "#17a2b8", textDecorationStyle: "solid", textDecorationLine: "underline" }}>
                                {this.props.item.reviewSummary.totalReviews} Reviews
                                 </Text>
                            <View style={{ flexDirection: 'row',marginTop:20 }}>
                                <Favorite />
                                <MailAction />
                                <BookAction />

                            </View>


                        </View>
                    </CardItem>
                </Card>


            </View>

        );

    }

}

export default class ExpertList extends Component {

    _onPressButton(e) {

        console.log('Button pressed');

    }

    filterList = () => {
        this.props.screenProps.filterList();
    }

    render() {

        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <ExpertConnectHeader filterList={this.filterList} />

                <View style={[styles.flatListItem]}>

                    <FlatList

                        data={expertListData}


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
        flex: 1,
        backgroundColor: '#dddddd52'
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

