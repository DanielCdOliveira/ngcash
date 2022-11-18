import api from "./api";

export async function getTransactions(data: any) {
  const token = localStorage.getItem("token");
  const response = await api.get("/transactions", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
