import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharactersListDto } from '../../../../models/CharactersListDto';
import { Paths } from '../../../../routes/paths';
import { Colors } from '../../../../utils/colors';

interface Props {
  characteres: CharactersListDto | undefined;
  carregando: boolean;
  buscarPersonagens(evento: ChangeEvent<HTMLInputElement>): Promise<void>;
}

export function CardSelecaoAgente({ characteres, carregando, buscarPersonagens }: Props) {
  const navigate = useNavigate();

  const [idAgente, setIdAgente] = useState<string>('');

  const personagens =
    characteres?.map((personagem) => ({
      thumb: personagem.thumbnail.path + '.' + personagem.thumbnail.extension,
      nome: personagem.name,
      id: personagem.id
    })) ?? [];

  function selecionarAgente(
    evento: React.SyntheticEvent<Element, Event>,
    agente: {
      thumb: string;
      nome: string;
      id: number;
    } | null
  ) {
    if (agente) {
      setIdAgente(String(agente.id));
    }
  }

  const entrar = () => navigate(Paths.perfilAgente(idAgente));

  return (
    <Card sx={{ borderRadius: 4, maxWidth: 480 }}>
      <CardContent sx={{ m: '2rem', mb: '2rem', display: 'flex', flexDirection: 'column' }}>
        <Typography display="inline" color={Colors.blue800} fontSize={36} letterSpacing={-2}>
          <b>Selecione o seu agente mais legal</b>
          <Typography display="inline" fontFamily="emoji" color={Colors.orange500} fontSize={36}>
            <b>.</b>
          </Typography>
        </Typography>

        <Typography mt="0.75rem" mb="1rem" color={Colors.gray500} fontSize={16}>
          Tenha a visão completa do seu agente.
        </Typography>

        <Autocomplete
          options={personagens}
          sx={{ color: Colors.blue200 }}
          disablePortal
          getOptionLabel={(option) => option.nome}
          noOptionsText="Sem opções"
          loadingText="Carregando"
          color="primary"
          disableClearable
          fullWidth
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
              placeholder="Busque um agente"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                disableUnderline: true
              }}
              fullWidth
              onChange={buscarPersonagens}
            />
          )}
          onChange={selecionarAgente}
        />

        <Button
          size="medium"
          sx={{ alignSelf: 'end', bgcolor: Colors.blue800, mt: '1rem', p: 2, textDecoration: 'none' }}
          disabled={carregando}
          onClick={entrar}>
          <Typography
            mr="1rem"
            sx={{
              color: Colors.white,
              fontSize: 24,
              textDecoration: 'none',
              textTransform: 'none',
              mr: '.5rem'
            }}>
            Entrar
          </Typography>
          {carregando && <CircularProgress color="secondary" />}
        </Button>
      </CardContent>
    </Card>
  );
}

