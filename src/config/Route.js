import {
    createSwitchNavigator,
  } from 'react-navigation';
  import Login from '../components/login/Login';
  import Assessment from '../components/assessment/Assessment';
  
  const AppRoute = createSwitchNavigator({
    Login: { screen: Login },
    Assessment: { screen: Assessment }
  });
  
  export default AppRoute;