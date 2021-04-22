import { combineReducers } from 'redux';
import auth from '../navigation/redux/auth.reducer';

const appReducers = combineReducers({
  auth,
});
const rootReducer = (state, action) => {
  return appReducers(state, action);
};
export default rootReducer;