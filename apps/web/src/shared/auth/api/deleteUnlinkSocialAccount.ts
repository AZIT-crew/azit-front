import { auth } from '@/shared/api/apiClient';
import type { ApiResponseWithoutResult } from '@/shared/api/baseTypes';
import type { AuthProviderType } from '@/shared/auth/api/types';
import { END_POINT } from '@/shared/constants/endpoint';

export const deleteUnlinkSocialAccount = (provider: AuthProviderType) => {
  return auth.delete<ApiResponseWithoutResult>(
    END_POINT.AUTH.SOCIAL_ACCOUNT(provider),
    undefined
  );
};
