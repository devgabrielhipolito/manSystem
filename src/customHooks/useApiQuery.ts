import {
  useAuthenticationUserMutation,
  useCreateAccountUserMutation,
} from "../redux/rtkQuery/apiQuery";
import {
  authenticationRequest,
  authenticationSucess,
  createAccountUserRequest,
} from "../redux/actions";

import { DispatchTypes, FetchMapTypes } from "../types";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function useApiQuery() {
  const [message, setMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [authenticationUser, { isLoading: isAuthLoading }] =
    useAuthenticationUserMutation();
  const [createAccountUser, { isLoading: isRegisterLoading }] =
    useCreateAccountUserMutation();

  const fecthMaps: FetchMapTypes = {
    authentication: {
      api: authenticationUser,
      reducer: authenticationRequest,
      reducerSucess: authenticationSucess,
    },
    createAccount: {
      api: createAccountUser,
      reducer: createAccountUserRequest,
    },
  };

  const dispatchAction = ({ action, data }: DispatchTypes) => {
    if (!fecthMaps[action]) {
      throw Error(`O action ${action} não é válido`);
    }
    fetchQuery({ action, data });
  };

  const fetchQuery = ({ action, data }: DispatchTypes) => {
    const api = fecthMaps[action].api(data);
    api.then(({ data, error }) => {
      if (error) {
        return setMessage(error.data.error);
      }
      setMessage(null);
      dispatch(fecthMaps[action].reducer(data));
      if (fecthMaps[action].reducerSucess) {
        console.log("opa");
        dispatch(fecthMaps[action].reducerSucess(true));
      }
    });
  };

  return {
    dispatchAction,
    message,
    isLoading: isAuthLoading || isRegisterLoading,
  };
}

// const dispatchApi = async (
//   data: objectUser,
//   action: "authentication" | "register"
// ) => {
//   if (action === "authentication") {
//     const response = await authenticationUser(data);

//     if (response.data) {
//       dispatch(authenticationRequest(data));
//     }
//   } else if (action === "register") {
//     const response = await createAccountUser(data);

//     if (response.data) {
//       dispatch(createAccountUserRequest(data));
//     }
//   }
