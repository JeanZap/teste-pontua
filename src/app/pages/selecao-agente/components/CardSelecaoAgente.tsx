import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { CharactersListDto } from '../../../../models/CharactersListDto';
import { Colors } from '../../../../utils/colors';

interface Props {
  characteres: CharactersListDto | undefined;
  carregando: boolean;
  selecionarAgente(idAgente: string): void;
}

export function CardSelecaoAgente({ characteres, carregando, selecionarAgente }: Props) {
  const [idAgente, setIdAgente] = useState<string>('');

  const selecionarAgenteInput = (evento: SelectChangeEvent) => setIdAgente(evento.target.value);

  const entrar = () => selecionarAgente(idAgente);

  return (
    <Card sx={{ borderRadius: 4, maxWidth: 480 }}>
      <CardContent sx={{ m: '2rem', mb: '4rem', display: 'flex', flexDirection: 'column' }}>
        <Typography display="inline" color={Colors.blue800} fontSize={36}>
          <b>Selecione o seu agente mais legal</b>
          <Typography display="inline" color={Colors.orange500} fontSize={36}>
            <b>.</b>
          </Typography>
        </Typography>

        <Typography mt="0.75rem" mb="1rem" color={Colors.gray500} fontSize={16}>
          Tenha a visão completa do seu agente.
        </Typography>

        <FormControl>
          <InputLabel id="label-select-agente">Selecione um agente</InputLabel>
          <Select
            labelId="label-select-agente"
            label="Selecione um agente"
            disabled={carregando}
            fullWidth
            onChange={selecionarAgenteInput}>
            {characteres?.map(({ id, thumbnail: { path, extension }, name }) => (
              <MenuItem value={id}>
                <Box display="flex" alignItems="center">
                  <Avatar alt={`${path}.${extension}`} src={`${path}.${extension}`} sx={{ mr: 1 }} />
                  <em>{name}</em>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          size="large"
          sx={{ alignSelf: 'end', bgcolor: Colors.blue800, mt: '1rem', p: '1rem', textDecoration: 'none' }}
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

