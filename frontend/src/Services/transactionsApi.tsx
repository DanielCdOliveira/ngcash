import api from "./api";

export async function getTransactions({ cash, date }: any) {
  const token = localStorage.getItem("token");
  const response = await api.get(`/transactions?cash=${cash}&date=${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
export async function postTransaction(data: any) {
  const token = localStorage.getItem("token");
  const response = await api.post(`/transaction`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
