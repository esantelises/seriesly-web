import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import serieslyApp from './reducers';

const configureStore = () => {
  const middlewares = [thunk];

  return createStore(
    serieslyApp,
    applyMiddleware(...middlewares),
  );
};

export default configureStore;
