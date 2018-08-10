import React, { Component } from "react";
import { FlatList, Text ,Image} from "react-native";
import { Card, CardItem } from "native-base";

const data = [
    {
        imageUrl: require('../../assests/images/experts/anuradha.png'),
        title: "Anuradha B",
        desc: "Dietian"
    },
    {
        imageUrl: require('../../assests/images/experts/adarsh.png'),
        title: "Apurv Adarsh",
        desc: "Physician"
    },
    {
        imageUrl: require('../../assests/images/experts/steven.png'),
        title: "Steven",
        desc: "Life coach"
    },
    {
        imageUrl:require('../../assests/images/experts/varsha.png'),
        title: "Varsha K",
        desc: "Life Coach"
    },
    {
        imageUrl: require('../../assests/images/experts/rajni.png'),
        title: "Rajnikant Kumar",
        desc: "Gym Trainer"
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
         //backgroundColor: '#dddddd52'
        backgroundColor:"#ffffff"
                            }}>

                            <CardItem style={{

                                flex: 2,
                                flexDirection: 'column',
                                backgroundColor:"#ffffff"
                                //backgroundColor: '#fbfbfb'
                            }}>
                                <Image
                                    style={{ height: 70, width: 70 }}
                                    source={rowData.imageUrl}
                                />
                                <Text  style={{marginTop:5,color:'#000000'}}>
                                    {rowData.title}
                                </Text>
                                <Text style={{ color:'#000000'}}>
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