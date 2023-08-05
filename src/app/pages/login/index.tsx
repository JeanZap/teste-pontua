import { BackgroundDMZ } from '../../components/BackgroundDMZ';
import { LoginController } from './LoginController';
import { CardUsuarioSenha } from './components/CardUsuarioSenha';

export function Login() {
  const { erro, carregando, login } = LoginController();

  return (
    <BackgroundDMZ>
      <CardUsuarioSenha erro={erro} carregando={carregando} login={login} />
    </BackgroundDMZ>
  );
}

