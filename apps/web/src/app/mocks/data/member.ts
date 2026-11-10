export const mockMyInfo = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    id: 1,
    nickname: '테스터',
    profileImageUrl: '/icons/icon-crew-default.svg',
    totalPoints: 0,
  },
};

export const mockMyCrews = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: [
    {
      crewId: 1,
      crewName: '한강 러너스',
      crewImageUrl: '/icons/icon-crew-default.svg',
      memberRole: 'LEADER',
      memberStatus: 'JOINED',
      invitationCode: 'MOCK1234',
    },
    {
      crewId: 2,
      crewName: '새벽 달리기 모임',
      crewImageUrl: '/icons/icon-crew-default.svg',
      memberRole: 'MEMBER',
      memberStatus: 'JOINED',
      invitationCode: null,
    },
  ],
};

export const mockMySchedules = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: [
    {
      scheduleId: 1,
      title: '한강 나이트 런',
      runType: 'REGULAR',
      meetingAt: '2026-11-15T19:30:00.000Z',
      placeName: '반포 한강 공원',
      distance: 5,
      pace: 4.5,
      maxParticipants: 20,
      currentParticipants: 12,
      isMine: false,
      isParticipating: true,
      createdAt: '2026-11-01T09:00:00.000Z',
      status: 'ACTIVE',
    },
  ],
};

export const mockCheckInStatus = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    hasScheduleToday: false,
    todayScheduleInfo: null,
    nextScheduleInfo: {
      title: '한강 나이트 런',
      daysLeft: 5,
    },
  },
};

export const mockAttendances = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    totalCount: 10,
    monthlyCount: 3,
  },
};

export const mockAttendanceCalendar = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    attendanceDates: ['2026-11-01', '2026-11-05', '2026-11-10'],
  },
};

export const mockProviders = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    providers: [
      {
        provider: 'KAKAO',
        providerName: '카카오',
        isLinked: true,
        email: 'test@kakao.com',
        linkedAt: '2026-01-01',
        isUnlinkable: false,
      },
    ],
  },
};

export const mockOptionalTerms = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    isMarketingAgreed: false,
  },
};
