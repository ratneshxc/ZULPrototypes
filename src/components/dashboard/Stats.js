import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import summaryData from '../../data/summaryData'
import { Card } from 'react-native-cards'
class FlatListItem extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <View style={{

                flex: 1,

                flexDirection: 'column',

            }}>

                <View>
                    <Card style={{ width: (screenWidth / 2) - 10, height: 80, alignItems: 'flex-end', backgroundColor: '#FFFFFF' }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            backgroundColor: '#FFFFFF'
                        }}>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>


                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000000', fontFamily: 'Regular' }} >{this.props.item.title}</Text>
                                <Image

                                    source={{ uri: this.props.item.imageUrl }}

                                    style={{ width: 30, height: 30, margin: 5 }}

                                >

                                </Image>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000000', fontFamily: 'Regular' }} >{this.props.item.percentage}</Text>
                            </View>
                        </View>

                    </Card>
                </View>
            </View>
        )
    }
}
export default class Stats extends React.Component {
    constructor() {
        super();
        this.state = ({
            data: summaryData
        })
    }
    render() {
        return (
            <View style={{ marginBottom: 30 }}>
                <View><Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', margin: 5 }}>Summary</Text></View>
                <FlatList
                    data={this.state.data}

                    renderItem={({ item, index }) => {

                        return (
                            <FlatListItem item={item} index={index} >
                            </FlatListItem>

                        )

                    }}
                    numColumns={this.state.GridColumnsValue ? 1 : 2}

                    key={(this.state.GridColumnsValue) ? 'ONE COLUMN' : 'TWO COLUMN'}

                    keyExtractor={(item, index) => index}

                />
            </View>
        )
    }
}