import { RootState } from "@reduxjs/toolkit/query";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticationSucess } from "../redux/actions";

export default function useCache() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const storageSetToken = (token: string) => {
    if (token != null) {
      localStorage.setItem("TOKEN", token);
    }
  };

  const storageToken = useCallback(() => {
    const storageTokens = localStorage.getItem("TOKEN");
    if (storageTokens) {
      dispatch(authenticationSucess(true));
      return true;
    }
  }, [navigate]);

  storageToken()
  const storageTokens = () => {
    const storageToken = localStorage.getItem("TOKEN");
    if (storageToken) {
      dispatch(authenticationSucess(true));
      return true;
    }
    return false;
  };

  //   useEffect(() => {
  //     const storageToken = localStorage.getItem("TOKEN");
  //     if (storageToken) {
  //       dispatch(authenticationSucess(true));
  //     }
  //   }, []);

  const storageClear = () => {
    localStorage.clear();
  };

  return { storageSetToken, storageClear, storageToken };
}
