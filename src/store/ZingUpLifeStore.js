import { createStore, combineReducers } from 'redux';
import AssessmentReducer from './reducers/AssessmentReducer';
import TutorialReducer from './reducers/TutorialReducer';
import ZulaReducer from './reducers/ZulaReducer';
import RewardReducer from './reducers/RewardReducer';
import CommentReducer from './reducers/CommentReducer';

const ZingUpLifeReducers = combineReducers({
    Assessment: AssessmentReducer,
    Tutorial: TutorialReducer,
    Zula: ZulaReducer,
    Reward: RewardReducer,
    Comment: CommentReducer
});

const ZingUpLifeStore = createStore(ZingUpLifeReducers);

export default ZingUpLifeStore;