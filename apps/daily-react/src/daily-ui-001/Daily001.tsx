import { Card, Input } from '@kurocado-studio/ui/react';
import React from 'react';

export function Daily001(): React.ReactNode {
  return (
    <div className='flex h-screen w-full overflow-hidden'>
      <Card className='flex items-center justify-center'>
        <Card.Body>
          <p>Card Body</p>
        </Card.Body>
      </Card>
      <Card className='flex items-center justify-center'>
        <Card.Body>
          <h2>Right</h2>
          <Input />
        </Card.Body>
      </Card>
    </div>
  );
}
