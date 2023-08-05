import axios from 'axios';
import { obterToken } from '../../services/AuthService';

export function useAxios() {
  const Axios = axios.create();

  Axios.interceptors.request.use((config) => {
    const token = obterToken();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  });

  return axios;
}

