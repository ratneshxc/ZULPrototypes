import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Dashboard from '../dashboard/Dashboard';
import ExpertConnect from '../expertconnect/screens/ExpertConnect';
import Goals from '../goals/Goals';
import Community from '../community/Community';
import AssessmentSummayLayout from '../assessment/assessmentSummary/AssessmentSummaryLayout';




export default class LandingTab extends React.Component{
    goAssessmentInfo = () => {
        this.props.navigation.navigate('AssessmentInfo');
      }
      
    render(){
        return(<TabRoute  screenProps={{goAssessmentInfo:this.goAssessmentInfo}}/>);
    }
}


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
          const iconName = `bullseye${focused ? '' : ''}`;
          return <Icon name={iconName} size={25} color={tintColor} />;
        }
      }
    },
    Community: {
      screen: Community,
      navigationOptions: {
        title: 'Community',
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `comments${focused ? '' : ''}`;
          return <Icon name={iconName} size={25} color={tintColor} />;
        }
      }
    },
    ExpertConnect: {
      screen: ExpertConnect,
      navigationOptions: {
        title: 'Expert',
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `users${focused ? '' : ''}`;
          return <Icon name={iconName} size={25} color={tintColor} />;
        }
      }
    },
    Assessment: {
      screen: AssessmentSummayLayout,
      navigationOptions: {
        title: 'Assessments',
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `file${focused ? '' : ''}`;
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