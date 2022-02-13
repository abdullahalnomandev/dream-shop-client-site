import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://still-forest-16156.herokuapp.com",
  
  headers: { authorization: `Bearer ${window.localStorage.getItem("token")}` },
});
console.log(process.env.REACT_APP_API);


const response = (res: AxiosResponse) => res.data;
export const requests = {
  get: (url: string) => instance.get(url).then(response),
  post: (url: string, body: object) => instance.post(url, body).then(response),
  put: (url: string, body: object) => instance.put(url, body).then(response),
  delete: (url: string) => instance.delete(url).then(response),
};
