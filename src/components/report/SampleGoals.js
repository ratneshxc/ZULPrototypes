import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { Card } from "react-native-elements";

const data = [
  {
    imageUrl: "https://placebeyonce.com/160-160",
    title: "Anuradha B",
    desc:"Dietian"
  },
  {
    imageUrl: "https://www.stevensegallery.com/160/160",
    title: "Apurv Adarsh",
    desc:"Dietian"
  },
  {
    imageUrl: "https://www.fillmurray.com/160/160",
    title: "Steven",
    desc:"Dietian"
  },
  {
    imageUrl: "https://placebeyonce.com/160-160",
    title: "Varsha K",
    desc:"Dietian"
  },
  {
    imageUrl: "https://www.fillmurray.com/160/160",
    title: "Rajnikant Kumar",
    desc:"Dietian"
  },
  {
    imageUrl: "https://placebeyonce.com/160-160",
    title: "Chandni H",
    desc:"Dietian"
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
              title={null}
              image={{ uri: rowData.imageUrl }}
              containerStyle={{ padding: 0, width: 160 }}
            >
              <Text>
                {rowData.title}
              </Text>
              <Text style={{ marginBottom: 10 }}>
                {rowData.desc}
              </Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    );
  }
}