import { CrossesDipatchTypes } from "./crosses.action";
import { Cross, CROSSES_ACTION_TYPES } from "./crosses.type";

export type CrossesState = {
  readonly crosses: Cross[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CROSSES_INITIAL_STATE: CrossesState = {
  crosses: [],
  isLoading: false,
  error: null, // Since we do asynchronous fetching
};

export const crossesReducer = (
  state = CROSSES_INITIAL_STATE,
  action = {} as CrossesDipatchTypes
): CrossesState => {
  switch (action.type) {
    case CROSSES_ACTION_TYPES.FETCH_CROSSES_START:
      return { ...state, isLoading: true };
    case CROSSES_ACTION_TYPES.FETCH_CROSSES_SUCCESS:
      return {
        ...state,
        crosses: action.payload,
        isLoading: false,
      };
    case CROSSES_ACTION_TYPES.FETCH_CROSSES_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
