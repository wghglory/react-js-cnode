import { combineReducers, createStore } from 'redux';

import topics from './reducer/topics';
import topic from './reducer/topic';

const store = createStore(combineReducers({ topics, topic }));

export default store;
