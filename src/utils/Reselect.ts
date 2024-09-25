import React from "react";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../redux/reducers";

type IReselect = {
  selectState: any;
};

const reselect = ({ selectState }: IReselect) => {
  return createSelector([selectState], (state) => state);
};

//states
const token = (state: RootState) => state.autheticationReducer.token;
const isAuthenticated = (state: RootState) =>
  state.autheticationReducer.isAuthenticated;

//selects
export const selectToken = reselect({ selectState: token });
export const selectIIsAuthenticated = reselect({
  selectState: isAuthenticated,
});
