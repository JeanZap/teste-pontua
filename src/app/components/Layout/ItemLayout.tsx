import Icon from '@mdi/react';
import { Collapse } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { matchRoutes, useLocation } from 'react-router-dom';
import { Paths } from '../../../routes/paths';
import { Colors } from '../../../utils/colors';
import { IBotao } from './LayoutController';

interface Props extends IBotao {
  margemAdicional?: number;
  rotate?: number;
  aberto: boolean;
  navegarPara: (path: string | undefined) => () => void;
}

const routes = [{ path: Paths.home }, { path: Paths.perfilAgente() }];

export function ItemLayout({ titulo, icone, path, subBotoes, margemAdicional, rotate, aberto, navegarPara }: Props) {
  const location = useLocation();

  const matchRota = matchRoutes(routes, location.pathname);
  const matchBotao = matchRoutes(routes, path ?? '');
  const selecionado = matchRota?.some((rota) => matchBotao?.some((botao) => rota.route.path === botao.route.path));
  const color = selecionado ? Colors.orange500 : undefined;

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          justifyContent: aberto ? 'initial' : 'center',
          minHeight: 48,
          px: 2.5,
          '& .MuiTypography-root': { color }
        }}
        onClick={navegarPara(path)}>
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: aberto ? 3 : 'auto',
            justifyContent: 'center'
          }}>
          <Icon path={icone} color={color} rotate={rotate} size={1} />
        </ListItemIcon>
        <ListItemText
          primary={titulo}
          sx={{
            opacity: aberto ? 1 : 0,
            whiteSpace: 'break-spaces'
          }}
        />
      </ListItemButton>

      <Collapse in={aberto} timeout="auto" unmountOnExit sx={{ visibility: 'hidden', ml: margemAdicional }}>
        <List component="div" disablePadding>
          {subBotoes?.map((botao) => (
            <ItemLayout
              {...botao}
              icone={''}
              key={botao.titulo}
              margemAdicional={4}
              aberto={aberto}
              navegarPara={navegarPara}
            />
          ))}
        </List>
      </Collapse>
    </ListItem>
  );
}

