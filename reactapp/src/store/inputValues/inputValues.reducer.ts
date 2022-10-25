import { InputValuesDipatchTypes } from "./inputValues.action";
import { Info, INPUT_VALUES_ACTION_TYPES } from "./inputValues.type";

export type InputsState = {
  readonly team: Info | null;
  readonly formation: Info | null;
  readonly direction: Info | null;
  readonly player: Info | null;
};

export const INITIAL_STATE: InputsState = {
  team: null,
  formation: { value: "all", name: "All formations" },
  direction: null,
  player: null,
};

export const inputValuesReducer = (
  state = INITIAL_STATE,
  action = {} as InputValuesDipatchTypes
): InputsState => {
  const { type, payload } = action;
  switch (type) {
    case INPUT_VALUES_ACTION_TYPES.SET_TEAM:
      return { ...state, team: payload, player: null };
    case INPUT_VALUES_ACTION_TYPES.SET_FORMATION:
      return { ...state, formation: payload, player: null };
    case INPUT_VALUES_ACTION_TYPES.SET_DIRECTION:
      return { ...state, direction: payload, player: null };
    case INPUT_VALUES_ACTION_TYPES.SET_PLAYER:
      return { ...state, player: payload };
    default:
      return state;
  }
};
