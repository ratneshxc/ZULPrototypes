import { createStore, combineReducers } from 'redux';
import AssessmentReducer from './reducers/AssessmentReducer';

const ZingUpLifeReducers = combineReducers({
    Assessment: AssessmentReducer
});

const ZingUpLifeStore = createStore(ZingUpLifeReducers);

export default ZingUpLifeStore;