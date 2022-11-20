import api from "./api";

export async function getTransactions({ cash, date }: any) {
  console.log(cash);

  const token = localStorage.getItem("token");
  const response = await api.get(`/transactions?cash=${cash}&date=${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
