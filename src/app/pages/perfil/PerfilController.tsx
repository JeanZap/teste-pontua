import { Character } from '../../../models/CharactersListDto';
import { useMarvelService } from '../../../services/MarvelService';
import { useObterDadosIniciais } from '../../../utils/hooks/obterDadosIniciais';

export function usePerfilController() {
  const marvelService = useMarvelService();

  const { dado, carregando } = useObterDadosIniciais(() => Promise.resolve({ results: [] as Character[], total: 1 })); // marvelService.buscarPersonagensPaginado(0));

  const characters = dado?.results;
  const total = dado?.total;

  return { characters, total, carregando };
}

