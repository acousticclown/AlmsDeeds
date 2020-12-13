import { combineReducers } from "redux";
// import calenderReducer from "./calendar/"
// import emailReducer from "./email/"
// import chatReducer from "./chat/"
// import todoReducer from "./todo/";
import customizer from "./customizer/";
import auth from "./auth/";
import navbar from "./navbar/Index";
import dataList from "./data-list/";
import home from "./home-page/"
import donations from "./donations/"

import aidRequest from "./askForAid/" 
const rootReducer = combineReducers({
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  dataList: dataList,
  home: home, 
  donations: donations,
  aidRequest: aidRequest,
});

export default rootReducer;
