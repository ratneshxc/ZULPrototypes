import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import AssessmentReducer from './reducers/AssessmentReducer';
import TutorialReducer from './reducers/TutorialReducer';
import ZulaReducer from './reducers/ZulaReducer';
import RewardReducer from './reducers/RewardReducer';
import CommentReducer from './reducers/CommentReducer';
import DashboardReducer from './reducers/DashboardReducer';
import ReportReducer from './reducers/ReportReducer';
import NotificationReducer from './reducers/NotificationReducer';

const middleware = applyMiddleware(logger, thunk, promise())

const ZingUpLifeReducers = combineReducers({
    Assessment: AssessmentReducer,
    Tutorial: TutorialReducer,
    Zula: ZulaReducer,
    Reward: RewardReducer,
    Comment: CommentReducer,
    Dashboard: DashboardReducer,
    Report: ReportReducer,
    Notification: NotificationReducer
}, middleware);

const ZingUpLifeStore = createStore(ZingUpLifeReducers);

export default ZingUpLifeStore;