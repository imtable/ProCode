import { combineReducers } from "redux";

import planetsReducer from "./planets";

export default function createReducer(injectReducers = {}) {

  const rootReducer = combineReducers({
    planets: planetsReducer,

    //  ...unjectReducers
  });

  return rootReducer;
}