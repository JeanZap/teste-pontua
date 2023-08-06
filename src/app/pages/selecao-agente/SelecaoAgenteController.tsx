import { useSnackbar } from 'notistack';
import { ChangeEvent, useRef, useState } from 'react';
import { Character } from '../../../models/CharactersListDto';
import { useMarvelService } from '../../../services/MarvelService';

export function useSelecaoAgenteController() {
  const { enqueueSnackbar } = useSnackbar();
  const marvelService = useMarvelService();

  const [carregando, setCarregando] = useState<boolean>(false);
  const [dado, setDado] = useState<Character[]>();

  const timeout = useRef<NodeJS.Timeout>();

  async function buscarPersonagens(evento: ChangeEvent<HTMLInputElement>) {
    if (timeout.current !== null) {
      clearTimeout(timeout.current);
    }

    setCarregando(true);

    timeout.current = setTimeout(async function () {
      try {
        const personagens = await marvelService.buscarPorNome(evento.target.value);
        setDado(personagens);
      } catch (erro) {
        enqueueSnackbar({ message: 'Ocorreu um erro', variant: 'error' });
      } finally {
        if (timeout.current !== null) {
          clearTimeout(timeout.current);
        }
        setCarregando(false);
      }
    }, 300);
  }

  return { characteres: dado, carregando, buscarPersonagens };
}

