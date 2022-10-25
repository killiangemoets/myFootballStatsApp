import { ActionWithPayload } from "../../utils/reducer/actions.utils";
import { Info, INPUT_VALUES_ACTION_TYPES } from "./inputValues.type";

export type SetCurrentTeam = ActionWithPayload<
  INPUT_VALUES_ACTION_TYPES.SET_TEAM,
  Info
>;

export const setCurrentTeam = (team: Info): SetCurrentTeam => {
  return { type: INPUT_VALUES_ACTION_TYPES.SET_TEAM, payload: team };
};

export type SetCurrentFormation = ActionWithPayload<
  INPUT_VALUES_ACTION_TYPES.SET_FORMATION,
  Info
>;

export const setCurrentFormation = (formation: Info): SetCurrentFormation => {
  return { type: INPUT_VALUES_ACTION_TYPES.SET_FORMATION, payload: formation };
};

export type SetCurrentDirection = ActionWithPayload<
  INPUT_VALUES_ACTION_TYPES.SET_DIRECTION,
  Info
>;

export const setCurrentDirection = (direction: Info): SetCurrentDirection => {
  return { type: INPUT_VALUES_ACTION_TYPES.SET_DIRECTION, payload: direction };
};

export type SetCurrentPlayer = ActionWithPayload<
  INPUT_VALUES_ACTION_TYPES.SET_PLAYER,
  Info | null
>;

export const setCurrentPlayer = (player: Info | null): SetCurrentPlayer => {
  return { type: INPUT_VALUES_ACTION_TYPES.SET_PLAYER, payload: player };
};

export type InputValuesDipatchTypes =
  | SetCurrentTeam
  | SetCurrentFormation
  | SetCurrentDirection
  | SetCurrentPlayer;
