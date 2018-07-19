import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  Right,
  Left,
  Body,
  TabHeading
} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";

class ConfigTab extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>YOUR INSIGHTS</Title>
          </Body>
          <Right />
        </Header>
        <Tabs style={{ elevation: 3 }}>
          <Tab
            heading={
              <TabHeading>
                <Text>YOUR STATS</Text>
              </TabHeading>
            }
          >
            <TabOne />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>DASHBOARD</Text>
              </TabHeading>
            }
          >
            <TabTwo />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ConfigTab;
