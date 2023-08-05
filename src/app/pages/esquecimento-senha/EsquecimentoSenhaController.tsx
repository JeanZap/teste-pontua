import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';
import { Paths } from '../../../routes/paths';
import { useAuthService } from '../../../services/AuthService';
import { EmailValidation } from './components/validations';

export function EsquecimentoSenhaController() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const auth = useAuthService();

  const [carregando, setCarregando] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);
  const [erro, setErro] = useState<string>('');

  async function solicitarTrocaSenha(email: string) {
    setCarregando(true);
    setErro('');

    try {
      debugger
      await EmailValidation.validate(email);

      await auth.solicitarTrocaSenha(email);

      enqueueSnackbar('Verifique sua caixa e e-mails para concluir a troca de senha.', { variant: 'success' });

      setEnviado(true);
    } catch (erro) {
      if (erro instanceof ValidationError) {
        enqueueSnackbar(erro.message, {
          variant: 'error'
        });
        setErro(erro.message);
      } else {
        setErro('Houve um erro inesperado. Tente novamente.');
      }
    } finally {
      setCarregando(false);
    }
  }

  const irParaLogin = () => navigate(Paths.login);

  return { erro, carregando, enviado, solicitarTrocaSenha, irParaLogin };
}

