// export const homePage = (state = { data: [], isLoading: false }, action) => {
//     switch (action.type) {
//       case "GET_AID_DATA": {
//         return { ...state, data: action.payload };
//       }
//       default: {
//         return state;
//       }
//     }
//   };

import { combineReducers } from "redux"
import { aidData } from "./aidReducer"
import { dashboardData } from "./dashboardReducer"

const homePageReducers = combineReducers({
  aidData,
  dashboardData,
})

export default homePageReducers;
