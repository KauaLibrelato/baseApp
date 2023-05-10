import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";

import { ILoginRequest } from "./types";

export const loginRequest = async ({
  email,
  password,
  expoToken,
}: ILoginRequest) => {
  const request = await api.post("/auth/login", {
    email,
    password,
    expoToken,
  });

  return request.data;
};

export const setToken = async ({ token }: { token: string }) => {
  AsyncStorage.setItem("accessToken", token);
};
