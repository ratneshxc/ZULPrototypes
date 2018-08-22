import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Login from '../components/login/Login';
import Assessment from '../components/assessment/Assessment';
import Register from '../components/register/Register';
import AssessmentInfo from '../components/assessment/AssessmentInfo';
import AssessmentReport from '../components/report/AssessmentReport';
import LandingTab from '../components/landingtabs/LandingTabs';
import ExpertFilter from '../components/expertconnect/screens/ExpertFilter';
import AssessmentLayout from '../components/assessment/assessmentSummary/AssessmentSummaryLayout';
import ConfigurableStatusLayout from '../components/dashboard/status/ConfigurableStatusLayout';
import IndicatorDetails from '../components/dashboard/status/indicatorDetails/IndicatorDetails';


// const AppRoute = createSwitchNavigator({
//   Login: { screen: Login },
//   Assessment: { screen: Assessment },
//   Register: { screen: Register },
//   Home: { screen: LandingTab },
//   AssessmentReport: { screen: AssessmentReport }
// });
const Dashboard = createStackNavigator({
  Home: {
    screen: LandingTab,
    navigationOptions: () => ({
      header: null
    }),
  },
  Indicators: {
    screen: ConfigurableStatusLayout,
    navigationOptions: () => ({
      title: 'Indicators'
    })
  },
  IndicatorDetails: {
    screen: IndicatorDetails,
    navigationOptions: () => ({
      title: 'Steps'
    })
  }
})

const AppRoute = createSwitchNavigator({
  Home: { screen: Dashboard },
  Login: { screen: Login },
  Assessment: { screen: Assessment },
  Register: { screen: Register },
  AssessmentReport: { screen: AssessmentReport },
  AssessmentInfo: { screen: AssessmentInfo },
  ExpertFilter: { screen: ExpertFilter },
  AssessmentLayout: { screen: AssessmentLayout }
});




export default AppRoute;