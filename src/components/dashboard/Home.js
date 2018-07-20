import React, { Component } from 'react';
import { Text,View } from 'native-base';
import Tabbar from 'react-native-tabbar-bottom'
import {StyleSheet,ScrollView} from 'react-native'
import Daily from './Daily';

export default class exampleTabs extends Component {
  constructor() {
    super()
    this.state = {
      page: "HomeScreen",
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {
          // if you are using react-navigation just pass the navigation object in your components like this:
          // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
        }
        {this.state.page === "HomeScreen" && <ScrollView><Daily /></ScrollView>}
        {this.state.page === "NotificationScreen" && <Text>Screen2</Text>}
        {this.state.page === "ProfileScreen" && <Text>Screen3</Text>}


        <Tabbar
        type="ripple"
          rippleColor="#462E74"
          tabbarBgColor="#EEE"
          iconColor="#444"
          selectedIconColor="#245080"
          labelColor="#444"
          selectedLabelColor="#462E74"
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            //this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "HomeScreen",
              icon: "home",
              iconText:"Home",
              
            },
            {
              page: "NotificationScreen",
              icon: "md-stats",
              iconText:"Reports",
              
            },
            {
              page: "ProfileScreen",
              icon: "settings",
              iconText:"Settings",
              
            },
           
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});