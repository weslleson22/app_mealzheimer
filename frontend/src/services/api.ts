import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.6:3333",
});
//Para usar o npm install -g json-server
export default api;