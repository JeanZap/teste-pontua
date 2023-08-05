export const Paths = {
  login: '/',
  esqueciSenha: '/esqueci-senha',
  home: '/dashboard',
  perfilAgente: (id = ':id') => '/perfil-agente/' + id,
  selecaoAgente: '/selecao-agente',
  notFound: '*'
};

