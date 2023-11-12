import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  employees: employeeReducer,
  // Add other reducers as needed
});

export default rootReducer;
