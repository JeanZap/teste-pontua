import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';
import { LoginRequestDto } from '../../../models/LoginRequestDto';
import { Paths } from '../../../routes/paths';
import { useAuthService } from '../../../services/AuthService';
import { LoginRequestValidation } from './components/validations';

export function LoginController() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const auth = useAuthService();

  const [carregando, setCarregando] = useState<boolean>(false);
  const [erro, setErro] = useState<string>('');

  async function login(requisicaoLogin: LoginRequestDto) {
    setCarregando(true);
    setErro('');

    try {
      await LoginRequestValidation.validate(requisicaoLogin);

      var token = await auth.login(requisicaoLogin);
      auth.definirToken(token);

      navigate(Paths.selecaoAgente);
    } catch (erro) {
      if (erro instanceof ValidationError) {
        enqueueSnackbar(erro.message, {
          variant: 'error',
          SnackbarProps: { style: { cursor: 'pointer' }, onClick: () => navigate(Paths.esqueciSenha) }
        });
        setErro(erro.message);
      } else {
        setErro('Houve um erro inesperado. Tente novamente.');
      }
      setCarregando(false);
    }
  }

  return { erro, carregando, login };
}

