import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { FlightReducer } from "../features/admin/state/flights/reducer";
import { HotelReducer } from "../features/admin/state/hotels/reducer";
import { LoginReducer } from "../features/auth/state/auth.reducer.js";
import { StayReducer } from "../features/stays/state/reducer";

const rootReducer = combineReducers({
  FlightReducer,
  HotelReducer,
  LoginReducer,
  StayReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
