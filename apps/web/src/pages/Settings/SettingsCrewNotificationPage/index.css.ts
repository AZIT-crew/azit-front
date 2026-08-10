import { vars, typography } from '@azit/design-system';
import { style } from '@vanilla-extract/css';

import { layoutStyles } from '@/shared/styles/layout.css';

export const headerWrapper = style([layoutStyles.headerWrapper]);

export const mainContainer = style([
  layoutStyles.mainContainer,
  {
    padding: '24px 20px 24px',
    backgroundColor: 'transparent',
  },
]);

export const sectionTitle = style([
  typography.body.b2,
  {
    color: vars.colors.black,
    paddingLeft: 4,
    marginBottom: 8,
  },
]);

export const crewList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: '100%',
});
