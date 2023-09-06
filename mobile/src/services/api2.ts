import axios from "axios";

const api2 = axios.create({
  baseURL: "http://128.199.7.156:3333",
});
//Para usar o npm install -g json-server
export default api2;
//json-server ./src/services/server.json --host  10.9.60.135 --port 3333
///jhkljhjkhjhllexp://10.101.53.36:19000exp://10.101.56.50:19000
//json-server ./src/services/server.json --host 10.101.40.64 --port 3333 --daley 5000000