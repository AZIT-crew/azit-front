import type { RunType } from '@/shared/types/schedule';

export type NotificationCategory = 'all' | 'notice' | 'REGULAR' | 'LIGHTNING';

export type NotificationKind =
  | 'crew-schedule'
  | 'notice'
  | 'join-request'
  | 'join-approved'
  | 'join-rejected'
  | 'expelled'
  | 'marketing-consent'
  | 'term-update';

interface BaseNotificationItem {
  id: string;
  kind: NotificationKind;
  date: string;
  isRead: boolean;
}

export interface CrewScheduleNotificationItem extends BaseNotificationItem {
  kind: 'crew-schedule';
  crewId: number;
  crewName: string;
  crewImageUrl: string;
  runType: RunType;
  description: string;
  scheduleId: number;
}

export interface NoticeNotificationItem extends BaseNotificationItem {
  kind: Exclude<NotificationKind, 'crew-schedule'>;
  title: string;
  description: string;
  crewId?: number;
  noticeId?: number;
}

export type NotificationItem =
  | CrewScheduleNotificationItem
  | NoticeNotificationItem;

export interface NoticeDetail {
  noticeId: number;
  title: string;
  date: string;
  content: string;
}

export const mockNoticeDetails: Record<number, NoticeDetail> = {
  1: {
    noticeId: 1,
    title: '크루명크루명크루명',
    date: '1월 17일',
    content: '상세 내용을 확인하고 참가 신청하세요!',
  },
};

export const mockNotificationList: NotificationItem[] = [
  {
    id: '1',
    kind: 'crew-schedule',
    date: '1월 17일',
    isRead: false,
    crewId: 1,
    crewName: '크루명크루명크루명크루명크루명',
    crewImageUrl: '/icons/icon-crew-default.svg',
    runType: 'REGULAR',
    description: '상세 내용을 확인하고 참가 신청하세요!',
    scheduleId: 101,
  },
  {
    id: '2',
    kind: 'crew-schedule',
    date: '1월 17일',
    isRead: false,
    crewId: 1,
    crewName: '크루명크루명',
    crewImageUrl: '/icons/icon-crew-default.svg',
    runType: 'LIGHTNING',
    description: '상세 내용을 확인하고 참가 신청하세요!',
    scheduleId: 102,
  },
  {
    id: '3',
    kind: 'crew-schedule',
    date: '1월 17일',
    isRead: true,
    crewId: 1,
    crewName: '크루명크루명',
    crewImageUrl: '/icons/icon-crew-default.svg',
    runType: 'REGULAR',
    description: '상세 내용을 확인하고 참가 신청하세요!',
    scheduleId: 103,
  },
  {
    id: '4',
    kind: 'notice',
    date: '1월 17일',
    isRead: true,
    title: '크루명크루명크루명',
    description: '상세 내용을 확인하고 참가 신청하세요!',
    noticeId: 1,
  },
];
