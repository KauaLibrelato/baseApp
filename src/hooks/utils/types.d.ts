import { IUser } from "../../utils/types/types";

export interface IAuthContext {
  user: IUSer | null;
  setUser: (setUser: IUser) => void;
  signin: (ILoginRequestResponse) => void;
  signout: () => void;
  validateToken: () => void;
  tokenLogin: boolean;
  splash: boolean;
  setSplash: (setSplash: boolean) => void;
  loading: boolean;
  setLoading: (setLoading: boolean) => void;
  errorToken: boolean;
  setErrorToken: (setErrorToken: boolean) => void;
}

export interface ILoginRequest {
  email: string;
  password: string;
  expoToken: string;
}

export interface ILoginRequestResponse {
  email: string;
  password: string;
  expoToken: string;
}
