import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import { Autocomplete, Avatar, Box, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { ChangeEvent, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Character } from '../../models/CharactersListDto';
import { Paths } from '../../routes/paths';
import { useMarvelService } from '../../services/MarvelService';
import { Colors } from '../../utils/colors';

export function AutocompleteBuscaPersonagem() {
  const { enqueueSnackbar } = useSnackbar();
  const marveService = useMarvelService();
  const navigate = useNavigate();
  const location = useLocation();

  const [carregando, setCarregando] = useState<boolean>(false);
  const [dado, setDado] = useState<Character[]>();

  const timeout = useRef<NodeJS.Timeout>();

  const rotaHome = location.pathname === Paths.home;

  const personagens =
    dado?.map((personagem) => ({
      thumb: personagem.thumbnail.path + '.' + personagem.thumbnail.extension,
      nome: personagem.name,
      id: personagem.id
    })) ?? [];

  async function buscarPersonagens(evento: ChangeEvent<HTMLInputElement>) {
    if (timeout.current !== null) {
      clearTimeout(timeout.current);
    }

    setCarregando(true);

    timeout.current = setTimeout(async function () {
      try {
        const personagens = await marveService.buscarPorNome(evento.target.value);
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

  if (rotaHome)
    return (
      <Autocomplete
        popupIcon={null}
        options={personagens}
        color="error"
        sx={{ width: 300, mt: 2, color: Colors.blue200 }}
        disablePortal
        getOptionLabel={(option) => option.nome}
        noOptionsText="Sem opções"
        loadingText="Carregando"
        loading={carregando}
        renderOption={(props, option) => (
          <MenuItem {...props} value={option.id} key={option.id}>
            <Box display="flex" alignItems="center">
              <Avatar alt={option.nome} src={option.thumb} sx={{ mr: 1 }} />
              <Typography fontFamily="Inter" color={Colors.gray900}>
                {option.nome}
              </Typography>
            </Box>
          </MenuItem>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Icon path={mdiMagnify} color={Colors.blue200} size={1} />
                </InputAdornment>
              ),
              disableUnderline: true
            }}
            variant="standard"
            placeholder="Busque um agente"
            onChange={buscarPersonagens}
          />
        )}
        onChange={(e, idPersonagem) => navigate(Paths.perfilAgente(idPersonagem?.id))}
      />
    );

  return null;
}

