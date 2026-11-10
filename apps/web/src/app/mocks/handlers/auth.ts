import { http, HttpResponse } from 'msw';

const MOCK_AUTH_STATUS_KEY = '__mock_auth_status__';
type MockAuthStatus = 'ACTIVE' | 'PENDING_TERMS' | 'LOGGED_OUT';

function getMockAuthStatus(): MockAuthStatus {
  return (localStorage.getItem(MOCK_AUTH_STATUS_KEY) as MockAuthStatus) ?? 'ACTIVE';
}

export const authHandlers = [
  http.get('*/auth/social-login/:provider', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
      result: {
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
        status: 'ACTIVE',
      },
    });
  }),

  http.post('*/auth/reissue', () => {
    const status = getMockAuthStatus();
    if (status === 'LOGGED_OUT') {
      return HttpResponse.json(
        { code: 'UNAUTHORIZED', message: '인증이 필요합니다.' },
        { status: 401 },
      );
    }
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
      result: {
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
        status,
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
