import { http, HttpResponse } from 'msw';

export const authHandlers = [
  http.get('*/auth/social-login/:provider', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
      result: {
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
        status: 'JOINED',
      },
    });
  }),

  http.post('*/auth/reissue', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
      result: {
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
        status: 'JOINED',
      },
    });
  }),

  http.post('*/auth/logout', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
    });
  }),
];
