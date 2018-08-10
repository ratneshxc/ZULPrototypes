import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Badge, Text, Button, Icon } from 'native-base';
import IconBadge from 'react-native-icon-badge';
import { createBottomTabNavigator } from 'react-navigation';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel';

import Dashboard from '../dashboard/Dashboard';
import ExpertConnect from '../expertconnect/screens/ExpertConnect';
import Goals from '../goals/Goals';
import Community from '../community/Community';
import Notifications from '../notifications/Notifications';

const drawer = null;

const closeControlPanel = () => {
  drawer.close()
};
const openControlPanel = () => {
  drawer.open()
};

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
}

export default class LandingTab extends React.Component {
  goAssessmentInfo = () => {
    this.props.navigation.navigate('AssessmentInfo');
  }
  filterList = () => {
    this.props.navigation.navigate('ExpertFilter');
  }
  goToScreen = (screenName) => {
    this.props.navigation.navigate(screenName);
  }
  render() {
    return (
      <Drawer
        ref={(ref) => drawer = ref}
        type="overlay"
        content={<ControlPanel closeDrawer={closeControlPanel} goToScreen={this.goToScreen} />}
        tapToClose={true}
        openDrawerOffset={0.3} // 20% gap on the right side of drawer
        panCloseMask={0.3}
        closedDrawerOffset={-3}
        styles={drawerStyles}
      >
        <TabRoute screenProps={{ OpenDrawer: openControlPanel, goToScreen: this.goToScreen, goAssessmentInfo: this.goAssessmentInfo, filterList: this.filterList }} />
      </Drawer>
    );
  }
}


const TabRoute = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `home${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  Goals: {
    screen: Goals,
    navigationOptions: {
      title: 'Goals',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `bullseye${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  Community: {
    screen: Community,
    navigationOptions: {
      title: 'Community',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `comments${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  ExpertConnect: {
    screen: ExpertConnect,
    navigationOptions: {
      title: 'Expert',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `users${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notifications',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `bell${focused ? '' : ''}`;
        return (
          <IconBadge
            MainElement={<FontIcon name={iconName} size={25} color={tintColor} />}
            BadgeElement={<Text style={{ color: 'white' }}>3</Text>}
            IconBadgeStyle={{ left: 15, top: -10 }}
          />
        );
      }
    }
  }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#5067FF',
      inactiveTintColor: '#000000',
      inactiveBackgroundColor: '#ffffff',
      activeBackgroundColor: '#ffffff',
      labelStyle: {
        fontSize: 10,
        paddingBottom: 3,
      },
      style: {
        backgroundColor: '#ffffff',
      },
      showLabel: false
    },
    showIcon: true,
    swipeEnabled: false
  }, )