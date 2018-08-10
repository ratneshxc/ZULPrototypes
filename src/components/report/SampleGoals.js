import React, { Component } from "react";
import { FlatList, Text ,Image} from "react-native";
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
                                //backgroundColor: '#fbfbfb'
                                backgroundColor:'#ffffff'
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