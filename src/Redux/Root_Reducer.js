import { combineReducers } from "redux";
import { DataReduce } from "./AllDatas/AllData";
import NavReducer from "./NavReduce/NavReduce";
import Current_User from "./UserReducer/UserReducer";
import CardReducer from "./CrdReducer/CardReducer";
const RootReducer = combineReducers({
  Data: DataReduce,
  Navbar: NavReducer,
  User: Current_User,
  Card: CardReducer,
});
export default RootReducer;
