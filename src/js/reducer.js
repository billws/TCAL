import { combineReducers } from 'redux'

import calReducer from "./app/reducers/calreducer";

const rootReducer = combineReducers({
  calculator: calReducer
})

export default rootReducer
