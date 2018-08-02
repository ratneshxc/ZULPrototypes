import React from 'react'
import { createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from '../components/login/Login';
import Assessment from '../components/assessment/Assessment';
import Register from '../components/register/Register';

//import Book from '../components/expertconnect/booking/Book';
import AssessmentInfo from '../components/assessment/AssessmentInfo';

import AssessmentReport from '../components/report/AssessmentReport';
import LandingTab from '../components/landingtabs/LandingTabs';


// const AppRoute = createSwitchNavigator({
//   Login: { screen: Login },
//   Assessment: { screen: Assessment },
//   Register: { screen: Register },
//   Home: { screen: TabRoute },
//   ExpertFilter:{screen:ExpertFilter}, 
//   AssessmentReport: { screen: AssessmentReport }
// });

// const AppRoute = createSwitchNavigator({
//   Login: { screen: Login },
//   Assessment: { screen: Assessment },
//   Register: { screen: Register },
//   Home: { screen: TabRoute },
//   AssessmentReport: { screen: AssessmentReport }
// });

// const AppRoute = createSwitchNavigator({
//   Home: { screen: TabRoute },
//   Login: { screen: Login },
//   Assessment: { screen: Assessment },
//   Register: { screen: Register },
//   AssessmentReport: { screen: AssessmentReport }
// });

const AppRoute = createSwitchNavigator({
  Home: { screen: LandingTab },
  Login: { screen: Login },
  Assessment: { screen: Assessment },
  Register: { screen: Register },
  AssessmentReport: { screen: AssessmentReport },
  AssessmentInfo: { screen: AssessmentInfo }
});


export default AppRoute;