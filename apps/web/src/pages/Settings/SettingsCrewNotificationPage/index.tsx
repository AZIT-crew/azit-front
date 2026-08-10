import { vars } from '@azit/design-system';
import { Header } from '@azit/design-system/header';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useState } from 'react';

import { mockCrewNotificationSettings } from '@/shared/mock/crew-notification';
import { BackButton } from '@/shared/ui/button';
import { AppLayout } from '@/shared/ui/layout';

import { CrewNotificationCard } from './CrewNotificationCard';
import * as styles from './index.css';

export function SettingsCrewNotificationPage() {
  const [crewSettings, setCrewSettings] = useState(
    mockCrewNotificationSettings
  );

  const handleToggleAll = (crewId: number, enabled: boolean) => {
    setCrewSettings((prev) =>
      prev.map((crew) =>
        crew.crewId === crewId
          ? {
              ...crew,
              allEnabled: enabled,
              regularRunEnabled: enabled,
              flashRunEnabled: enabled,
            }
          : crew
      )
    );
  };

  const handleToggleRegularRun = (crewId: number, enabled: boolean) => {
    setCrewSettings((prev) =>
      prev.map((crew) => {
        if (crew.crewId !== crewId) return crew;
        return {
          ...crew,
          regularRunEnabled: enabled,
          allEnabled: enabled && crew.flashRunEnabled,
        };
      })
    );
  };

  const handleToggleFlashRun = (crewId: number, enabled: boolean) => {
    setCrewSettings((prev) =>
      prev.map((crew) => {
        if (crew.crewId !== crewId) return crew;
        return {
          ...crew,
          flashRunEnabled: enabled,
          allEnabled: enabled && crew.regularRunEnabled,
        };
      })
    );
  };

  return (
    <AppScreen backgroundColor={vars.colors.background_sub}>
      <AppLayout>
        <div className={styles.headerWrapper}>
          <Header left={<BackButton />} center="크루별 알림 설정" />
        </div>
        <div className={styles.mainContainer}>
          <p className={styles.sectionTitle}>
            참여 중인 크루({crewSettings.length})
          </p>
          <div className={styles.crewList}>
            {crewSettings.map((crew) => (
              <CrewNotificationCard
                key={crew.crewId}
                crew={crew}
                onToggleAll={(enabled) => handleToggleAll(crew.crewId, enabled)}
                onToggleRegularRun={(enabled) =>
                  handleToggleRegularRun(crew.crewId, enabled)
                }
                onToggleFlashRun={(enabled) =>
                  handleToggleFlashRun(crew.crewId, enabled)
                }
              />
            ))}
          </div>
        </div>
      </AppLayout>
    </AppScreen>
  );
}
