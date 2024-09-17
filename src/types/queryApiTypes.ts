import { TypedMutationTrigger } from "@reduxjs/toolkit/query/react";
import { objectUser } from "./auth";

export type DispatchTypes = {
  data: objectUser;
  action: "authentication" | "createAccount";
};

export type FetchMapTypes<TPayload = any, TResponse = any> = {
  readonly [action: string]: {
    readonly api: (payload: TPayload) => Promise<TResponse>;
    readonly reducer: (response: TResponse) => void;
  };
};
