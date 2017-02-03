import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import stock from './model/stock/stockReducer';

const reducers = combineReducers({
    stock,
    routing: routerReducer,
});

const store = createStore(reducers, applyMiddleware());

export default store;
