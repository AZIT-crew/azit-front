export interface LoginInfoAccount {
  id: 'kakao' | 'apple';
  label: string;
  iconSrc: string;
  isConnected: boolean;
  connectedAt?: string;
  maskedEmail?: string;
}

export const mockLoginInfoAccounts: LoginInfoAccount[] = [
  {
    id: 'kakao',
    label: '카카오',
    iconSrc: '/icons/icon-kakao-badge.svg',
    isConnected: true,
    connectedAt: '2026.02.26 연동',
    maskedEmail: 'az**@kakao.com',
  },
  {
    id: 'apple',
    label: 'Apple',
    iconSrc: '/icons/icon-apple-badge.svg',
    isConnected: false,
  },
];
