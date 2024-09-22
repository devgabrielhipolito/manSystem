import { objectUser } from "./auth";
import { authenticationRequest, authenticationSucess } from "../redux/actions";

export type DispatchTypes = {
  data: objectUser;
  action: "authentication" | "createAccount";
};

export type authenticationRequest = ReturnType<typeof authenticationRequest>;
export type authenticationSucess = ReturnType<typeof authenticationSucess>;

export type FetchMapTypes<TPayload = any, TResponse = any> = {
  readonly [action: string]: {
    readonly api: (payload: TPayload) => Promise<TResponse>;
    readonly reducer: (response: TResponse) => authenticationRequest;
  };
};
