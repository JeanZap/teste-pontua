import { Character } from '../models/CharactersListDto';
import { Comics } from '../models/ComicListDto';
import { MarvelRespoonseDto } from '../models/MarvelRespoonseDto';
import { useAxios } from '../utils/hooks/Axios';
import { publicKey } from '../utils/keys';

export function useMarvelService() {
  const axios = useAxios();

  const baseUrl = `https://gateway.marvel.com:443/v1/public/`;
  const urlCharacters = 'characters';

  async function buscarPersonagens() {
    return await axios
      .get<MarvelRespoonseDto<Character>>(`${baseUrl}${urlCharacters}?apikey=${publicKey}`)
      .then(({ data }) => data.data.results);
  }

  async function buscarPorNome(nomeParcial: string) {
    return await axios
      .get<MarvelRespoonseDto<Character>>(
        `${baseUrl}${urlCharacters}?apikey=${publicKey}&nameStartsWith=${nomeParcial}`
      )
      .then(({ data }) => data.data.results);
  }

  async function buscarComicsPersonagem(id: string | number) {
    return await axios
      .get<MarvelRespoonseDto<Comics>>(`${baseUrl}${urlCharacters}/${id}/comics?apikey=${publicKey}`)
      .then(({ data }) => data.data.results);
  }

  async function buscarPersonagensPaginado(pagina: number) {
    const offset = 10 * pagina;

    return await axios
      .get<MarvelRespoonseDto<Character>>(`${baseUrl}${urlCharacters}?limit=10&offset=${offset}&apikey=${publicKey}`)
      .then(({ data }) => data.data);
  }

  async function buscarPersonagem(id?: string) {
    return await axios
      .get<MarvelRespoonseDto<Character>>(`${baseUrl}${urlCharacters}/${id}?apikey=${publicKey}`)
      .then(({ data }) => data.data.results.pop());
  }

  return { buscarPersonagensPaginado, buscarComicsPersonagem, buscarPersonagens, buscarPersonagem, buscarPorNome };
}

