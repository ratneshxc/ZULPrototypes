import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Button, Dimensions, ImageBackground,ScrollView } from 'react-native';
import Reports from '../../data/Reports';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
class FlatListItem extends Component {
    render() {
        return (
            <View>
                <Card style={{
                    borderColor: 'lightgrey',
                    borderWidth: 1,
                    borderLeftWidth: 5,
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.flatListItem, { fontSize: 18, fontWeight: 'bold', }]}>{this.props.item.title}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Image
                                        source={{ uri: this.props.item.imageUrl }}
                                        style={{ width: 50, height: 50, borderRadius: 50 }}
                                    >
                                    </Image>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'lightgrey',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.flatListItem}>{this.props.item.suggestion1}</Text>
                                <Text style={styles.flatListItem}>{this.props.item.suggestion2}</Text>
                                <Text style={styles.flatListItem}>{this.props.item.suggestion3}</Text>
                            </View>
                        </View>
                    </View>
                </Card>
                <View style={{ backgroundColor: 'white', height: 5 }}></View>
            </View>
        );
    }
}
export default class Report extends Component {
    render() {
        return (
            <ScrollView>
                <FlatList
                    data={Reports}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index}>
                            </FlatListItem>);
                    }}
                >
                </FlatList>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'black',
        padding: 2,
        fontSize: 16,
    },
});
