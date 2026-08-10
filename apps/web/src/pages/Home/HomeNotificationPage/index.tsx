import { vars } from '@azit/design-system';
import { Header } from '@azit/design-system/header';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { useFlow } from '@/app/routes/stackflow';

import { NotificationList } from '@/widgets/Notification/ui';

import {
  mockNotificationList,
  type NotificationItem,
} from '@/shared/mock/notification';
import { BackButton } from '@/shared/ui/button';
import { AppLayout } from '@/shared/ui/layout';

import * as styles from './index.css';

const NOTIFICATION_LIST_QUERY_KEY = ['notificationList'];

export function HomeNotificationPage() {
  const { push } = useFlow();
  const queryClient = useQueryClient();
  const { data: notificationList = [] } = useQuery({
    queryKey: NOTIFICATION_LIST_QUERY_KEY,
    queryFn: () => mockNotificationList,
  });

  const handleItemClick = (item: NotificationItem) => {
    queryClient.setQueryData<NotificationItem[]>(
      NOTIFICATION_LIST_QUERY_KEY,
      (prev) =>
        prev?.map((notification) =>
          notification.id === item.id
            ? { ...notification, isRead: true }
            : notification
        ) ?? []
    );

    switch (item.kind) {
      case 'crew-schedule':
        push('ScheduleDetailPage', { id: String(item.scheduleId) });
        break;
      case 'join-request':
        push('CrewMemberManagePage', {
          id: String(item.crewId),
          initialTab: 'request',
        });
        break;
      case 'join-approved':
        push('CrewPage', { id: String(item.crewId) });
        break;
      case 'join-rejected':
      case 'expelled':
        push('Mypage', {});
        break;
      case 'marketing-consent':
        push('SettingsPage', {});
        break;
      case 'notice':
        push('NoticeDetailPage', { noticeId: String(item.noticeId ?? '') });
        break;
      case 'term-update':
        push('SettingsTermDetailPage', { termType: 'terms-of-service' });
        break;
    }
  };

  return (
    <AppScreen backgroundColor={vars.colors.white}>
      <AppLayout>
        <Header sticky left={<BackButton />} center="알림" />
        <div className={styles.pageContainer}>
          {notificationList.length === 0 ? (
            <div className={styles.emptyContainer}>
              <img src="/icons/bell.svg" width={64} height={64} alt="" />
              <p className={styles.emptyText}>새로운 소식을 기다려보세요!</p>
            </div>
          ) : (
            <NotificationList
              items={notificationList}
              onItemClick={handleItemClick}
            />
          )}
        </div>
      </AppLayout>
    </AppScreen>
  );
}
