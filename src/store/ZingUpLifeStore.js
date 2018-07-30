import { createStore, combineReducers } from 'redux';
import AssessmentReducer from './reducers/AssessmentReducer';
import TutorialReducer from './reducers/TutorialReducer';
import ZulaReducer from './reducers/ZulaReducer';
import RewardReducer from './reducers/RewardReducer';
import CommentReducer from './reducers/CommentReducer';
import DashboardReducer from './reducers/DashboardReducer';

const ZingUpLifeReducers = combineReducers({
    Assessment: AssessmentReducer,
    Tutorial: TutorialReducer,
    Zula: ZulaReducer,
    Reward: RewardReducer,
    Comment: CommentReducer,
    Dashboard: DashboardReducer
});

const ZingUpLifeStore = createStore(ZingUpLifeReducers);

export default ZingUpLifeStore;