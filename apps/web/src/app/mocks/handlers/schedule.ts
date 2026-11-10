import { http, HttpResponse } from 'msw';

import {
  mockParticipants,
  mockScheduleCalendar,
  mockScheduleDetail,
  mockScheduleList,
} from '../data/schedule';

export const scheduleHandlers = [
  http.get('*/crews/:crewId/schedules/calendar', () => {
    return HttpResponse.json(mockScheduleCalendar);
  }),

  http.get('*/crews/:crewId/schedules/:scheduleId', () => {
    return HttpResponse.json(mockScheduleDetail);
  }),

  http.get('*/crews/:crewId/schedules', () => {
    return HttpResponse.json(mockScheduleList);
  }),

  http.post('*/crews/:crewId/schedules', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
      result: { scheduleId: 1 },
    });
  }),

  http.put('*/crews/:crewId/schedules/:scheduleId', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
    });
  }),

  http.delete('*/crews/:crewId/schedules/:scheduleId/participate', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
    });
  }),

  http.post('*/crews/:crewId/schedules/:scheduleId/participate', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
    });
  }),

  http.get('*/crews/:crewId/schedules/:scheduleId/participants', () => {
    return HttpResponse.json(mockParticipants);
  }),

  http.delete('*/crews/:crewId/schedules/:scheduleId', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
    });
  }),
];
