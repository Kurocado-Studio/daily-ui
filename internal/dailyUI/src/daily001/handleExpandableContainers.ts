import type { AnimationControls } from 'framer-motion';

export interface ExpandableContainersOptions {
  loginContainer: AnimationControls;
  signupContainer: AnimationControls;
  onAnimationEnd: (animationContainerEnd: string) => void;
  target: string;
}

const transition = { type: 'spring', stiffness: 210, damping: 30 };

export const handleExpandableContainers = (
  payload: ExpandableContainersOptions,
): void => {
  const { loginContainer, target, signupContainer, onAnimationEnd } = payload;

  const loginTargetW = target === 'login' ? '85vw' : '15vw';
  const signupTargetW = target === 'signup' ? '85vw' : '15vw';

  loginContainer
    .start({
      width: loginTargetW,
      transition,
    })
    .then((): void => onAnimationEnd(target));

  signupContainer
    .start({
      width: signupTargetW,
      transition,
    })
    .then((): void => onAnimationEnd(target));
};
