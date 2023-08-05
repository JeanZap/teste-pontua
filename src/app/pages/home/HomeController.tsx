import { useMarvelService } from '../../../services/MarvelService';
import { useObterDadosIniciais } from '../../../utils/hooks/obterDadosIniciais';

export function useHomeController() {
  const marvelService = useMarvelService();

  const { dado, carregando, reobter } = useObterDadosIniciais(() => marvelService.buscarPersonagensPaginado(0));

  const characters = dado?.results;
  const total = dado?.total;

  const obterPaginado = (pagina: number) => reobter(() => marvelService.buscarPersonagensPaginado(pagina));

  return { characters, total, carregando, obterPaginado };
}

