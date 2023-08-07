import { mdiAt } from '@mdi/js';
import Icon from '@mdi/react';
import { Button, CircularProgress, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Colors } from '../../../../utils/colors';
import { CardDmz } from '../../../components/CardDmz';

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
    <CardDmz>
      <Typography display="inline" fontWeight={700} color={Colors.blue800} fontSize={36}>
        <b>Recuperar senha</b>
      </Typography>
      <Typography display="inline" fontWeight={700} color={Colors.orange500} fontSize={36}>
        .
      </Typography>

      <Typography mt="2rem" color={Colors.gray500} fontSize={16}>
        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você
        redefinir a sua senha.
      </Typography>

      <TextField
        placeholder="Informe seu e-mail"
        fullWidth
        sx={{ mt: '1rem', font: 'none' }}
        InputProps={{
          endAdornment: <Icon path={mdiAt} size={1} />
        }}
        onChange={definirEmail}
      />

      <Typography color="error">{erro}</Typography>

      <Button
        size="large"
        fullWidth
        disabled={!email}
        sx={{
          bgcolor: Colors.blue800,
          mt: '1rem',
          mb: 4,
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
    </CardDmz>
  );
}

