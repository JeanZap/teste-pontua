import { Container, Divider, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../routes/paths';
import { Carregando } from '../../components/Carregando';
import { Paginacao } from '../../components/Paginacao';
import { useHomeController } from './HomeController';
import { CardPersonagem } from './components/CardPersonagem';

export function Home() {
  const navigate = useNavigate();
  const { characters, total, carregando, obterPaginado } = useHomeController();

  const irPerfil = (id: number) => () => navigate(Paths.perfilAgente(id));

  if (carregando || !characters) {
    return (
      <Container>
        <Carregando />
      </Container>
    );
  }

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <Grid spacing={2} container>
        {characters.map((personagem, index) => {
          const ultimos = index === 9 || index === 8;

          return (
            <CardPersonagem
              personagem={personagem}
              key={personagem.id}
              ultimos={ultimos}
              onClick={irPerfil(personagem.id)}
            />
          );
        })}
      </Grid>

      <Divider sx={{ width: '100%' }} />

      <Paginacao total={total} buscarPagina={obterPaginado} />
    </Container>
  );
}

