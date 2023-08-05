export const Paths = {
  login: '/',
  esqueciSenha: '/esqueci-senha',
  home: '/dashboard',
  perfilAgente: (id: string | number = ':id') => '/perfil-agente/' + id,
  selecaoAgente: '/selecao-agente',
  notFound: '*'
};

