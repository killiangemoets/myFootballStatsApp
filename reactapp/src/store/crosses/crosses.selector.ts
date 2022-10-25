import { createSelector } from "reselect";
import { RootState } from "../store";
import { CrossesState } from "./crosses.reducer";

const selectCrossesReducer = (state: RootState): CrossesState => {
  return state.crosses;
};

export const selectCrossesIsLoading = createSelector(
  [selectCrossesReducer],
  (crossesSlice) => crossesSlice.isLoading
);

export const selectCrosses = createSelector(
  [selectCrossesReducer],
  (crossesSlice) => crossesSlice.crosses
);
