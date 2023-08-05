import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Carregando } from '../../components/Carregando';
import { usePerfilController } from './PerfilController';
import { TabsPerfil } from './components/TabsPerfil';

export function Perfil() {
  const navigate = useNavigate();
  const { characters, total, carregando } = usePerfilController();

  if (carregando || !characters) {
    return (
      <Container sx={{ margin: 0 }}>
        <Carregando />
      </Container>
    );
  }

  return (
    <Container sx={{ margin: 0 }}>
      <TabsPerfil />
    </Container>
  );
}

