import { Card, CardContent } from '@mui/material';
import { PropsWithChildren } from 'react';

export function CardDmz({ children }: PropsWithChildren) {
  return (
    <Card sx={{ borderRadius: 4, maxWidth: 480 }}>
      <CardContent sx={{ m: '2rem', mb: '4rem' }}>{children} </CardContent>
    </Card>
  );
}

