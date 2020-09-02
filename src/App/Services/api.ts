import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

// api.interceptors.request.use((config) => {
//   const newConfig = config;
//   const token = localStorage.getItem('@Auth/access_token');
//   if (!token && config.url !== '/session') {
//     throw new axios.Cancel('no token');
//   }
//   newConfig.headers.Authorization = token;
//   return newConfig;
// });

export default api;