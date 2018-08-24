import React from 'react';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import Dashboard from '../components/dashboard/Dashboard';
import Calendar from '../components/Calendar/Calendar';
import Community from '../components/community/Community';
import ExportConnect from '../components/expertconnect/ExpertConnect';
import AssessmentLayout from '../components/assessment/AssessmentSummaryLayout';
import Goals from '../components/goals/Goals';
import AddGoal from '../components/goals/AddGoal';
import YourGoal from '../components/goals/YourGoal';
import GoalStatus from '../components/goals/GoalStatus';


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
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      title: 'Calendar',
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `calendar${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
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


const MainApp = createDrawerNavigator({
  LandingTab: {
    screen: TabRoute,
    navigationOptions: {
      title: 'Home',
      drawerIcon: ({ focused, tintColor }) => {
        const iconName = `home${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  AssessmentLayout: {
    screen: AssessmentLayout,
    navigationOptions: {
      title: 'Check your wellness',
      drawerIcon: ({ focused, tintColor }) => {
        const iconName = `adjust${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  Goals: {
    screen: Goals,
    navigationOptions: {
      title: 'Goals',
      drawerIcon: ({ focused, tintColor }) => {
        const iconName = `bullseye${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  ExportConnect: {
    screen: ExportConnect,
    navigationOptions: {
      title: 'Connect with Experts',
      drawerIcon: ({ focused, tintColor }) => {
        const iconName = `users${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  }
});


const AppRoute = createSwitchNavigator({
  MainApp: { screen: MainApp },
});


export default AppRoute;