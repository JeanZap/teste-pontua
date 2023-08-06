import { BackgroundDMZ } from '../../components/BackgroundDMZ';
import { useSelecaoAgenteController } from './SelecaoAgenteController';
import { CardSelecaoAgente } from './components/CardSelecaoAgente';

export function SelecaoAgente() {
  const { characteres, carregando, buscarPersonagens } = useSelecaoAgenteController();

  return (
    <BackgroundDMZ>
      <CardSelecaoAgente characteres={characteres} carregando={carregando} buscarPersonagens={buscarPersonagens} />
    </BackgroundDMZ>
  );
}

