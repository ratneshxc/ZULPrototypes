import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground } from 'react-native';

import {Card, CardItem, Container, Header, Body, Left, Button, Icon, Right, Title, Content } from 'native-base';
//import { BarChart } from 'react-native-charts';


const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;
const screenheight = windowObj.height / 3;


class GoalStatus extends Component {
    render() {
        return (
            <Container>
                 {/* {(Platform.OS === 'ios') ?
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Run 5km Daily</Title>
                        </Body>
                        <Right>
                        </Right>
                    </Header>
                    : <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{ color: 'white' }}>Run 5km Daily</Title>
                        </Body>
                        <Right>
                        </Right>
                    </Header>
                } */}
                <View>
                </View>
                <Content style={styles.container}>
                {/* <BarChart
  dataSets={[
    { 
      fillColor: '#46b3f7', 
      data: [
        { value: 15 },
        { value: 10 },
        { value: 12 },
        { value: 11 },
      ]
    },
    { 
      fillColor: '#3386b9', 
      data: [
        { value: 14 },
        { value: 11 },
        { value: 14 },
        { value: 13 },
      ]
    },
  ]}
  graduation={1}
  horizontal={false}
  showGrid={true}
  barSpacing={5}
  style={{
    height: 300,
    margin: 15,
  }}/> */}
                    {/* <View style={{ padding: 10, flex:1, flexDirection:'row'}}>
                        <Text style={{ fontSize:20, padding: 10 }}>Select a goal</Text>
                        <Icon active type="Entypo" name="flag" style={{ fontSize:30, top:5 }}/>
                    </View> */}
                    <View>
                        <Card style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <CardItem bordered>
                                <Icon active name="logo-googleplus" />
                                <Text>Practice self-disclosure</Text>
                                {/* <Right>
                                    <Icon name="arrow-forward" />
                                </Right> */}
                            </CardItem>
                            <CardItem bordered>
                                <Icon active />
                                <Text>Save your income tax</Text>
                                {/* <Right>
                                    <Icon name="arrow-forward" />
                                </Right> */}
                            </CardItem>
                            <CardItem bordered>
                                <Icon active type="MaterialCommunityIcons" name="run" />
                                <Text>Lose 6 kg weight</Text>
                                {/* <Right>
                                    <Icon name="arrow-forward" />
                                </Right> */}
                            </CardItem>
                            <CardItem bordered>
                                <Icon active name="logo-googleplus" />
                                <Text>Relieve stress and anger</Text>
                                {/* <Right>
                                    <Icon name="arrow-forward" />
                                </Right> */}
                            </CardItem>
                            <CardItem bordered>
                                <Text>Create your own</Text>
                                <Icon active type="EvilIcons" name="plus"/>
                                {/* <Right>
                                    <Icon name="arrow-forward" />
                                </Right> */}
                            </CardItem>
                        </Card>
                    </View>
                </Content>
               
            </Container>
        )
    }

}
const styles = StyleSheet.create({
    questionView: {
        margin: 30,
        backgroundColor: '#00000066',
        flex: 1,
        padding: 3,
        flexDirection: 'column',
        height: 50
    }
})
export default GoalStatus;
