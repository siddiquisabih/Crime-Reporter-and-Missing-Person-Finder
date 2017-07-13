import { createStore, applyMiddleware , combineReducers} from "redux"
import thunk from "redux-thunk"
import Reducer from "../Store/Reducers/AuthReducer"
import CrimeReducer from "../Store/Reducers/CrimeReducer"
import PeopleReducer from "../Store/Reducers/PeopleReducer"

let allReducer = combineReducers({
  Reducer , 
  CrimeReducer,
  PeopleReducer
})
let middleware = applyMiddleware(thunk)
let store = createStore(allReducer, middleware)
store.subscribe(() => {
  console.log("store State", store.getState())
})

export default store