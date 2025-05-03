import { type Side, expandContainers } from '@kurocado-studio/daily-ui-domain';
import { Card, Input } from '@kurocado-studio/ui/react';
import { useAnimationControls } from 'motion/react';
import React from 'react';

export function ExpandableCards(): React.ReactNode {
  const leftContainer = useAnimationControls();
  const rightContainer = useAnimationControls();

  const onAnimationDone = (): void => {};

  const onHover = (side: Side): void => {
    expandContainers({
      leftContainer,
      onAnimationDone,
      rightContainer,
      hovered: side,
    });
  };

  return (
    <div className='flex h-screen w-full overflow-hidden'>
      <Card
        animate={leftContainer}
        initial={{ width: '50vw' }}
        onMouseEnter={() => onHover('left')}
        className='flex items-center justify-center'
      >
        <Card.Body>
          <p>Card.Body</p>
        </Card.Body>
      </Card>
      <Card
        animate={rightContainer}
        initial={{ width: '50vw' }}
        onMouseEnter={() => onHover('right')}
        className='flex items-center justify-center'
      >
        <Card.Body>
          <h2>Right</h2>
          <Input />
        </Card.Body>
      </Card>
    </div>
  );
}
