import { combineReducers } from "redux";
import { crossesReducer } from "./crosses/crosses.reducer";

import { inputValuesReducer } from "./inputValues/inputValues.reducer";

export const rootReducer = combineReducers({
  inputValues: inputValuesReducer,
  crosses: crossesReducer,
});
