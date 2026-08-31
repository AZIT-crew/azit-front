import { auth } from '@/shared/api/apiClient';
import type { ApiResponse } from '@/shared/api/baseTypes';
import type {
  AppleLinkSessionResult,
  CreateAppleLinkSessionRequest,
} from '@/shared/api/models/auth';
import { END_POINT } from '@/shared/constants/endpoint';

export const postCreateAppleLinkSession = (
  request: CreateAppleLinkSessionRequest
) => {
  return auth.post<
    ApiResponse<AppleLinkSessionResult>,
    CreateAppleLinkSessionRequest
  >(END_POINT.AUTH.APPLE_LINK_SESSION, request);
};
