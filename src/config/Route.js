import {
    createSwitchNavigator,
  } from 'react-navigation';
  import Login from '../components/login/Login';
  import Assessment from '../components/assessment/Assessment';
  import Register from '../components/register/Register';
  const AppRoute = createSwitchNavigator({
    Login: { screen: Login },
    Assessment: { screen: Assessment },
    Register: { screen: Register },
  });
  
  export default AppRoute;