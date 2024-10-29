import { createSelector } from "@reduxjs/toolkit";
export const userData = (state) =>
  state.user;

export const getUserRoles = createSelector(
  userData,
  (site) => site.user,
);