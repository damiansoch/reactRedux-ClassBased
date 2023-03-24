import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import ActiveUserReducer from './ActiveUserReducer';

const allReducers = combineReducers({
  users: UsersReducer,
  user: ActiveUserReducer,
});
export default allReducers;
