import useAsync from "../useAsync";

import * as transactionsApi from "../../Services/transactionsApi";

export default function usePostTransactions() {
  const {
    data,
    loading: postTransactionLoading,
    error: postTransactionError,
    act: postTransactions,
  } = useAsync(transactionsApi.postTransaction, false);

  return {
    data,
    postTransactionLoading,
    postTransactionError,
    postTransactions,
  };
}
