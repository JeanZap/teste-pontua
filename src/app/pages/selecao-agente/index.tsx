import { BackgroundDMZ } from '../../components/BackgroundDMZ';
import { useSelecaoAgenteController } from './SelecaoAgenteController';
import { CardSelecaoAgente } from './components/CardSelecaoAgente';

export function SelecaoAgente() {
  const { characteres, carregando, selecionarAgente } = useSelecaoAgenteController();

  return (
    <BackgroundDMZ>
      <CardSelecaoAgente characteres={characteres} carregando={carregando} selecionarAgente={selecionarAgente} />
    </BackgroundDMZ>
  );
}

