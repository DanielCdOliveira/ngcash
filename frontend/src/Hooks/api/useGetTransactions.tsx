import useAsync from "../useAsync";

import * as transactionsApi from "../../Services/transactionsApi";

export default function useGetTransactions() {
  const {
    data: transactionsData,
    loading: getTransactionsLoading,
    error: getTransactionsError,
    act: getTransactions,
  } = useAsync(transactionsApi.getTransactions, false);

  return {
    transactionsData,
    getTransactionsLoading,
    getTransactionsError,
    getTransactions,
  };
}
