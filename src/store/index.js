import { combineReducers, createStore } from 'redux';

import { topics, topic, user } from './reducer';

const store = createStore(combineReducers({ topics, topic, user }));

export default store;
