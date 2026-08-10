export interface CrewNotificationSetting {
  crewId: number;
  crewName: string;
  crewImageUrl: string;
  allEnabled: boolean;
  regularRunEnabled: boolean;
  flashRunEnabled: boolean;
}

export const mockCrewNotificationSettings: CrewNotificationSetting[] = [
  {
    crewId: 1,
    crewName: '아지트아지트아지트아지트아지트',
    crewImageUrl: '/icons/icon-crew-default.svg',
    allEnabled: true,
    regularRunEnabled: true,
    flashRunEnabled: true,
  },
  {
    crewId: 2,
    crewName: '아지트아지트아지트아지트아지트',
    crewImageUrl: '/icons/icon-crew-default.svg',
    allEnabled: false,
    regularRunEnabled: true,
    flashRunEnabled: false,
  },
];
