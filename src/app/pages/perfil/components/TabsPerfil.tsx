import { Character } from '../../../../models/CharactersListDto';
import { Tab, Tabs } from '../../../components/Tabs';
import { Authors } from './Authors';
import { Powers } from './Powers';
import { Species } from './Species';
import { Teams } from './Teams';
import { VisaoGeral } from './VisaoGeral';

type LabelsType = 'Visão Geral' | 'Teams' | 'Powers' | 'Species' | 'Authors';

interface Props {
  personagem?: Character;
}

export function TabsPerfil({ personagem }: Props) {
  const tabs: Tab<LabelsType>[] = [
    {
      label: 'Visão Geral',
      component: <VisaoGeral personagem={personagem} />
    },
    {
      label: 'Teams',
      component: <Teams />
    },
    {
      label: 'Powers',
      component: <Powers />
    },
    {
      label: 'Species',
      component: <Species />
    },
    {
      label: 'Authors',
      component: <Authors personagem={personagem} />
    }
  ];

  return <Tabs tabs={tabs} />;
}

