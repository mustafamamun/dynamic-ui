import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import windowSize, { REDUCER_KEY } from 'redux-windowsize';
import categories from './categories';
// main reducers
export const reducers = combineReducers({
    [REDUCER_KEY]: windowSize,
    routing: routerReducer,
    categories : categories
});
