import { vars } from '@azit/design-system';
import { Header } from '@azit/design-system/header';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useActivityParams } from '@stackflow/react';

import { mockNoticeDetails } from '@/shared/mock/notification';
import { BackButton } from '@/shared/ui/button';
import { AppLayout } from '@/shared/ui/layout';

import * as styles from './index.css';

export function NoticeDetailPage() {
  const { noticeId } = useActivityParams<{ noticeId: string }>();
  const notice = mockNoticeDetails[Number(noticeId)];

  return (
    <AppScreen backgroundColor={vars.colors.white}>
      <AppLayout>
        <div className={styles.headerWrapper}>
          <Header left={<BackButton />} center="공지" />
        </div>
        {notice && (
          <div className={styles.mainContainer}>
            <h1 className={styles.title}>{notice.title}</h1>
            <p className={styles.date}>{notice.date}</p>
            <p className={styles.content}>{notice.content}</p>
          </div>
        )}
      </AppLayout>
    </AppScreen>
  );
}
