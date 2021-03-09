import { combineReducers } from "redux";
import listData from "./listData";
const rootReducer = combineReducers({
  listData: listData,
});
export default rootReducer;
