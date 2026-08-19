import type { OptionalTermsApiResponse } from '@/entities/User/model';

import { auth } from '@/shared/api/apiClient';
import { END_POINT } from '@/shared/constants/endpoint';

export const getOptionalTerms = () => {
  return auth.get<OptionalTermsApiResponse>(END_POINT.MEMBER.OPTIONAL_TERMS);
};
