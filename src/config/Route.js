import {
    createSwitchNavigator,
  } from 'react-navigation';
  import Login from '../components/login/Login';
  import Assessment from '../components/assessment/Assessment';
  import Dashboard from "../components/dashboard/Dashboard";
  
  const AppRoute = createSwitchNavigator({
    Login: { screen: Login },
    Assessment: { screen: Assessment },
    Dashboard:{screen: Dashboard}
  });
  
  export default AppRoute;