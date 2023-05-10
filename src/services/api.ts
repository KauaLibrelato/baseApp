import axios from "axios";

export const urlBackend = "http://ip-user:8080/api/client";

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
