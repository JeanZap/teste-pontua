import axios from 'axios';
import { obterToken } from '../../services/AuthService';

export function useAxios() {
  const Axios = axios.create();
  const token = obterToken();

  Axios.interceptors.request.use((config) => {
    //Comment: Marvel derrubando requisições que contenham Authorization
    if (token && false) {
      config.headers['Authorizations'] = `Bearer ${token}`;
    }

    return config;
  });

  return Axios;
}

