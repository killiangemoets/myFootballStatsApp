import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import { Dispatch } from "react";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch | Dispatch<any>;
