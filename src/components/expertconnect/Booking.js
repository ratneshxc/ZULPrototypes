import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Accordion,
  Text,
  View
} from "native-base";
const AppointmentDetails = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  ];
  const PerosnelDetails=[
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  ]
export default class Booking extends Component {
    _renderHeader(dataArray, expanded) {
        return (
          <View
            style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#A9DAD6" }}
          >
            <Text style={{ fontWeight: "600" }}>
              {" "}{dataArray.title}
            </Text>
            {expanded
              ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
              : <Icon style={{ fontSize: 18 }} name="add-circle" />}
          </View>
        );
      }
      _renderContent(dataArray) {
        return (
          <Text
            style={{ backgroundColor: "#e3f1f1", padding: 10, fontStyle: "italic" }}
          >
            {dataArray.content}
          </Text>
        );
      }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Booking</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content padder style={{ backgroundColor: "white" }}>
                    <Accordion
                        dataArray={AppointmentDetails}
                        animation={true}
                        expanded={0}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                       <Accordion
                        dataArray={PerosnelDetails}
                        animation={true}
                        expanded={0}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                </Content>
            </Container>
        )
    }
}


