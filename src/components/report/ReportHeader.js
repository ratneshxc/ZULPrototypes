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
} from "native-base";

import{View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ReportsHeader extends React.Component {


    render() {
        return (
           
            <View>
            <Header>
             <Body>
                <Title>Thought Control</Title>
              </Body>
              <Right>
                <Button transparent >
                  <Icon name="ellipsis-v" size={25} style={{color:"#FFFFFF"}} />
                </Button>
              </Right>
            </Header>
    </View>
          
        )
    }
}
