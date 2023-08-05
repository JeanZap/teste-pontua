import { Box, Grid, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Colors } from '../../utils/colors';
import { building, logoWhite } from '../../assets';

export function BackgroundDMZ({ children }: PropsWithChildren) {
  const theme = useTheme();
  const exibirPredio = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        bgcolor: Colors.blue800,
        minHeight: '99vh',
        width: '100vw',
        maxWidth: '100vw',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Toolbar>
        <img src={logoWhite} alt={logoWhite} />
      </Toolbar>

      <Grid container spacing={4} p={2} justifyContent="space-evenly" alignItems="center" minHeight="inherit">
        {exibirPredio && (
          <Grid sm={6} item>
            <img src={building} alt={building} />
          </Grid>
        )}

        <Grid item>{children}</Grid>
      </Grid>
    </Box>
  );
}

