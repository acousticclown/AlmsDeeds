import { combineReducers } from "redux"
import { aidData } from "./aidReducer"
import { dashboardData } from "./dashboardReducer"

const homePageReducers = combineReducers({
  aidData,
  dashboardData,
})

export default homePageReducers;
