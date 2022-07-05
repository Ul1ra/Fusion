import {applyMiddleware, createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
import { tokenReducer } from "./reducers/reducers.js"
import { restaurantReducer } from "./reducers/restaurantreducer.js"
import { profileReducer } from "./reducers/profilereducer.js"
import { reviewsReducer } from "./reducers/reviewsreducer.js"
import { usersReducer } from "./reducers/usersreducer.js"

const middlewares = applyMiddleware(thunk)

const reducer = combineReducers({
  tokenReducer,
  restaurantReducer,
  profileReducer,
  reviewsReducer,
  usersReducer,
})

export const store = createStore(reducer,middlewares);
