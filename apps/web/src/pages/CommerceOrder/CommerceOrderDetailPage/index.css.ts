import { style } from '@vanilla-extract/css';

import { layoutStyles } from '@/shared/styles/layout.css';

export const headerWrapper = style([layoutStyles.headerWrapper]);

export const mainContainer = style([
  layoutStyles.mainContainer,
  {
    backgroundColor: 'transparent',
    gap: '20px',
    padding: '16px',
    boxSizing: 'border-box',
  },
]);

export const buttonContainer = style({
  display: 'flex',
  marginTop: '12px',
  gap: '10px',
  width: '100%',
});
