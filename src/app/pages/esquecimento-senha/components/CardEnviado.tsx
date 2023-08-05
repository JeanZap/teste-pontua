import { Button, Card, CardContent, Typography } from '@mui/material';
import { Colors } from '../../../../utils/colors';

interface Props {
  irParaLogin(): void;
}

export function CardEnviado({ irParaLogin }: Props) {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent sx={{ m: '2rem', mb: '4rem' }}>
        <Typography display="inline" color={Colors.blue800} fontSize={36}>
          <b>Tudo certo</b>
        </Typography>
        <Typography display="inline" color={Colors.orange500} fontSize={36}>
          <b>;)</b>
        </Typography>

        <Typography mt="0.75rem" color={Colors.gray500} fontSize={16}>
          Foi enviado um e-mail para você com instruções de como redefinir a sua senha.
        </Typography>

        <Button
          size="large"
          fullWidth
          sx={{
            bgcolor: Colors.blue800,
            mt: '1rem',
            p: '1rem'
          }}
          onClick={irParaLogin}>
          <Typography
            mr="1rem"
            sx={{
              color: Colors.white,
              fontSize: 24,
              textTransform: 'none',
              mr: '.5rem'
            }}>
            voltar para o login
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
}

