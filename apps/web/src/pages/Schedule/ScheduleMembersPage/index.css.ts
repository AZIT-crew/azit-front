import { style } from '@vanilla-extract/css';

export const contentWrapper = style({
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: '12px 20px',
  width: '100%',
  boxSizing: 'border-box',
});

export const headerSection = style({
  flexShrink: 0,
  width: '100%',
});

export const memberList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: '100%',
});

export const shareButton = style({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
