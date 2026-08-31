import type { UpdateDeliveryAddressRequest } from '@/address/model';

import { auth } from '@/shared/api/apiClient';
import type { ApiResponse } from '@/shared/api/baseTypes';
import { END_POINT } from '@/shared/constants/endpoint';

export const updateDeliveryAddress = (
  addressId: number,
  payload: UpdateDeliveryAddressRequest
) => {
  return auth.put<ApiResponse<void>, UpdateDeliveryAddressRequest>(
    END_POINT.ADDRESS.DETAIL(addressId),
    payload
  );
};
