import Axios, { AxiosRequestHeaders } from "axios";
import { API_URL } from "../config/constants";
import { store } from "../store";

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    console.log(message);

    return Promise.reject(error);
  }
);

axios.interceptors.request.use((config) => {
  const token = store.getState().temp_data.token;

  config.headers = {
    Authorization: token ? `Bearer ${token}` : "",
  } as AxiosRequestHeaders;

  return config;
});
