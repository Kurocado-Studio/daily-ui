/* eslint import/no-default-export: 0 */
import type { StorybookConfig } from '@storybook/vue3-vite';
import { dirname, join } from 'node:path';

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/experimental-addon-test'),
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.server = config.server || {};
    config.server.watch = {
      ...config.server.watch,
      usePolling: true,
      interval: 100,
    };
    return config;
  },
};
export default config;
