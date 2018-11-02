import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import premier_league from "./reducer_premier_league"

const rootReducer = combineReducers({
  premier_league: premier_league
})

export default rootReducer
