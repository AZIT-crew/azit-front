import { useMemo, useState } from 'react';

import * as styles from '@/widgets/Notification/styles/NotificationList.css.ts';

import type {
  NotificationCategory,
  NotificationItem,
} from '@/shared/mock/notification';

import { NotificationFilterTab } from './NotificationFilterTab';
import { NotificationListItem } from './NotificationListItem';

interface NotificationListProps {
  items: NotificationItem[];
  onItemClick: (item: NotificationItem) => void;
}

export function NotificationList({
  items,
  onItemClick,
}: NotificationListProps) {
  const [activeFilter, setActiveFilter] = useState<NotificationCategory>('all');

  const filteredNotifications = useMemo(() => {
    if (activeFilter === 'all') return items;
    if (activeFilter === 'notice') {
      return items.filter((item) => item.kind !== 'crew-schedule');
    }
    return items.filter(
      (item) => item.kind === 'crew-schedule' && item.runType === activeFilter
    );
  }, [activeFilter, items]);

  return (
    <div className={styles.listContainer}>
      <div className={styles.filterContainer}>
        <NotificationFilterTab
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      <div className={styles.itemsContainer}>
        {filteredNotifications.map((item) => (
          <NotificationListItem
            key={item.id}
            item={item}
            onClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
}
