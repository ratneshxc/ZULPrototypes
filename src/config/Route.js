import React from 'react'
import {
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Login from '../components/login/Login';
import Assessment from '../components/assessment/Assessment';
import Register from '../components/register/Register';
import Dashboard from '../components/dashboard/Dashboard';
import ExpertConnect from '../components/expertconnect/ExpertConnect';


const TabRoute = createBottomTabNavigator({
  Dashboard: Dashboard,
  ExpertConnect: ExpertConnect,
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return null;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });


const AppRoute = createSwitchNavigator({
  // Login: { screen: Login },
  // Assessment: { screen: Assessment },
  // Register: { screen: Register },
  Home: { screen: TabRoute }
});


export default AppRoute;