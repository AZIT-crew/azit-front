import { vars, typography } from '@azit/design-system';
import { style } from '@vanilla-extract/css';

export const itemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  backgroundColor: vars.colors.white,
  cursor: 'pointer',
  borderBottom: `0.5px solid ${vars.colors.gray20}`,
});

export const unread = style({
  backgroundColor: '#E3EEFB',
});

export const row = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 10,
  width: '100%',
  padding: '16px 20px',
});

export const leftContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const iconImage = style({
  width: 44,
  height: 44,
  borderRadius: '50%',
  flexShrink: 0,
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 2,
});

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  minWidth: 0,
  width: '100%',
});

export const runTypeChip = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  height: 22,
  width: 42,
  padding: '3.574px 7.149px',
  borderRadius: 8,
  fontFamily: vars.typography.fontFamily.primary,
  fontSize: 10.72,
  lineHeight: 1.4,
  letterSpacing: '-0.268px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
});

export const runTypeChipRegular = style({
  backgroundColor: vars.colors.blue60,
  color: vars.colors.white,
});

export const runTypeChipLightning = style({
  backgroundColor: vars.colors.secondary,
  color: vars.colors.black,
});

export const titleText = style([
  typography.body.b3,
  {
    fontWeight: 500,
    color: vars.colors.black,
    letterSpacing: '-0.35px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    minWidth: 0,
  },
]);

export const descriptionText = style([
  typography.body.b4,
  {
    color: vars.colors.gray60,
    letterSpacing: '-0.3px',
  },
]);

export const dateText = style([
  typography.body.b4,
  {
    color: vars.colors.gray60,
    letterSpacing: '-0.3px',
    flexShrink: 0,
    padding: '4px 0',
  },
]);
