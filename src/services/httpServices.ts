import axios, { AxiosResponse } from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5000",
});

const response = (res: AxiosResponse) => res.data;
export const requests = {
  get: (url: string) => instance.get(url).then(response),
  post: (url: string, body: object) => instance.post(url, body).then(response),
  patch: (url: string) => instance.patch(url).then(response),
  delete: (url: string) => instance.delete(url).then(response),
};
