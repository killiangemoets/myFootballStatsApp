import { Dispatch } from "redux";
import getCrosses from "../../utils/api/crosses.utils";
import { Action, ActionWithPayload } from "../../utils/reducer/actions.utils";
import { Cross, CROSSES_ACTION_TYPES } from "./crosses.type";

export type FetchCrossesStart =
  Action<CROSSES_ACTION_TYPES.FETCH_CROSSES_START>;

export type FetchCrossesSuccess = ActionWithPayload<
  CROSSES_ACTION_TYPES.FETCH_CROSSES_SUCCESS,
  Cross[]
>;
export type FetchCrossesFailed = ActionWithPayload<
  CROSSES_ACTION_TYPES.FETCH_CROSSES_FAILED,
  Error
>;
export type CrossesDipatchTypes =
  | FetchCrossesStart
  | FetchCrossesSuccess
  | FetchCrossesFailed;

const fetchCrossesStart = (): FetchCrossesStart => {
  return { type: CROSSES_ACTION_TYPES.FETCH_CROSSES_START };
};

const fetchCrossesSuccess = (crossesArray: Cross[]): FetchCrossesSuccess => {
  return {
    type: CROSSES_ACTION_TYPES.FETCH_CROSSES_SUCCESS,
    payload: crossesArray,
  };
};

const fetchCrossesFailed = (error: Error): FetchCrossesFailed => {
  return { type: CROSSES_ACTION_TYPES.FETCH_CROSSES_FAILED, payload: error };
};

// THUNK ACTION:
export const fetchCrossesAsync =
  (teamId: string, formation: string, direction: string) =>
  async (dispatch: Dispatch<CrossesDipatchTypes>) => {
    dispatch(fetchCrossesStart());
    try {
      const CrossesArray = await getCrosses(teamId, formation, direction);
      dispatch(fetchCrossesSuccess(CrossesArray));
    } catch (error) {
      dispatch(fetchCrossesFailed(error as Error));
    }
  };
