import clsx from 'clsx';

import * as styles from '@/widgets/Notification/styles/NotificationListItem.css.ts';

import type { NotificationItem } from '@/shared/mock/notification';

interface NotificationListItemProps {
  item: NotificationItem;
  onClick: (item: NotificationItem) => void;
}

export function NotificationListItem({
  item,
  onClick,
}: NotificationListItemProps) {
  return (
    <div
      className={clsx(styles.itemContainer, !item.isRead && styles.unread)}
      role="button"
      tabIndex={0}
      onClick={() => onClick(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(item);
        }
      }}
    >
      <div className={styles.row}>
        <div className={styles.leftContent}>
          {item.kind === 'crew-schedule' ? (
            <img
              src={item.crewImageUrl}
              alt={item.crewName}
              className={styles.iconImage}
            />
          ) : (
            <img
              src="/icons/icon-notice-speaker.svg"
              alt=""
              className={styles.iconImage}
            />
          )}
          <div className={styles.textWrapper}>
            <div className={styles.titleRow}>
              {item.kind === 'crew-schedule' && item.runType && (
                <span
                  className={clsx(
                    styles.runTypeChip,
                    item.runType === 'REGULAR'
                      ? styles.runTypeChipRegular
                      : styles.runTypeChipLightning
                  )}
                >
                  {item.runType === 'REGULAR' ? '정기런' : '번개런'}
                </span>
              )}
              <span className={styles.titleText}>
                {item.kind === 'crew-schedule' ? item.crewName : item.title}
              </span>
            </div>
            <p className={styles.descriptionText}>{item.description}</p>
          </div>
        </div>
        <span className={styles.dateText}>{item.date}</span>
      </div>
    </div>
  );
}
