import { RootState } from "../store";
import { InputsState } from "./inputValues.reducer";

export const selectInputValues = (state: RootState): InputsState =>
  state.inputValues;
