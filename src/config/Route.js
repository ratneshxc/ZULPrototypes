import React from 'react'
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from '../components/login/Login';
import Assessment from '../components/assessment/Assessment';
import Register from '../components/register/Register';
import Dashboard from '../components/dashboard/Dashboard';
import ExpertConnect from '../components/expertconnect/screens/ExpertConnect';
import AssessmentReport from '../components/report/AssessmentReport';
import Goals from '../components/goals/Goals';
import Community from '../components/community/Community';
import History from '../components/history/History';

const TabRoute = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Today',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `home${focused ? '' : ''}`;
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  Goals: {
    screen: Goals,
    navigationOptions: {
      title: 'Goals',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `home${focused ? '' : ''}`;
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  Community: {
    screen: Community,
    navigationOptions: {
      title: 'Community',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `home${focused ? '' : ''}`;
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  ExpertConnect: {
    screen: ExpertConnect,
    navigationOptions: {
      title: 'Expert',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `home${focused ? '' : ''}`;
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      title: 'History',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `home${focused ? '' : ''}`;
        return <Icon name={iconName} size={25} color={tintColor} />;
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
    },
    showIcon: true,
    swipeEnabled: false,
  }, )

// const AppRoute = createSwitchNavigator({
//   Login: { screen: Login },
//   Assessment: { screen: Assessment },
//   Register: { screen: Register },
//   Home: { screen: TabRoute },
//   AssessmentReport: { screen: AssessmentReport }
// });

const AppRoute = createSwitchNavigator({
  Home: { screen: TabRoute },
  Login: { screen: Login },
  Assessment: { screen: Assessment },
  Register: { screen: Register },
  AssessmentReport: { screen: AssessmentReport }
});


export default AppRoute;