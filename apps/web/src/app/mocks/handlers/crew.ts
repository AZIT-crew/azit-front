import { http, HttpResponse } from 'msw';

import {
  mockCrewInfo,
  mockCrewInvitation,
  mockCrewJoinRequests,
  mockCrewJoinStatus,
  mockCrewJoinedList,
  mockCrewMembers,
  mockInvitationCode,
  mockSuccess,
} from '../data/crew';

export const crewHandlers = [
  http.get('*/crews/me', () => {
    return HttpResponse.json(mockCrewJoinedList);
  }),

  http.post('*/crews', () => {
    return HttpResponse.json({
      code: 'SUCCESS',
      message: '요청에 성공했습니다.',
      result: { crewId: 1 },
    });
  }),

  http.get('*/crews/invitation/:code', () => {
    return HttpResponse.json(mockCrewInvitation);
  }),

  http.post('*/crews/join', () => {
    return HttpResponse.json(mockSuccess);
  }),

  http.get('*/crews/:id/join-status', () => {
    return HttpResponse.json(mockCrewJoinStatus);
  }),

  http.get('*/crews/:id/members', () => {
    return HttpResponse.json(mockCrewMembers);
  }),

  http.get('*/crews/:id/join-requests', () => {
    return HttpResponse.json(mockCrewJoinRequests);
  }),

  http.post('*/crews/:id/join-requests/:memberId/approve', () => {
    return HttpResponse.json(mockSuccess);
  }),

  http.post('*/crews/:id/join-requests/:memberId/reject', () => {
    return HttpResponse.json(mockSuccess);
  }),

  http.delete('*/crews/:id/join-request', () => {
    return HttpResponse.json(mockSuccess);
  }),

  http.delete('*/crews/:id/members/me', () => {
    return HttpResponse.json(mockSuccess);
  }),

  http.delete('*/crews/:id/members/:memberId', () => {
    return HttpResponse.json(mockSuccess);
  }),

  // crews/:id/members/me보다 뒤에 위치해야 하므로 순서 주의
  http.delete('*/crews/:id', () => {
    return HttpResponse.json(mockSuccess);
  }),

  http.post('*/crews/:id/invitation-code', () => {
    return HttpResponse.json(mockInvitationCode);
  }),

  http.get('*/crews/:id/info', () => {
    return HttpResponse.json(mockCrewInfo);
  }),

  http.patch('*/crews/:id/info', () => {
    return HttpResponse.json(mockSuccess);
  }),
];
