import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import { Button, Pagination, PaginationItem } from '@mui/material';
import { Colors } from '../../utils/colors';

interface Props {
  total?: number;
  buscarPagina(pagina: number | null): void;
}

export function Paginacao({ total, buscarPagina }: Props) {
  function MapearTipo(tipo: string) {
    switch (tipo) {
      case 'first':
        return 'first';
      case 'last':
        return 'last';
      case 'next':
        return 'Próxima';
      case 'previous':
        return 'Anterior';
      default:
        return '';
    }
  }

  return (
    <Pagination
      count={Math.floor((total ?? 0) / 10)}
      variant="outlined"
      shape="rounded"
      onChange={(e, pagina) => buscarPagina(pagina)}
      boundaryCount={2}
      renderItem={(item) => {
        if (item.type === 'page') {
          return (
            <PaginationItem
              {...item}
              sx={{ m: 0, borderRadius: 0, border: '1px solid ' + Colors.gray100, width: 36, height: 36 }}
            />
          );
        }

        if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
          return <>...</>;
        }

        const label = MapearTipo(item.type);
        const proxima = label === 'Próxima';

        if (proxima)
          return (
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                backgroundColor: 'transparent',
                color: Colors.blue600,
                fontSize: 14,
                fontWeight: 400,
                border: '1px solid ' + Colors.gray100,
                borderRadius: '0 .5rem .5rem 0'
              }}
              disableElevation
              onClick={item.onClick}>
              {label}
              <Icon path={mdiArrowRight} size={0.8} color={Colors.blue600} />
            </Button>
          );

        return (
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              backgroundColor: 'transparent',
              color: Colors.blue600,
              fontSize: 14,
              fontWeight: 400,
              border: '1px solid ' + Colors.gray100,
              borderRadius: '.5rem 0 0 .5rem'
            }}
            disableElevation
            onClick={item.onClick}>
            <Icon path={mdiArrowLeft} size={0.8} color={Colors.blue600} />
            {label}
          </Button>
        );
      }}
    />
  );
}

