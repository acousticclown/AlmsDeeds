import { combineReducers } from "redux"
import { donations } from "./donations"
import { recentDonations } from "./recentDonations"
import { donators } from "./donators"

const homePageReducers = combineReducers({
  donations,
  recentDonations,
  donators
})

export default homePageReducers;
