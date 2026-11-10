export const mockScheduleList = {
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
      pace: 4,
      maxParticipants: 20,
      currentParticipants: 12,
      isMine: true,
      isParticipating: true,
      createdAt: '2026-11-01T09:00:00.000Z',
      status: 'ACTIVE',
    },
    {
      scheduleId: 2,
      title: '아침 조깅',
      runType: 'LIGHTNING',
      meetingAt: '2026-11-20T07:00:00.000Z',
      placeName: '올림픽 공원',
      distance: 3,
      pace: 5,
      maxParticipants: 10,
      currentParticipants: 4,
      isMine: false,
      isParticipating: false,
      createdAt: '2026-11-05T09:00:00.000Z',
      status: 'ACTIVE',
    },
  ],
};

export const mockScheduleDetail = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    scheduleId: 1,
    title: '한강 나이트 런',
    runType: 'REGULAR',
    meetingAt: '2026-11-15T19:30:00.000Z',
    locationInfo: {
      placeName: '반포 한강 공원',
      address: '서울 서초구 반포동',
      meetingSpot: '반포 한강공원 주차장 앞',
      latitude: 37.5078,
      longitude: 126.9947,
    },
    description: '함께 한강에서 달려요!',
    distance: 5,
    pace: 4,
    maxParticipants: 20,
    currentParticipants: 12,
    supplies: ['운동화', '물'],
    creatorId: 1,
    creatorNickname: '테스터',
    creatorProfileImageUrl: '/icons/icon-crew-default.svg',
    creatorRole: 'LEADER',
    isMine: true,
    isParticipating: true,
    isCheckedIn: false,
    isModifiable: true,
    isParticipationModifiable: true,
    participants: [
      {
        memberId: 1,
        nickname: '테스터',
        profileImageUrl: '/icons/icon-crew-default.svg',
        role: 'LEADER',
        isCreator: true,
        participatedAt: '2026-11-01T09:00:00.000Z',
      },
    ],
    hasMoreParticipants: false,
    createdAt: '2026-11-01T09:00:00.000Z',
    status: 'ACTIVE',
  },
};

export const mockScheduleCalendar = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: [
    {
      date: '2026-11-15',
      schedules: [
        {
          scheduleId: 1,
          title: '한강 나이트 런',
          runType: 'REGULAR',
        },
      ],
    },
  ],
};

export const mockParticipants = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    content: [
      {
        memberId: 1,
        nickname: '테스터',
        profileImageUrl: '/icons/icon-crew-default.svg',
        role: 'LEADER',
        isCreator: true,
        participatedAt: '2026-11-01T09:00:00.000Z',
      },
    ],
    hasNext: false,
  },
};
