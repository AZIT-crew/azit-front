import { auth } from '@/shared/api/apiClient';
import type { ApiResponseWithoutResult } from '@/shared/api/baseTypes';
import type { LinkSocialAccountRequest } from '@/shared/api/models/auth';
import type { AuthProviderType } from '@/shared/auth/api/types';
import { END_POINT } from '@/shared/constants/endpoint';

export const postLinkSocialAccount = (
  provider: AuthProviderType,
  request: LinkSocialAccountRequest
) => {
  return auth.post<ApiResponseWithoutResult, LinkSocialAccountRequest>(
    END_POINT.AUTH.SOCIAL_ACCOUNT(provider),
    request
  );
};
