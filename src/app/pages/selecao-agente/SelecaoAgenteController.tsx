import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../routes/paths';
import { useMarvelService } from '../../../services/MarvelService';
import { useObterDadosIniciais } from '../../../utils/hooks/obterDadosIniciais';

export function useSelecaoAgenteController() {
  const { enqueueSnackbar } = useSnackbar();
  const marvelService = useMarvelService();
  const navigate = useNavigate();
  const { dado, carregando } = useObterDadosIniciais(marvelService.buscarPersonagens);

  async function selecionarAgente(idAgente: string) {
    if (!idAgente) {
      enqueueSnackbar('Selecione algum agente.', {
        variant: 'error'
      });
      return;
    }

    navigate(Paths.perfilAgente(idAgente));
  }

  return { characteres: dado, carregando, selecionarAgente };
}

