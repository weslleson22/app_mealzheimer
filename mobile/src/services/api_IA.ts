import axios from "axios";

export const api_IA =  axios.create({
  baseURL: 'https://api.clarifai.com',
  headers:{
    
    "Authorization":"Key 57aac8716e5a456591426e42797f728f"    
  }
})