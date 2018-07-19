import React, { Component } from "react";
import {View} from 'react-native';
import { Content, Card, CardItem, Icon,Text, Body,Button} from "native-base";

import styles from "./styles.js";
export default class TabOne extends Component {
  render() {
    return (
      <Content padder>
      {/*Filters */}
      <View style={{flex:1,flexDirection:'row'}}>
       <Button bordered rounded primary style={styles.filter}>
            <Text>Daily</Text>
          </Button>
          <Button bordered rounded primary style={styles.filter}>
            <Text>weekly</Text>
          </Button>
          <Button bordered rounded primary style={styles.filter}>
            <Text>Monthly</Text>
          </Button>
       </View>
       {/*Stats */}
       <Card style={styles.scoreCard}>
          <CardItem >
            
            <Body style={{flex:1}}>
            {/* <View style={styles.flexRow}>
            <View style={styles.flexRow}>
              </View>
                <Icon name="share" style={{height:20}}/>
              </View> */}
            <View style={styles.flexRow}>
              <View>
                <Icon name="paper" />
              </View>
              <View style={styles.score}>
                 <Text>100/500</Text>
              </View>
              <View>
                <Icon name="share" />
              </View>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text>NativeBase is open source and free.</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Platform specific codebase for components</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Any native third-party libraries can be included along with
                NativeBase.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Single file to theme your app and NativeBase components.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Gives an ease to include different font types in your app.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

