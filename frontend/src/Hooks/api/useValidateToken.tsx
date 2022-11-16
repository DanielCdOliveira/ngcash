import useAsync from "../useAsync";

import * as authApi from "../../Services/authApi";

export default function useValidateToken() {
  const {
    loading: validateTokenLoading,
    error: validateTokenError,
    act: validateToken,
  } = useAsync(authApi.validateToken, false);

  return {
    validateTokenLoading,
    validateTokenError,
    validateToken,
  };
}
