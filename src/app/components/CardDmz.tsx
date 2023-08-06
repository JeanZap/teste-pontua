import { Card, CardContent } from '@mui/material';
import { PropsWithChildren } from 'react';

export function CardDmz({ children }: PropsWithChildren) {
  return (
    <Card sx={{ borderRadius: 4, maxWidth: 380 }}>
      <CardContent sx={{ m: '2rem 1rem 1rem 1rem', mb: '2rem' }}>{children} </CardContent>
    </Card>
  );
}

