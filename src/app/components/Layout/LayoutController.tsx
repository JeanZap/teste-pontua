import { mdiAccountOutline, mdiViewDashboardOutline } from '@mdi/js';
import { useState } from 'react';
import { Paths } from '../../../routes/paths';

export interface Botao {
  titulo: string;
  icone: string;
  subBotoes?: Omit<Botao, 'icone'>[];
  path?: string;
}

const botoes: Botao[] = [
  { titulo: 'Home', path: Paths.home, icone: mdiViewDashboardOutline },
  //TODO: Vai para lugar nenhum
  { titulo: 'Perfil', path: Paths.perfilAgente(), icone: mdiAccountOutline }
];

export function useLayoutController() {
  const [aberto, setAberto] = useState<boolean>(true);

  const definirDrawerAberto = (aberto: boolean) => () => setAberto(aberto);

  return { botoes, aberto, definirDrawerAberto };
}

