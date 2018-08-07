import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Login from '../components/login/Login';
import Assessment from '../components/assessment/Assessment';
import Register from '../components/register/Register';
import AssessmentInfo from '../components/assessment/AssessmentInfo';
import AssessmentReport from '../components/report/AssessmentReport';
import LandingTab from '../components/landingtabs/LandingTabs';
import ExpertFilter from '../components/expertconnect/screens/ExpertFilter';
import AssessmentLayout from '../components/assessment/assessmentSummary/AssessmentSummaryLayout';


// const AppRoute = createSwitchNavigator({
//   Login: { screen: Login },
//   Assessment: { screen: Assessment },
//   Register: { screen: Register },
//   Home: { screen: LandingTab },
//   AssessmentReport: { screen: AssessmentReport }
// });


const AppRoute = createSwitchNavigator({
  
  Home: { screen: LandingTab },
  Login: { screen: Login },
  Assessment: { screen: Assessment },
  Register: { screen: Register },
  AssessmentReport: { screen: AssessmentReport },
  AssessmentInfo: { screen: AssessmentInfo },
  ExpertFilter:{screen:ExpertFilter},
  AssessmentLayout:{screen:AssessmentLayout}
});


export default AppRoute;