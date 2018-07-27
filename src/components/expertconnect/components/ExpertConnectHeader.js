import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Left,
  Right,
  Body,
  Segment,Badge
} from "native-base";

import{View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class QuestionHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          seg: 4
        };
      }
    render() {
        return (
           
            <View>
            <Header hasSegment>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name="chevron-left" size={25} style={{color:"#FFFFFF"}} />
                </Button>
              </Left>
              <Body>
                <Title>Expert Connect</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="filter" size={25} style={{color:"#FFFFFF"}} />
                </Button>
              </Right>
            </Header>
            <Segment >
      
              <Badge
                first
                active={true}
                onPress={() => this.setState({ seg: 1 })}
                style={{marginRight:10,borderLeftColor:"#ffffff",backgroundColor:"#ffffff",}}
              >
                <Text style={{color:"#3475DF"}}>2 Filters Active</Text>
              </Badge>
              <Badge
                first
                active={true}
                onPress={() => this.setState({ seg: 1 })}
                style={{marginRight:10,borderLeftColor:"#ffffff",backgroundColor:"#ffffff",}}
              >
                <Text style={{color:"#3475DF"}}>AECS Lay..</Text>
              </Badge>
              <Badge
                first
                active={true}
                onPress={() => this.setState({ seg: 1 })}
                style={{marginRight:10,borderLeftColor:"#ffffff",backgroundColor:"#ffffff",}}
              >
                <Text style={{color:"#3475DF"}}>MBBS</Text>
              </Badge>
         
            </Segment>
    </View>
          
        )
    }
}
