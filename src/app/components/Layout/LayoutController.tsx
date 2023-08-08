import { mdiAccountOutline, mdiViewDashboardOutline } from '@mdi/js';
import { useState } from 'react';
import { Paths } from '../../../routes/paths';

export interface IBotao {
  titulo: string;
  icone: string;
  subBotoes?: Omit<IBotao, 'icone'>[];
  path?: string;
  disabled?: boolean;
}

const botoes: IBotao[] = [
  { titulo: 'Home', path: Paths.home, icone: mdiViewDashboardOutline },
  { titulo: 'Perfil', path: Paths.perfilAgente(), icone: mdiAccountOutline, disabled: true }
];

export function useLayoutController() {
  const [aberto, setAberto] = useState<boolean>(true);

  const definirDrawerAberto = (aberto: boolean) => () => setAberto(aberto);

  return { botoes, aberto, definirDrawerAberto };
}

