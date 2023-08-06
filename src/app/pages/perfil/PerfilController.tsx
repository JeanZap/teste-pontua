import { useParams } from 'react-router-dom';
import { useMarvelService } from '../../../services/MarvelService';
import { useObterDadosIniciais } from '../../../utils/hooks/obterDadosIniciais';

export function usePerfilController() {
  const marvelService = useMarvelService();
  const { id } = useParams<{ id: string }>();

  const { dado, carregando } = useObterDadosIniciais(() => marvelService.buscarPersonagem(id)); // marvelService.buscarPersonagensPaginado(0));

  const characters = dado;

  return { personagem: characters, carregando };
}

