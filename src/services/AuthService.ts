import { LoginRequestDto } from '../models/LoginRequestDto';
import { useAxios } from '../utils/hooks/Axios';
import { sampleJwt } from '../utils/keys';

export const obterToken = () => localStorage.getItem('token');

export function useAuthService() {
  const axios = useAxios();

  const definirToken = (token: string) => localStorage.setItem('token', token);

  function login(requisicao: LoginRequestDto): Promise<string> {
    return Promise.resolve(sampleJwt);
    // eslint-disable-next-line
    return axios.post('mockUrl', requisicao);
  }

  function solicitarTrocaSenha(email: string) {
    return Promise.resolve();
    // eslint-disable-next-line
    return axios.post('mockUrl', email);
  }

  return { solicitarTrocaSenha, definirToken, obterToken, login };
}

