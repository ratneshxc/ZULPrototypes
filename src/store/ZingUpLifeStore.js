import { createStore, combineReducers } from 'redux';
import AssessmentReducer from './reducers/AssessmentReducer';
import TutorialReducer from './reducers/TutorialReducer';

const ZingUpLifeReducers = combineReducers({
    Assessment: AssessmentReducer,
    Tutorial:TutorialReducer
});

const ZingUpLifeStore = createStore(ZingUpLifeReducers);

export default ZingUpLifeStore;