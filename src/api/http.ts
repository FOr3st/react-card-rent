import axios from "axios";

export interface RequestConfig {
  url?: string;
  headers?: any;
  params?: any;
}

const defaultRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function get(url: string, config: RequestConfig = defaultRequestConfig) {
  return axios.get(url, config);
}

export function post(
  url: string,
  data: object,
  config: RequestConfig = defaultRequestConfig
) {
  return axios.post(url, data, config);
}
