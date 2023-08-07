import { mdiAt, mdiEyeOffOutline, mdiEyeOutline, mdiLoginVariant, mdiShieldKeyOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Box, Button, CircularProgress, IconButton, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginRequestDto } from '../../../../models/LoginRequestDto';
import { Paths } from '../../../../routes/paths';
import { Colors } from '../../../../utils/colors';
import { CardDmz } from '../../../components/CardDmz';

const inicial: LoginRequestDto = { usuario: '', senha: '' };

interface Props {
  erro: string;
  carregando: boolean;
  login(requisicaoLogin: LoginRequestDto): void;
}

export function CardUsuarioSenha({ erro, carregando, login }: Props) {
  const [requisicao, setRequisicao] = useState<LoginRequestDto>(inicial);
  const [exibirSenha, setExibirSenha] = useState<boolean>(false);

  const definirUsuario = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setRequisicao((requisicao) => ({ ...requisicao, usuario: evento.target.value }));
  const definirSenha = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setRequisicao((requisicao) => ({ ...requisicao, senha: evento.target.value }));

  const iconeSenha = exibirSenha ? <Icon path={mdiEyeOutline} size={1} /> : <Icon path={mdiEyeOffOutline} size={1} />;
  const typeSenha = exibirSenha ? 'text' : 'password';

  const requerirLogin = () => login(requisicao);

  const toggleExibirSenha = () => setExibirSenha(!exibirSenha);

  return (
    <CardDmz>
      <Typography display="inline" color={Colors.blue800} fontWeight={700} fontSize={36} letterSpacing={-3}>
        <b>Bem-vindo</b>
      </Typography>
      <Typography display="inline" fontFamily="emoji" color={Colors.orange500} fontWeight={700} fontSize={36}>
        .
      </Typography>

      <Typography mt="0.75rem" color={Colors.gray500} fontSize={16}>
        informe as suas credenciais de acesso ao portal
      </Typography>

      <TextField
        label="E-mail"
        placeholder="Informe seu e-mail"
        fullWidth
        sx={{
          mt: '1rem'
        }}
        InputProps={{
          endAdornment: (
            <IconButton disabled>
              <Icon path={mdiAt} size={1} />
            </IconButton>
          )
        }}
        onChange={definirUsuario}
      />
      <TextField
        label="Senha"
        placeholder="Informe sua senha"
        type={typeSenha}
        fullWidth
        sx={{ mt: '1rem' }}
        InputProps={{ endAdornment: <IconButton onClick={toggleExibirSenha}>{iconeSenha}</IconButton> }}
        onChange={definirSenha}
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
        onClick={requerirLogin}>
        <Typography
          mr="1rem"
          sx={{
            color: Colors.white,
            fontSize: 24,
            textDecoration: 'none',
            textTransform: 'none',
            mr: '.5rem',
            fontWeight: 700
          }}>
          entrar
        </Typography>
        {carregando ? <CircularProgress /> : <Icon path={mdiLoginVariant} color={Colors.white} size={1} />}
      </Button>
      <Link to={Paths.esqueciSenha}>
        <Box ml="auto" mt="1rem" display="flex" justifyContent="end" alignItems="center">
          <Icon path={mdiShieldKeyOutline} color={Colors.orange500} size={1} />

          <Typography
            color={Colors.orange500}
            sx={{
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              textAlign: 'end',
              textIndent: 4
            }}>
            Esqueceu a senha?
          </Typography>
        </Box>
      </Link>
    </CardDmz>
  );
}

