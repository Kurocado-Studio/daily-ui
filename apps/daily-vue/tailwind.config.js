import { kurocadoStudioTheme } from '@kurocado-studio/ui/theme';

export const content = [
  './src/**/*.{ts,tsx}',
  './stories/**/*.{ts,tsx}',
  './node_modules/@kurocado-studio/ui/dist/**/*.js',
  './node_modules/@kurocado-studio/daily-ui-domain/dist/**/*.js',
];

export const theme = kurocadoStudioTheme;
export const darkMode = 'class';
export const plugins = [require('tailwindcss-animate')];
