import axios from "axios";

const api = axios.create({
  baseURL: "http://10.9.60.135:3333",
});
//Para usar o npm install -g json-server
export default api;
//json-server ./src/services/server.json --host  10.9.60.135 --port 3333
///jhkljhjkhjh