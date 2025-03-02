import axios from 'axios';


export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});


api.interceptors.response.use(
  response => response,
  error => {
    
    if (error.response) {
     
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      
      console.error('No response received:', error.request);
    } else {
      
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);