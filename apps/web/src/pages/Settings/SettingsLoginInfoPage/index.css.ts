import { vars, typography } from '@azit/design-system';
import { style } from '@vanilla-extract/css';

import { layoutStyles } from '@/shared/styles/layout.css';

export const headerWrapper = style([layoutStyles.headerWrapper]);

export const mainContainer = style([
  layoutStyles.mainContainer,
  {
    padding: '24px 20px 0',
    backgroundColor: 'transparent',
  },
]);

export const guideText = style([
  typography.body.b3,
  {
    color: vars.colors.gray60,
    paddingLeft: 4,
    marginBottom: 8,
  },
]);

export const accountList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: '100%',
});

export const accountCard = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '16px 20px',
  borderRadius: 16,
  backgroundColor: vars.colors.white,
});

export const accountInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const providerIcon = style({
  width: 44,
  height: 44,
  flexShrink: 0,
});

export const accountTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const accountNameRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const accountName = style([
  typography.body.b2,
  {
    color: vars.colors.black,
  },
]);

export const accountMeta = style([
  typography.body.b4,
  {
    color: vars.colors.gray60,
  },
]);

const actionButtonBase = style([
  typography.body.b3,
  {
    borderRadius: 8,
    padding: '6px 10px',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
  },
]);

export const actionButtonConnected = style([
  actionButtonBase,
  {
    backgroundColor: vars.colors.gray10,
    color: vars.colors.gray60,
  },
]);

export const actionButtonDisconnected = style([
  actionButtonBase,
  {
    backgroundColor: vars.colors.blue80,
    color: vars.colors.white,
  },
]);
