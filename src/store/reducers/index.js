import { combineReducers } from 'redux';

import articles from './articles';
import locations from './locations'

const rootReducer = combineReducers({
  articles,
  locations
});

export default rootReducer;