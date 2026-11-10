import { http, HttpResponse } from 'msw';

import { mockAddressList } from '../data/address';

export const addressHandlers = [
  http.get('*/addresses', () => {
    return HttpResponse.json(mockAddressList);
  }),

  http.post('*/addresses', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
      result: { id: 3 },
    });
  }),

  http.put('*/addresses/:id', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
    });
  }),

  http.delete('*/addresses/:id', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
    });
  }),
];
