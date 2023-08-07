import { Button, Typography } from '@mui/material';
import { Colors } from '../../../../utils/colors';
import { CardDmz } from '../../../components/CardDmz';

interface Props {
  irParaLogin(): void;
}

export function CardEnviado({ irParaLogin }: Props) {
  return (
    <CardDmz>
      <Typography display="inline" color={Colors.blue800} fontSize={36}>
        <b>Tudo certo</b>
      </Typography>
      <Typography display="inline" color={Colors.orange500} fontSize={36}>
        <b>;)</b>
      </Typography>

      <Typography mt="2rem" color={Colors.gray500} fontSize={16}>
        Foi enviado um e-mail para você com instruções de como redefinir a sua senha.
      </Typography>

      <Button
        size="large"
        fullWidth
        sx={{
          bgcolor: Colors.blue800,
          mt: '2rem',
          p: '1rem'
        }}
        onClick={irParaLogin}>
        <Typography
          mr="1rem"
          sx={{
            color: Colors.white,
            fontSize: 24,
            textTransform: 'none',
            mr: '.5rem',
          }}>
          voltar para o login
        </Typography>
      </Button>
    </CardDmz>
  );
}

