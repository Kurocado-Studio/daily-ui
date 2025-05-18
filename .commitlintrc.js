import { commitLintConfig } from '@kurocado-studio/styleguide';

export default {
  rules: {
    ...commitLintConfig.rules,
    'footer-max-line-length': [0, 'always', 100],
  },
};
