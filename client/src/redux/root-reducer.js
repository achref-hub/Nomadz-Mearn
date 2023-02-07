import {combineReducers} from 'redux';
import projectsReducers from './reducers';

const rootReducer = combineReducers({
    data : projectsReducers,

});

export default rootReducer;