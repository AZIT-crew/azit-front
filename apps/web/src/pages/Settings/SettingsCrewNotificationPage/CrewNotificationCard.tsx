import clsx from 'clsx';

import type { CrewNotificationSetting } from '@/shared/mock/crew-notification';

import * as styles from './CrewNotificationCard.css';

interface ToggleSwitchProps {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}

function ToggleSwitch({ checked, label, onChange }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={`${label} ${checked ? '켜짐' : '꺼짐'}`}
      className={clsx(
        styles.switchTrack,
        checked ? styles.switchTrackOn : styles.switchTrackOff
      )}
      onClick={() => onChange(!checked)}
    >
      <span
        className={clsx(
          styles.switchThumb,
          checked ? styles.switchThumbOn : styles.switchThumbOff
        )}
        aria-hidden
      />
    </button>
  );
}

interface CrewNotificationCardProps {
  crew: CrewNotificationSetting;
  onToggleAll: (enabled: boolean) => void;
  onToggleRegularRun: (enabled: boolean) => void;
  onToggleFlashRun: (enabled: boolean) => void;
}

export function CrewNotificationCard({
  crew,
  onToggleAll,
  onToggleRegularRun,
  onToggleFlashRun,
}: CrewNotificationCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <div className={styles.crewInfo}>
          <img
            src={crew.crewImageUrl}
            alt={crew.crewName}
            className={styles.crewImage}
          />
          <div className={styles.crewTextWrapper}>
            <span className={styles.crewName}>{crew.crewName}</span>
            <span className={styles.crewMeta}>전체알림</span>
          </div>
        </div>
        <ToggleSwitch
          checked={crew.allEnabled}
          label="전체알림"
          onChange={onToggleAll}
        />
      </div>
      <div className={styles.divider} aria-hidden />
      <div className={styles.row}>
        <span className={styles.itemLabel}>정기런 알림</span>
        <ToggleSwitch
          checked={crew.regularRunEnabled}
          label="정기런 알림"
          onChange={onToggleRegularRun}
        />
      </div>
      <div className={styles.row}>
        <span className={styles.itemLabel}>번개런 알림</span>
        <ToggleSwitch
          checked={crew.flashRunEnabled}
          label="번개런 알림"
          onChange={onToggleFlashRun}
        />
      </div>
    </div>
  );
}
