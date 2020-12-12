import { combineReducers } from "redux"
import { donations } from "./donations"
// import { dashboardData } from "./dashboardReducer"

const homePageReducers = combineReducers({
  donations,
//   dashboardData,
})

export default homePageReducers;
