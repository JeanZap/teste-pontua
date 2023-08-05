import { Tab, Tabs } from '../../../components/Tabs';

type LabelsType = 'Visão Geral' | 'Teams' | 'Powers' | 'Species' | 'Authors';

interface Props {}

export function TabsPerfil({}: Props) {
  const tabs: Tab<LabelsType>[] = [
    {
      label: 'Visão Geral',
      component: <h1>ASDF</h1>
    },
    {
      label: 'Teams',
      component: <h1>ASDF</h1>
    },
    {
      label: 'Powers',
      component: <h1>ASDF</h1>
    },
    {
      label: 'Species',
      component: <h1>ASDF</h1>
    },
    {
      label: 'Authors',
      component: <h1>ASDF</h1>
    }
  ];

  return <Tabs tabs={tabs} />;
}

