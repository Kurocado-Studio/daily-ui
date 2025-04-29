import { handleExpandableContainers } from '@kurocado-studio/daily-ui-domain';
import clsx from 'clsx';
import { motion, useAnimationControls } from 'motion/react';
import React, { useCallback, useEffect, useState } from 'react';

export function LoginSignupCards(): React.ReactNode {
  const [active, setActive] = useState<'login' | 'signup'>('login');

  const loginContainer = useAnimationControls();
  const signupContainer = useAnimationControls();

  const handleContainers = useCallback((): void => {
    handleExpandableContainers({
      loginContainer,
      signupContainer,
      onAnimationEnd,
      target: active,
    });
  }, [active, loginContainer, signupContainer]);

  useEffect(() => {
    handleContainers();
  }, [handleContainers]);

  const onAnimationEnd = (currentActiveTab: string): void => {
    const nextActiveTab = currentActiveTab === 'signup' ? 'login' : 'signup';
    setActive(nextActiveTab);
  };

  return (
    <div className='flex h-screen w-full overflow-hidden'>
      <motion.div
        animate={loginContainer}
        initial={{ width: '90vw' }}
        className={clsx(
          'flex items-center justify-center bg-slate-800 text-white transition-colors',
          active === 'login' ? 'cursor-default' : 'cursor-pointer opacity-60',
        )}
        onMouseEnter={handleContainers}
      >
        {active === 'login' ? (
          <LoginForm />
        ) : (
          <h2 className='text-xl'>Login</h2>
        )}
      </motion.div>
      <motion.div
        animate={signupContainer}
        initial={{ width: '10vw' }}
        className={clsx(
          'flex items-center justify-center bg-pink-600 text-white transition-colors',
          active === 'signup' ? 'cursor-default' : 'cursor-pointer opacity-60',
        )}
        onMouseEnter={handleContainers}
      >
        {active === 'signup' ? (
          <SignupForm />
        ) : (
          <h2 className='text-xl'>SignUp</h2>
        )}
      </motion.div>
    </div>
  );
}

function LoginForm(): React.ReactNode {
  return (
    <div className='p-8'>
      <h1 className='mb-4 text-3xl font-semibold'>Login</h1>
    </div>
  );
}
function SignupForm(): React.ReactNode {
  return (
    <div className='p-8'>
      <h1 className='mb-4 text-3xl font-semibold'>Sign&nbsp;up</h1>
    </div>
  );
}
