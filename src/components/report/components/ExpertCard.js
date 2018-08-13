import React, { Component } from "react";
import { FlatList, Text, Image, StyleSheet } from "react-native";
import { Card, CardItem } from "native-base";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {
        return (
            <FlatList
                horizontal
                data={this.state.data}
                style={{padding:0}}
                renderItem={({ item: rowData }) => {
                    return (
                        <Card
                            transparent
                            style={styles.cardStyle}>

                            <CardItem style={styles.cardItemStyle}>
                                <Image
                                    style={{ height: 40, width: 40 }}
                                    source={rowData.imageUrl}
                                />
                                <Text style={styles.titleStyle}>
                                    {rowData.title}
                                </Text>
                                <Text style={styles.descStyle}>
                                    {rowData.desc}
                                </Text>
                            </CardItem>
                        </Card>
                    );
                }}
                keyExtractor={(item, index) => index}
            />
        );
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: "#ffffff",
        padding:0
    },
    cardItemStyle: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: "#ffffff",
        //backgroundColor: '#fbfbfb'
        padding:0,
        margin:0
    },
    titleStyle: {
        marginTop: 5,
        color: '#000000'

    },
    descStyle: {
        color: '#000000'
    }
})