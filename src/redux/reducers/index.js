import { combineReducers } from 'redux';
import authReducer from "./authSlice.js";
import userReducer from "./userSlice.js";
import errorReducer from "./ErrorSlice.js"

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  error: errorReducer,
  
});

export default rootReducer;