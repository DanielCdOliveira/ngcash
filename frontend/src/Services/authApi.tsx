import api from "./api";

export async function signIn(data: any) {
  const response = await api.post("/signin", data);
  return response.data;
}
export async function signUp(data: any) {
  const response = await api.post("/signup", data);
  return response.data;
}
export async function validateToken(token: string) {
  const response = await api.post("/validatetoken", null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
