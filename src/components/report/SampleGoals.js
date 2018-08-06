import React, { Component } from "react";
import { FlatList, Text ,Image} from "react-native";
import { Card, CardItem } from "native-base";

const data = [
    {
        imageUrl: require('../../assests/images/experts/run.png'),
        title: "Run 5k steps"
    },
    {
        imageUrl: require('../../assests/images/experts/date.png'),
        title: "Go on a date"
    },
    {
        imageUrl: require('../../assests/images/experts/okr.png'),
        title: "Define OKR"
    },
    {
        imageUrl:require('../../assests/images/experts/mediate.png'),
        title: "Mediate"
    },
    {
        imageUrl: require('../../assests/images/experts/money.png'),
        title: "Save 50K"
    }
];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }

    render() {
        return (
            <FlatList
                horizontal
                data={this.state.data}
                renderItem={({ item: rowData }) => {
                    return (
                        <Card
                            transparent
                            style={{
        backgroundColor: '#dddddd52'
                               
                            }}>

                            <CardItem style={{

                                flex: 2,
                                flexDirection: 'column',
                                backgroundColor: '#fbfbfb'
                            }}>
                                <Image
                                    style={{ height: 70, width: 70 }}
                                    source={rowData.imageUrl}
                                />
                                <Text  style={{marginTop:5,color:'#000000'}}>
                                    {rowData.title}
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