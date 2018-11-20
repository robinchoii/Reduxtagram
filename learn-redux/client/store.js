import { createStore, compose } from 'redux';
import {syncHistoryWithStore } from 'react-router-redux';
import { browswerHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


// create an object forr the default data

const defaultState = {
    posts,
    commments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browswerHistory, store);

export default store;
