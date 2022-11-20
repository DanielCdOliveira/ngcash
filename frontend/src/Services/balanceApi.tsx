import api from "./api";

export async function getBalance() {
  const token = localStorage.getItem("token");
  const response = await api.get("/balance", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
