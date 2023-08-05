import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Colors } from '../../../utils/colors';
import { Carregando } from '../../components/Carregando';
import { useHomeController } from './HomeController';
import { Paginacao } from './Paginacao';

export function Home() {
  const { characters, total, carregando, obterPaginado } = useHomeController();

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
        {characters.map((character, index) => {
          const ultimos = index === 9 || index === 8;
          const sm = ultimos ? 12 : 12;
          const md = ultimos ? 6 : 6;
          const lg = ultimos ? 6 : 3;
          return (
            <Grid key={character.name} sm={sm} md={md} lg={lg} item>
              <Card sx={{ backgroundColor: Colors.gray100, border: 'none', outline: 'none' }}>
                <CardActionArea
                  sx={{ display: 'flex', justifyContent: 'start', height: 150, p: '14px 10px 14px 10px' }}>
                  <CardMedia
                    component="img"
                    image={character.thumbnail.path + '.' + character.thumbnail.extension}
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
                      {character.name}
                    </Typography>
                    <Typography fontSize={12} mt={1}>
                      {character.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Paginacao total={total} buscarPagina={obterPaginado} />
    </Container>
  );
}

