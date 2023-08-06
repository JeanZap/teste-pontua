import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Character } from '../../../../models/CharactersListDto';
import { Colors } from '../../../../utils/colors';

interface Props {
  personagem: Character;
  ultimos: boolean;
  onClick(): void;
}

export function CardPersonagem({ personagem, ultimos, onClick }: Props) {
  const lg = ultimos ? 6 : 3;

  return (
    <Grid key={personagem.name} sm={12} md={6} lg={lg} item>
      <Card sx={{ backgroundColor: Colors.gray100, border: 'none', outline: 'none' }}>
        <CardActionArea
          sx={{ display: 'flex', justifyContent: 'start', height: 150, p: '14px 10px 14px 10px' }}
          onClick={onClick}>
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
}

