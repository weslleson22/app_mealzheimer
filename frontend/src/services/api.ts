import axios from "axios";

const api = axios.create({
  baseURL: "http://10.101.50.252:3333",
});
//Para usar o npm install -g json-server
export default api;