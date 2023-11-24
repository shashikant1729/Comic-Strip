import { combineReducers } from 'redux';
import data from './data';

const rootReducer = combineReducers({
    data,
  // You can add more reducers here for other parts of your state.
});

export default rootReducer;