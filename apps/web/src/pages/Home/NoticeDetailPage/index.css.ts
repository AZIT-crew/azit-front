import { vars, typography } from '@azit/design-system';
import { style } from '@vanilla-extract/css';

import { layoutStyles } from '@/shared/styles/layout.css';

export const headerWrapper = style([layoutStyles.headerWrapper]);

export const mainContainer = style([
  layoutStyles.mainContainer,
  {
    padding: '24px 20px',
    backgroundColor: 'transparent',
  },
]);

export const title = style([
  typography.body.b1,
  {
    color: vars.colors.black,
    margin: 0,
    marginBottom: 8,
  },
]);

export const date = style([
  typography.body.b4,
  {
    color: vars.colors.gray60,
    margin: 0,
    marginBottom: 20,
  },
]);

export const content = style([
  typography.body.b2,
  {
    color: vars.colors.gray70,
    margin: 0,
    whiteSpace: 'pre-line',
  },
]);
