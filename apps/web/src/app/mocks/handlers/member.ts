import { http, HttpResponse } from 'msw';

import {
  mockAttendanceCalendar,
  mockAttendances,
  mockCheckInStatus,
  mockMyCrews,
  mockMyInfo,
  mockMySchedules,
  mockOptionalTerms,
  mockProviders,
} from '../data/member';

export const memberHandlers = [
  http.get('*/members/me', () => {
    return HttpResponse.json(mockMyInfo);
  }),

  http.patch('*/members/me/profile', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
    });
  }),

  http.get('*/members/me/crews', () => {
    return HttpResponse.json(mockMyCrews);
  }),

  http.get('*/members/me/schedules', () => {
    return HttpResponse.json(mockMySchedules);
  }),

  http.get('*/members/me/check-in-status', () => {
    return HttpResponse.json(mockCheckInStatus);
  }),

  http.get('*/members/me/attendances', () => {
    return HttpResponse.json(mockAttendances);
  }),

  http.get('*/members/me/attendances/calendar', () => {
    return HttpResponse.json(mockAttendanceCalendar);
  }),

  http.get('*/members/me/providers', () => {
    return HttpResponse.json(mockProviders);
  }),

  http.get('*/members/me/terms/optional', () => {
    return HttpResponse.json(mockOptionalTerms);
  }),

  http.patch('*/members/me/terms/optional', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
    });
  }),

  http.post('*/members/me/schedules/:id/check-in', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
    });
  }),
];
