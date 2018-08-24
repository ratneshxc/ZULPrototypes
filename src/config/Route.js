import React from 'react';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Dashboard from '../components/dashboard/Dashboard';
import Calendar from '../components/Calendar/Calendar';
import Community from '../components/community/Community';
import ExportConnect from '../components/expertconnect/ExpertConnect';
import AssessmentLayout from '../components/assessment/AssessmentSummaryLayout';
import Goals from '../components/goals/Goals';
import Vitals from '../components/assessment/vitals/Vitals';
import AssessmentList from '../components/assessment/wellnessTests/AssessmentList';
import AssessmentInfo from '../components/assessment/AssessmentInfo';
import Assessment from '../components/assessment/Assessment';
import AssessmentReport from '../components/report/assessmentReports/AssessmentReport';


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


const WellnessStack = createStackNavigator({
  AssessmentLayout: {
    screen: AssessmentLayout,
    navigationOptions: {
      header: null
    }
  },
  Vitals: {
    screen: Vitals,
    navigationOptions: {
      title: 'Vitals'
    }
  },
  AssessmentList: {
    screen: AssessmentList,
    navigationOptions: {
      title: 'Assessments'
    }
  },
  AssessmentInfo: {
    screen: AssessmentInfo,
    navigationOptions: {
      title: 'Introduction'
    }
  }
})

const WellnessSwitch = createSwitchNavigator({
  WellnessStack: {
    screen: WellnessStack
  },
  Assessment: {
    screen: Assessment
  },
  AssessmentReport: {
    screen: AssessmentReport
  }
})

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
    screen: WellnessSwitch,
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
  MainApp: { screen: AssessmentReport },
});


export default AppRoute;