import React, { Component } from "react";
import {View} from 'react-native';
import { Container,Content,Fab, Card, CardItem, Icon,IconNB,Text, Body,Button} from "native-base";
import * as Progress from 'react-native-progress';

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
    <Container>
      <Content padder >
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
        {/*Recommendtation cards*/}
        <Card>
          <CardItem>
            <Body style={styles.flexRow}>
               <Text style={{fontWeight:'bold'}}>We have some recommendation for you </Text>
            </Body>
          </CardItem>
          </Card>

        <Card>
          <CardItem>
            <Body style={styles.flexRow}>
            <Icon name="paper" style={{marginRight:5}} />
              <Text style={{flex:1,fontWeight:'bold'}}>Walk 5 kms per day</Text>
              <Icon name="paper" style={{marginRight:5}}/>
              <Text>2/8</Text>

            </Body>
          </CardItem>
          <CardItem>
            <Body>
            <Progress.Bar progress={50}  color={"#dc3545"} unfilledColor={'red'} />
            </Body>
          </CardItem>
          <CardItem>
            <Body  style={styles.flexRow}>
              <Text style={{flex:1}}>Last Updated: 2:45 PM</Text>
              <Icon name="paper" style={{marginRight:5}}/>
              <Text style={{marginRight:5}}>3000</Text>
              <Icon name="paper"/>
            </Body>
          </CardItem>
        </Card>

          <Card>
          <CardItem>
            <Body style={styles.flexRow}>
            <Icon name="paper" style={{marginRight:5}} />
              <Text style={{flex:1,fontWeight:'bold'}}>Save $5000 for a month</Text>
              <Icon name="paper" style={{marginRight:5}}/>
              <Text>15/30</Text>

            </Body>
          </CardItem>
          <CardItem>
            <Body>
            <Progress.Bar progress={300}  color={"#ffc107"} unfilledColor={'red'} />
            </Body>
          </CardItem>
          <CardItem>
            <Body  style={styles.flexRow}>
              <Text style={{flex:1}}>Last Updated : Yesterday</Text>
              <Icon name="paper" style={{marginRight:5}}/>
              <Text style={{marginRight:5}}>4000</Text>
              <Icon name="paper"/>
            </Body>
          </CardItem>
        </Card>

          <Card>
          <CardItem>
            <Body style={styles.flexRow}>
            <Icon name="paper" style={{marginRight:5}} />
              <Text style={{flex:1,fontWeight:'bold'}}>Guided Breathing Exercise</Text>
              <Icon name="paper" style={{marginRight:5}}/>
              <Text>20/30</Text>

            </Body>
          </CardItem>
          <CardItem>
            <Body>
            <Progress.Bar progress={500}  color={"#28a745"} unfilledColor={'red'} />
            </Body>
          </CardItem>
          <CardItem>
            <Body  style={styles.flexRow}>
              <Text style={{flex:1}}>Last Updated: 12 Jun 2018</Text>
              <Icon name="paper" style={{marginRight:5}}/>
              <Text style={{marginRight:5}}>300</Text>
              <Icon name="paper"/>
            </Body>
          </CardItem>
        </Card>

      </Content>
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
            </Container>
    );
  }
}

