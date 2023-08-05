import { Suspense } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Carregando } from '../app/components/Carregando';
import { RotaAutenticada } from '../app/components/RotaAutenticada';
import { EsquecimentoSenha, Home, Login, Perfil, SelecaoAgente } from './lazies';
import { Paths } from './paths';

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Carregando />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { path: Paths.login, element: <Login /> },
      { path: Paths.esqueciSenha, element: <EsquecimentoSenha /> },
      { path: Paths.selecaoAgente, element: <SelecaoAgente /> },
      {
        element: <RotaAutenticada />,
        children: [
          { path: Paths.home, element: <Home /> },
          { path: Paths.perfilAgente(), element: <Perfil /> }
        ]
      },
      {
        path: Paths.notFound,
        element: <h1>Pagina mais rara que a primeira edicao do Hulk. Error 404</h1>
      }
    ]
  }
]);

