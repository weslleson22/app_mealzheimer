import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.30.1:3333",
});

export default api;