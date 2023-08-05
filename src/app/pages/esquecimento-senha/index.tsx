import { BackgroundDMZ } from '../../components/BackgroundDMZ';
import { EsquecimentoSenhaController } from './EsquecimentoSenhaController';
import { CardEmail } from './components/CardEmail';
import { CardEnviado } from './components/CardEnviado';

export function EsquecimentoSenha() {
  const { carregando, enviado, erro, solicitarTrocaSenha, irParaLogin } = EsquecimentoSenhaController();

  if (enviado)
    return (
      <BackgroundDMZ>
        <CardEnviado irParaLogin={irParaLogin} />
      </BackgroundDMZ>
    );

  return (
    <BackgroundDMZ>
      <CardEmail erro={erro} carregando={carregando} solicitarTrocaSenha={solicitarTrocaSenha} />
    </BackgroundDMZ>
  );
}

