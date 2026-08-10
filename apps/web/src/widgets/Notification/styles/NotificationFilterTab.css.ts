import { vars, typography } from '@azit/design-system';
import { style } from '@vanilla-extract/css';

export const tabsContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  width: '100%',
  overflowX: 'auto',
});

const tabBase = style([
  typography.body.b3,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 12px',
    borderRadius: 24,
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    letterSpacing: '-0.35px',
  },
]);

export const activeTab = style([
  tabBase,
  {
    backgroundColor: vars.colors.blue100,
    color: vars.colors.white,
  },
]);

export const inactiveTab = style([
  tabBase,
  {
    backgroundColor: vars.colors.gray10,
    color: vars.colors.gray60,
  },
]);
