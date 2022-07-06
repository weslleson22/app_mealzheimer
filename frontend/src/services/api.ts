import axios from "axios";

const api = axios.create({
  baseURL: "http:/ 192.168.0.7:3333",
});
//Para usar o npm install -g json-server
//json-server ./src/services/server.json --host  192.168.0.7 --port 3333

//json-server ./src/services/server.json --host  192.168.0.7 --port 3333
export default api;