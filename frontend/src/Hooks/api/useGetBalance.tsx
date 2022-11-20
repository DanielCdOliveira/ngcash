import useAsync from "../useAsync";

import * as balanceApi from "../../Services/balanceApi";

export default function useGetBalance() {
  const {
    data: balance,
    loading: balanceLoading,
    error: balanceError,
    act: getBalance,
  } = useAsync(balanceApi.getBalance, false);

  return {
    balance,
    balanceLoading,
    balanceError,
    getBalance,
  };
}
