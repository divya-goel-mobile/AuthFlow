import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './rootReducer';

const initial_state = window.__REDUX_STATE__
  ? window.__REDUX_STATE__
  : undefined;

const composeByEnv = () => {
  return compose(applyMiddleware(thunk));
};

const store = createStore(reducers, initial_state, composeByEnv());

export default store;