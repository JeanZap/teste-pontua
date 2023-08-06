import { Tab as MuiTab, Tabs as TabsMuiComponent } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ mt: 4 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: string) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export interface Tab<T extends string> {
  label: T;
  component: React.ReactNode;
}

interface Props<T extends string> {
  tabs: Tab<T>[];
}

export function Tabs<T extends string>({ tabs }: Props<T>) {
  const [value, setValue] = React.useState<number>(0);

  const labels = tabs.map((tab) => tab.label);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabsMuiComponent value={value} onChange={handleChange} aria-label="basic tabs example">
          {labels.map((label) => (
            <MuiTab {...a11yProps(label)} label={label} key={label} sx={{ textTransform: 'none' }} />
          ))}
        </TabsMuiComponent>
      </Box>

      {tabs.map(({ label, component }, index) => (
        <TabPanel key={label} value={value} index={index}>
          {component}
        </TabPanel>
      ))}
    </Box>
  );
}
