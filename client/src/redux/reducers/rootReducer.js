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
<<<<<<< HEAD
import donations from "./donations/"

=======
import aidRequest from "./askForAid/" 
>>>>>>> d22bdfcc7bb6600a2b6a4e38f0d1446890fb1eaf
const rootReducer = combineReducers({
  // calendar: calenderReducer,
  // emailApp: emailReducer,
  // todoApp: todoReducer,
  // chatApp: chatReducer,
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  dataList: dataList,
  home: home, 
<<<<<<< HEAD
  donations: donations
=======
  aidRequest: aidRequest,
>>>>>>> d22bdfcc7bb6600a2b6a4e38f0d1446890fb1eaf
});

export default rootReducer;
