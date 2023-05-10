import axios from "axios";

export const urlBackend = "http://10.109.0.24:8080/api/client";

const api = axios.create({
  baseURL: urlBackend,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
    "Content-Type": "application/json",
    "Accept-Encondig": "gzip, deflate, br",
  },
});

export default api;
