import React, { Component } from 'react';

import { AppRegistry, ProgressBarAndroid, FlatList, StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, ImageBackground } from 'react-native';

import dashboardData from '../data/dashboardData';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import Spinner from './Spinner';
import Stats from './Stats';

class FlatListItem extends Component {

  _onPressButton(e) {

    console.log('Button pressed');

  }

  render() {

    return (

      <View >

        <Card style={{ height: 95 }}>

          <View style={{

            flex: 2,

            flexDirection: 'row',

            backgroundColor: '#FFFFFF'

          }}>

            <Image

              source={{ uri: this.props.item.ImageUrl }}

              style={{ width: 40, height: 40, }}

            >

            </Image>

            <View style={{ flex: 1, flexDirection: 'column' }}>

              <View style={{ flexDirection: 'row' }}>

                <Text style={{ flex: 5 }}>{this.props.item.suggestionDescription}</Text>

                <View style={{ flex: 1 }}></View>
                <Image

                  source={{ uri: this.props.item.clock }}

                  style={{ width: 20, height: 20 }}

                >

                </Image>
                <View style={{ flex: 0.1 }}></View>
                <Text style={{ paddingEnd: 5 }}>{this.props.item.fractionpart}</Text>

              </View>

              <View style={{ flexDirection: 'column' }}>

                <View><Text style={{ color: 'green', fontSize: 14 }}>{(this.props.item.range) * 100}% completed</Text></View>

                <View style={styles.container}>

                  <ProgressBarAndroid

                    styleAttr="Horizontal"

                    indeterminate={false}

                    progress={this.props.item.range}

                  />

                </View>

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
          </View>
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
      <View style={{ flex: 1 ,marginBottom:50}}>

        <View style={{ flexDirection: 'column' }}><Spinner />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#000000' }}>Suresh</Text>

        </View>
        <View><Stats /></View>
        <Card >
          <Text style={{ color: '#000000', width: 325, height: 37, top: 7, marginLeft: 5 }}>We have some recommendations for you</Text>
        </Card>


        <View >

          <FlatList

            data={dashboardData}

            renderItem={({ item, index }) => {

              //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);

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

