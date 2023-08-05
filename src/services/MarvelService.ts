import { Character } from '../models/CharactersListDto';
import { MarvelRespoonseDto } from '../models/MarvelRespoonseDto';
import { useAxios } from '../utils/hooks/Axios';
import { publicKey } from '../utils/keys';

export function useMarvelService() {
  const axios = useAxios();

  const baseUrl = `https://gateway.marvel.com:443/v1/public/`;

  async function buscarPersonagens() {
    const url = 'characters';

    return await axios
      .get<MarvelRespoonseDto<Character>>(`${baseUrl}${url}?apikey=${publicKey}`)
      .then(({ data }) => data.data.results);
  }

  async function buscarPersonagensPaginado(pagina: number) {
    const url = 'characters';
    const offset = 10 * pagina;

    return await axios
      .get<MarvelRespoonseDto<Character>>(`${baseUrl}${url}?limit=10&offset=${offset}&apikey=${publicKey}`)
      .then(({ data }) => data.data);
  }

  return { buscarPersonagensPaginado, buscarPersonagens };
}

