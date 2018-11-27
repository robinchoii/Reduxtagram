import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for default data
const defaultState = {
    posts,
    comments
}

// create the create
const store = createStore(rootReducer, defaultState);

// syncs browser history with the store
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
