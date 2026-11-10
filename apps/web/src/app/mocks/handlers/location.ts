import { http, HttpResponse } from 'msw';

import { mockLocationSearchResults } from '@/shared/mock/schedule-location';

export const locationHandlers = [
  http.get('*/locations/search', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
      result: mockLocationSearchResults,
    });
  }),
];
