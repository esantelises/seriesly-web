import { combineReducers } from 'redux';
import movies from './movies';

const seriesly = combineReducers({
  movies,
});

export default seriesly;
