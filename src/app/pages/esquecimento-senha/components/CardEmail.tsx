import { mdiAt } from '@mdi/js';
import Icon from '@mdi/react';
import { Button, Card, CardContent, CircularProgress, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Colors } from '../../../../utils/colors';

interface Props {
  carregando: boolean;
  erro: string;
  solicitarTrocaSenha(email: string): void;
}

export function CardEmail({ carregando, erro, solicitarTrocaSenha }: Props) {
  const [email, setEmail] = useState<string>('');

  const definirEmail = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(evento.target.value);

  const trocarSenha = () => solicitarTrocaSenha(email);

  return (
    <Card sx={{ borderRadius: 4, maxWidth: 480 }}>
      <CardContent sx={{ m: '2rem', mb: '4rem' }}>
        <Typography display="inline" color={Colors.blue800} fontSize={36}>
          <b>Recuperar senha</b>
        </Typography>
        <Typography display="inline" color={Colors.orange500} fontSize={36}>
          .
        </Typography>

        <Typography mt="0.75rem" color={Colors.gray500} fontSize={16}>
          Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você
          redefinir a sua senha.
        </Typography>

        <TextField
          placeholder="Informe seu e-mail"
          fullWidth
          sx={{ mt: '.5rem' }}
          InputProps={{
            endAdornment: <Icon path={mdiAt} color={Colors.gray500} size={1} />
          }}
          onChange={definirEmail}
        />

        <Typography color="error">{erro}</Typography>

        <Button
          size="large"
          fullWidth
          sx={{
            bgcolor: Colors.blue800,
            mt: '1rem',
            p: '1rem',
            textDecoration: 'none'
          }}
          onClick={trocarSenha}>
          <Typography
            mr="1rem"
            sx={{
              color: Colors.white,
              fontSize: 24,
              textDecoration: 'none',
              textTransform: 'none',
              mr: '.5rem'
            }}>
            enviar link
          </Typography>
          {carregando && <CircularProgress />}
        </Button>
      </CardContent>
    </Card>
  );
}

