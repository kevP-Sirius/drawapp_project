// https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';
import {appReducer} from '../store/reducer/appReducer';
import {drawGameReducer} from '../store/reducer/drawGameReducer';
const reducers = {
  appReducer,
  drawGameReducer
};

export default combineReducers(reducers);