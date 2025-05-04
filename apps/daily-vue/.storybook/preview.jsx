/* eslint import/no-default-export: 0 */
import designTokens from '@internal/config/tokens';
import '@kurocado-studio/ui/typography.css';
import { ThemeProvider } from '@kurocado-studio/ui/vue';

import '../tailwind.css';

const LIGHT_THEME = 'Light setup';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(?<temp1>background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (storyFn, context) => {
    const selectedTheme = context.globals.theme === LIGHT_THEME;

    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', !selectedTheme);
    }

    return {
      components: { ThemeProvider, Story: storyFn() },
      setup() {
        return { designTokens };
      },
      template: `
        <ThemeProvider :theme="designTokens">
          <Story />
        </ThemeProvider>
      `,
    };
  },
];

export default preview;
