import { TRootState } from "./../../index";
import { createSelector } from "reselect";

export const selectTempData = (state: TRootState) => state.temp_data;

export const selectEmail = createSelector(
  [selectTempData],
  (temp_data) => temp_data.email
);

export const selectToken = createSelector(
  [selectTempData],
  (member) => member.token
);
