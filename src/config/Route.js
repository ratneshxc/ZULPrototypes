import React from 'react';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Dashboard from '../components/dashboard/Dashboard';
import Calendar from '../components/Calendar/Calendar';
import Community from '../components/community/Community';
import SpecialitiyConnect from '../components/expertconnect/ExpertSpecialityConnect';
import ExpertList from '../components/expertconnect/ExpertConnect';
import ExpertProfile from '../components/expertconnect/ExpertProfile';
import AssessmentLayout from '../components/assessment/AssessmentSummaryLayout';
import Booking from '../components/expertconnect/Booking';
import BookingConfirmation from '../components/expertconnect/BookingConfirmation';
import AppointmentList from '../components/expertconnect/AppointmentList';
import Goals from '../components/goals/Goals';
import AddGoal from '../components/goals/AddGoal';
import YourGoal from '../components/goals/YourGoal';
import GoalStatus from '../components/goals/GoalStatus';
import AddActivity from '../components/goals/AddActivity';
import Vitals from '../components/assessment/vitals/Vitals';
import AssessmentList from '../components/assessment/wellnessTests/AssessmentList';
import AssessmentInfo from '../components/assessment/AssessmentInfo';
import Assessment from '../components/assessment/Assessment';
import AssessmentReport from '../components/report/assessmentReports/AssessmentReport';
import LogIn from '../components/login/Login';
import Register from '../components/register/Register';
import Notification from '../components/notifications/Notifications';
import AppIntro from '../components/taketour/AppIntro';
import LandingComponent from '../components/taketour/LandingComponent';

import store from '../store/ZingUpLifeStore';

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

const NotificationApp = createStackNavigator({
  TabRoute: {
    screen: TabRoute,
    navigationOptions: {
      header: null
    }
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      title: 'Notifications'
    }
  }
},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3f51b5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  })



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
  },
  AssessmentReportStack: {
    screen: AssessmentReport,
    navigationOptions: ({ navigation }) => {
      return {
        title: `${navigation.getParam('title', '')} Report`,
      };
    }
  }
},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3f51b5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  })

const AssessmentReportSwitch = createStackNavigator({
  AssessmentReport: {
    screen: AssessmentReport,
    navigationOptions: ({ navigation }) => {
      return {
        title: `${store.getState().Assessment.currentAssessment} Report`,
      };
    }
  }
},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3f51b5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  });

const WellnessSwitch = createSwitchNavigator({
  WellnessStack: {
    screen: WellnessStack
  },
  Assessment: {
    screen: Assessment
  },
  AssessmentReport: {
    screen: AssessmentReportSwitch
  }
})

const ExpertStack = createStackNavigator({
  SpecialitiyConnect: {
    screen: SpecialitiyConnect,
    navigationOptions: {
      header: null
    }
  },
  ExpertList: {
    screen: ExpertList,
    navigationOptions: {
      header: null
    }
  },
  Booking: {
    screen: Booking,
    navigationOptions: {
      header: null
    }
  },
  BookingConfirmation: {
    screen: BookingConfirmation,
    navigationOptions: {
      header: null
    }
  },
  AppointmentList: {
    screen: AppointmentList,
    navigationOptions: {
      header: null
    }
  },
  ExpertProfile: {
    screen: ExpertProfile,
    navigationOptions: {
      header: null
    }
  }
},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3f51b5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  })


const GoalStack = createStackNavigator({
  Goals: {
    screen: Goals,
    navigationOptions: {
      header: null
    }
  },
  AddGoal: {
    screen: AddGoal,
    navigationOptions: {
      title: 'Choose your goal'
    }
  },
  YourGoal: {
    screen: YourGoal,
    navigationOptions: {
      title: 'Your Goal'
    }
  },
  GoalStatus: {
    screen: GoalStatus,
    navigationOptions: {
      title: 'Run 2km Daily'
    }
  },
  AddActivity: {
    screen: AddActivity,
    navigationOptions: {
      title: 'Select an activity'
    }
  }
},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3f51b5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  })

const MainApp = createDrawerNavigator({
  LandingTab: {
    screen: NotificationApp,
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
      title: 'Wellness',
      drawerIcon: ({ focused, tintColor }) => {
        const iconName = `adjust${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  Goals: {
    screen: GoalStack,
    navigationOptions: {
      title: 'Goals',
      drawerIcon: ({ focused, tintColor }) => {
        const iconName = `bullseye${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  ExpertConnect: {
    screen: ExpertStack,
    navigationOptions: {
      title: 'Connect with Experts',
      drawerIcon: ({ focused, tintColor }) => {
        const iconName = `plug${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  SignOut: {
    screen: LandingComponent,
    navigationOptions: {
      title: 'Sign Out',
      drawerIcon: ({ focused, tintColor }) => {
        const iconName = `sign-out${focused ? '' : ''}`;
        return <FontIcon name={iconName} size={25} color={tintColor} />;
      }
    }
  }
});

const AppRoute = createSwitchNavigator({
  AppIntro: { screen: AppIntro },
  LandingComponent: { screen: LandingComponent },
  LogIn: { screen: LogIn },
  Register: { screen: Register },
  MainApp: { screen: MainApp }
});


export default AppRoute;