import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { authenticationSucess } from "../actions";

export default function Cookies() {
  const dispatch = useDispatch();
  const token = useSelector(
    (state: RootState) => state.autheticationReducer.token
  );
  if (token) {
    dispatch(authenticationSucess(true));
  }
}
