import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/index';
import {convertBlobToDataURL} from '../Actions/dataAction';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;