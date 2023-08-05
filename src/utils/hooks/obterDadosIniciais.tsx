import { useEffect, useState } from 'react';

export function useObterDadosIniciais<T>(obter: () => Promise<T>) {
  const [carregando, setCarregando] = useState<boolean>(true);
  const [dado, setDado] = useState<T>();

  useEffect(() => {
    obter()
      .then((response) => setDado(response))
      .finally(() => setCarregando(false));
    // eslint-disable-next-line
  }, []);

  const definirCarregando = (carregando: boolean) => setCarregando(carregando);

  const reobter = (buscar: () => Promise<T>) =>
    buscar()
      .then((response) => setDado(response))
      .finally(() => setCarregando(false));

  return { dado, carregando, definirCarregando, reobter };
}

