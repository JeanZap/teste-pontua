import { mdiArrowDownLeft, mdiChevronLeft, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from '../../../assets';
import { Paths } from '../../../routes/paths';
import { Colors } from '../../../utils/colors';
import { ItemLayout } from './ItemLayout';
import { useLayoutController } from './LayoutController';
import * as S from './styles';

export function Layout({ children }: PropsWithChildren) {
  const { botoes, aberto, definirDrawerAberto } = useLayoutController();
  const navigate = useNavigate();

  const navegarPara = (path: string | undefined) =>
    function () {
      if (!path) return;
      navigate(path);
    };

  const logOut = () =>
    function () {
      navigate(Paths.login);
    };

  return (
    <Box display="flex">
      <S.AppBar position="fixed" open={aberto}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            onClick={definirDrawerAberto(true)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(aberto && { display: 'none' })
            }}>
            <Icon path={mdiMenu} color={Colors.blue800} size={1} />
          </IconButton>
          <Typography variant="h6" noWrap>
            {/* {titulo} */}
            TODO: Titulo
          </Typography>
        </Toolbar>
      </S.AppBar>
      <S.Drawer variant="permanent" open={aberto}>
        <S.DrawerHeader>
          <Box pl={2}>
            <img src={logo} alt="logo" height="40" />
          </Box>
          {aberto && (
            <IconButton onClick={definirDrawerAberto(false)}>
              <Icon path={mdiChevronLeft} color={Colors.blue800} size={1} />
            </IconButton>
          )}
        </S.DrawerHeader>
        <Divider />
        <List>
          {botoes.map((botao) => (
            <ItemLayout {...botao} key={botao.titulo} aberto={aberto} navegarPara={navegarPara} />
          ))}

          <Divider />

          <ItemLayout aberto={true} navegarPara={logOut} titulo="Sair" icone={mdiArrowDownLeft} rotate={90} />
        </List>
      </S.Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: 'calc(100% - 300px)' }}>
        <S.DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

