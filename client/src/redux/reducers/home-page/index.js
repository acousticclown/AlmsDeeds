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

const homePageReducers = combineReducers({
  aidData,
})

export default homePageReducers;
