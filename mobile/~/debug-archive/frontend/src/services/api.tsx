import axios from 'axios';

const api = axios.create({
    baseURL:'http://128.199.7.156:3333'
})


export default api;