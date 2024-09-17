import {
  useAuthenticationUserMutation,
  useCreateAccountUserMutation,
} from "../redux/rtkQuery/apiQuery";
import {
  authenticationRequest,
  createAccountUserRequest,
} from "../redux/actions";
import { AUTHENTICATION_REQUEST } from "../redux/reducers/autheticationReducer";
import { useDispatch } from "react-redux";
import { DispatchTypes, FetchMapTypes } from "../types";

export default function useLoginQuery() {
  const [authenticationUser, { isLoading: isAuthLoading }] =
    useAuthenticationUserMutation();
  const [createAccountUser, { isLoading: isRegisterLoading }] =
    useCreateAccountUserMutation();

  const fecthMaps: FetchMapTypes = {
    authentication: {
      api: authenticationUser,
      reducer: authenticationRequest,
    },
    createAccount: {
      api: createAccountUser,
      reducer: createAccountUserRequest,
    },
  };

  const dispatch = ({ action, data }: DispatchTypes) => {
    if (!fecthMaps[action]) {
      throw Error(`O action ${action} não é válido`);
    }
    fetchQuery({ action, data });
  };

  const fetchQuery = ({ action, data }: DispatchTypes) => {
    console.log(data, action);
    const api = fecthMaps[action].api(data);
    api.then((response) => fecthMaps[action].reducer(response));
  };
  return {
    dispatch,
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
