import React, { Component } from "react";
import {View} from 'react-native';
import { Content,Fab, Card, CardItem, Icon,IconNB,Text, Body,Button} from "native-base";

import styles from "./styles.js";
export default class TabOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
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
              <Text style={{fontWeight:'bold'}}>We have some Recommendations for you</Text>
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
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <IconNB name="md-add" />
            <Button style={{ backgroundColor: "#34A34F" }}>
              <IconNB name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: "#3B5998" }}>
              <IconNB name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: "#DD5144" }}>
              <IconNB name="ios-mail" />
            </Button>
          </Fab>
      </Content>
    );
  }
}

