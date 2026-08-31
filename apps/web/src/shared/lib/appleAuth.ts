import { APPLE_AUTHORIZE_URL } from '@/shared/constants/url';

export const buildAppleAuthorizeUrl = (state: string) =>
  `${APPLE_AUTHORIZE_URL}&state=${encodeURIComponent(state)}`;
