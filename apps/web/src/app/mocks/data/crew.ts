export const mockCrewJoinedList = {
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
  ],
};

export const mockCrewInvitation = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    crewId: 1,
    crewName: '한강 러너스',
    crewImageUrl: '/icons/icon-crew-default.svg',
    description: '한강에서 함께 달려요!',
    memberCount: 5,
    activityRegion: '서울 서초구',
  },
};

export const mockCrewJoinStatus = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    crewId: 1,
    name: '한강 러너스',
    crewImageUrl: '/icons/icon-crew-default.svg',
    status: 'JOINED',
  },
};

export const mockCrewMembers = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    totalCount: 2,
    content: [
      {
        id: 1,
        memberId: 1,
        nickname: '테스터',
        profileImageUrl: '/icons/icon-crew-default.svg',
        role: 'LEADER',
        joinedDate: '2026-01-01T00:00:00.000Z',
      },
      {
        id: 2,
        memberId: 2,
        nickname: '멤버1',
        profileImageUrl: '/icons/icon-crew-default.svg',
        role: 'MEMBER',
        joinedDate: '2026-02-01T00:00:00.000Z',
      },
    ],
    hasNext: false,
    lastId: 2,
  },
};

export const mockCrewJoinRequests = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: [
    {
      memberId: 3,
      nickname: '가입신청자',
      profileImageUrl: '/icons/icon-crew-default.svg',
      requestedAt: '2026-11-01T10:00:00.000Z',
    },
  ],
};

export const mockCrewInfo = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    crewId: 1,
    crewName: '한강 러너스',
    crewImageUrl: '/icons/icon-crew-default.svg',
    description: '한강에서 함께 달려요!',
    memberCount: 2,
    activityRegion: '서울 서초구',
  },
};

export const mockInvitationCode = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    invitationCode: 'NEWCODE1',
  },
};

export const mockSuccess = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
};
