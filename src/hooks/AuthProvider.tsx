/* eslint-disable no-console */
// import * as AuthSession from "expo-auth-session";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../utils/types/types";
import { AuthContext } from "./AuthContext";
import api from "../services/api";
import { ILoginRequestResponse } from "./utils/types";
import apiAuth from "../services/apiAuth";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [tokenLogin, setTokenLogin] = useState<boolean>(false);
  const [errorToken, setErrorToken] = useState(false);
  const [splash, setSplash] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const validateToken = async () => {
    await apiAuth
      .get("/api/client/auth/validate/token")
      .then(async (res) => {
        setUser(res.data.User);
        setTokenLogin(true);
        setErrorToken(false);
      })
      .catch((err: any) => {
        setErrorToken(true);
        console.log(err.response.data);
      });
  };

  // Login
  const signin = async ({ email, password }: ILoginRequestResponse) => {
    await api
      .post("/api/user/login", { email, password })
      .then(async (res) => {
        await AsyncStorage.setItem("accessToken", res.data.accessToken);
        await AsyncStorage.setItem("userId", res.data.user.id);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  // Logout

  const signout = async () => {
    setUser(null);
    AsyncStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signout,
        signin,
        validateToken,
        tokenLogin,
        setSplash,
        splash,
        setLoading,
        loading,
        errorToken,
        setErrorToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
