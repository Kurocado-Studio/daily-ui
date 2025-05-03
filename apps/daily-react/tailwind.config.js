import { kurocadoStudioTheme } from '@kurocado-studio/ui/theme';

export const content = [
  './src/**/*.{ts,tsx}',
  './stories/**/*.{ts,tsx}',
  './node_modules/@kurocado-studio/ui/**/*.js',
];

export const presets = [
  {
    theme: kurocadoStudioTheme,
    plugins: [require('tailwindcss-animate')],
    darkMode: 'class',
  },
];
