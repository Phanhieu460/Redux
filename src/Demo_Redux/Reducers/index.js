import { combineReducers } from "redux";
import account from "./account";

const rootReducer = combineReducers({
  account: account,
});
export default rootReducer;
