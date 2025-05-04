import type { AnimationControls } from 'framer-motion';

export const expandableContainersTransition = {
  type: 'spring',
  stiffness: 210,
  damping: 30,
};

export type Side = 'left' | 'right';

export interface ExpandContainersOptions {
  leftContainer: AnimationControls;
  rightContainer: AnimationControls;
  onAnimationDone: (containerSide: Side) => void;
  hovered: Side;
}

export const expandContainers = ({
  leftContainer,
  rightContainer,
  onAnimationDone,
  hovered,
}: ExpandContainersOptions): void => {
  const leftWidth = hovered === 'left' ? '90vw' : '10vw';
  const rightWidth = hovered === 'right' ? '90vw' : '10vw';

  Promise.all([
    leftContainer.start({
      width: leftWidth,
      transition: expandableContainersTransition,
    }),
    rightContainer.start({
      width: rightWidth,
      transition: expandableContainersTransition,
    }),
  ]).then(() => {
    onAnimationDone(hovered);
  });
};
