import { createTheme, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { PropsWithChildren } from 'react';
import { Colors } from '../../utils/colors';

const theme = createTheme({
  components: {
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { outline: `1px solid ${Colors.blue800}`, borderRadius: 15 }
      }
    },
    MuiIconButton: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: Colors.blue800,
            '&:hover': { backgroundColor: Colors.blue800 }
          }
        },
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: Colors.blue800,
            '&:hover': { backgroundColor: Colors.blue800 }
          }
        },
        {
          props: { color: 'info' },
          style: { backgroundColor: 'transparent' }
        }
      ],
      defaultProps: { color: 'info' }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: Colors.blue800,
            '&:hover': {
              backgroundColor: Colors.blue200
            }
          }
        }
      ],
      styleOverrides: {
        text: { fontWeight: 700, textDecorationLine: 'none' }
      },
      defaultProps: { variant: 'contained', color: 'primary' }
    },
    MuiAppBar: {
      styleOverrides: {
        root: { outline: `1px solid ${Colors.blue800}` },
        colorDefault: { backgroundColor: Colors.white }
      },
      defaultProps: { elevation: 0, color: 'default' }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: Colors.gray900,
          fontSize: 16,
          input: {
            '&::placeholder': {
              color: Colors.blue200,
              fontSize: 16
            }
          }
        }
      }
    }
  },
  typography: {
    allVariants: { color: Colors.blue800, fontFamily: 'Raleway, Arial', letterSpacing: '.01rem', lineHeight: 1 }
  },
  shape: { borderRadius: 8 },
  palette: {
    text: {
      primary: '#4f4f4f'
    },
    primary: {
      main: Colors.blue800
    },
    secondary: { main: Colors.orange500 }
  }
});

export function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

