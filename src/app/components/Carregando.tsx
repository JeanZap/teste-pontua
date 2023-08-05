import { CircularProgress, Modal } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
  aberto?: boolean;
}

export const Carregando = ({ aberto = true }: Props) => (
  <Modal open={aberto}>
    <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Box>
  </Modal>
);
