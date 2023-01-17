import {applyMiddleware, createStore} from 'redux';
import Reducer from '../Reducer/Reducer';
import thunk from 'redux-thunk'
const store = createStore(Reducer, applyMiddleware(thunk));

export default store