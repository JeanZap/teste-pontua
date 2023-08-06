import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Paths } from '../../../routes/paths';
import { Colors } from '../../../utils/colors';
import { Carregando } from '../../components/Carregando';
import { usePerfilController } from './PerfilController';
import { TabsPerfil } from './components/TabsPerfil';

export function Perfil() {
  const { personagem, carregando } = usePerfilController();

  if (carregando) {
    return (
      <Container sx={{ margin: 0 }}>
        <Carregando />
      </Container>
    );
  }

  if (!personagem)
    return (
      <Container sx={{ margin: 0 }}>
        <Typography variant="h4">Personagem não encontrado</Typography>
        <Link to={Paths.home}>
          <Button color="info">Voltar</Button>
        </Link>
      </Container>
    );

  return (
    <Container sx={{ margin: 0 }}>
      <Box display="flex">
        <Typography fontSize={24} fontWeight={700} display="inline">
          Perfil
        </Typography>
        <Typography color={Colors.orange500} fontSize={24} fontWeight={700} marginX={1}>
          /
        </Typography>
        <Typography color={Colors.gray500} fontSize={24} fontWeight={300}>
          {personagem.name}
        </Typography>
      </Box>

      <TabsPerfil personagem={personagem} />
    </Container>
  );
}

