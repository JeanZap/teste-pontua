import { Suspense, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Paths } from '../../routes/paths';
import { Carregando } from './Carregando';
import { Layout } from './Layout/Layout';

export function RotaAutenticada() {
  const [isAuthorized] = useState(true);

  return isAuthorized ? (
    <Layout>
      <Suspense fallback={<Carregando />}>
        <Outlet />
      </Suspense>
    </Layout>
  ) : (
    <Navigate to={Paths.notFound} />
  );
}
