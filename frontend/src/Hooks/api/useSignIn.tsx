import useAsync from "../useAsync";

import * as authApi from "../../Services/authApi";

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync(authApi.signIn, false);

  return {
    signInLoading,
    signInError,
    signIn,
  };
}
