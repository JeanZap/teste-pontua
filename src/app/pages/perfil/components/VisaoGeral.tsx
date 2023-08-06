import { Avatar, Box, CardContent, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Character } from '../../../../models/CharactersListDto';
import { Colors } from '../../../../utils/colors';

interface Props {
  personagem?: Character;
}

export function VisaoGeral({ personagem }: Props) {
  const theme = useTheme();
  const dimensoesDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const flexDirection = dimensoesDesktop ? 'row' : 'column';

  if (!personagem) return null;

  return (
    <Paper
      elevation={0}
      sx={{
        boxShadow: '4px 4px 4px 4px ' + Colors.gray100,
        p: 4
      }}>
      <CardContent sx={{ display: 'flex', flexDirection }}>
        <Avatar
          alt={personagem.name}
          src={personagem.thumbnail.path + '.' + personagem.thumbnail.extension}
          sx={{ mr: 1, width: 90, height: 90 }}
        />
        <Box ml={2}>
          <Typography fontSize={24} fontWeight={700}>
            {personagem.name}
          </Typography>
          <Typography color="#717171" fontWeight={600} fontSize={16} mt={1}>
            {personagem.description}
          </Typography>
        </Box>
      </CardContent>
    </Paper>
  );
}

