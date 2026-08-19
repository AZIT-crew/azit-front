import type {
  OptionalTermsApiResponse,
  UpdateOptionalTermsRequest,
} from '@/entities/User/model';

import { auth } from '@/shared/api/apiClient';
import { END_POINT } from '@/shared/constants/endpoint';

export const updateOptionalTerms = (body: UpdateOptionalTermsRequest) => {
  return auth.patch<OptionalTermsApiResponse, UpdateOptionalTermsRequest>(
    END_POINT.MEMBER.OPTIONAL_TERMS,
    body
  );
};
