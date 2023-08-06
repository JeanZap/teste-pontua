import { useParams } from 'react-router-dom';
import { Character } from '../../../../models/CharactersListDto';
import { useMarvelService } from '../../../../services/MarvelService';
import { useObterDadosIniciais } from '../../../../utils/hooks/obterDadosIniciais';
import { Carregando } from '../../../components/Carregando';

interface Props {
  personagem?: Character;
}

export function Authors({ personagem }: Props) {
  const marvelService = useMarvelService();
  const { id } = useParams<{ id: string }>();

  const { dado, carregando } = useObterDadosIniciais(() =>
    marvelService.buscarComicsPersonagem(personagem?.id ?? id ?? '')
  );

  const authorsSet = new Set<string>();
  dado?.forEach((comic) => comic.creators.items.forEach((creator) => authorsSet.add(creator.name)));
  const authors = Array.from(authorsSet);

  if (!personagem && !authorsSet) return null;

  if (carregando) {
    return <Carregando />;
  }

  return (
    <ul>
      <li>Stan Lee</li>
      <li>Steve Ditko</li>
      {authors.map((nome) => (
        <li>{nome}</li>
      ))}
    </ul>
  );
}

