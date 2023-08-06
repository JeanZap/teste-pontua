import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../routes/paths';
import { Colors } from '../../../utils/colors';
import { Carregando } from '../../components/Carregando';
import { Paginacao } from '../../components/Paginacao';
import { useHomeController } from './HomeController';

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
          const lg = ultimos ? 6 : 3;

          return (
            <Grid key={personagem.name} sm={12} md={6} lg={lg} item>
              <Card sx={{ backgroundColor: Colors.gray100, border: 'none', outline: 'none' }}>
                <CardActionArea
                  sx={{ display: 'flex', justifyContent: 'start', height: 150, p: '14px 10px 14px 10px' }}
                  onClick={irPerfil(personagem.id)}>
                  <CardMedia
                    component="img"
                    image={personagem.thumbnail.path + '.' + personagem.thumbnail.extension}
                    sx={{ height: 119, width: 83, borderRadius: 2 }}
                  />
                  <CardContent
                    sx={{
                      p: '0 0 0 1rem',
                      height: '-webkit-fill-available',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'start'
                    }}>
                    <Typography fontSize={16} fontWeight={700}>
                      {personagem.name}
                    </Typography>
                    <Typography fontSize={12} mt={1}>
                      {personagem.description && personagem.description !== ''
                        ? personagem.description
                        : 'Nenhuma descrição fornecida.'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Divider sx={{ width: '100%' }} />

      <Paginacao total={total} buscarPagina={obterPaginado} />
    </Container>
  );
}

