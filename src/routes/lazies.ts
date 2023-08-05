import { lazy } from 'react';

export const Login = lazy(() => import('../app/pages/login/').then(({ Login }) => ({ default: Login })));

export const EsquecimentoSenha = lazy(() =>
  import('../app/pages/esquecimento-senha/').then(({ EsquecimentoSenha }) => ({ default: EsquecimentoSenha }))
);

export const SelecaoAgente = lazy(() =>
  import('../app/pages/selecao-agente/').then(({ SelecaoAgente }) => ({ default: SelecaoAgente }))
);

export const Home = lazy(() => import('../app/pages/home').then(({ Home }) => ({ default: Home })));

export const Perfil = lazy(() => import('../app/pages/perfil').then(({ Perfil }) => ({ default: Perfil })));

