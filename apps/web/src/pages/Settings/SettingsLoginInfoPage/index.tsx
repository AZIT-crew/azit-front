import { vars } from '@azit/design-system';
import { AlertDialog } from '@azit/design-system/alert-dialog';
import { Header } from '@azit/design-system/header';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import { mockLoginInfoAccounts } from '@/shared/mock/login-info';
import { BackButton } from '@/shared/ui/button';
import { AppLayout } from '@/shared/ui/layout';

import * as styles from './index.css';

export function SettingsLoginInfoPage() {
  return (
    <AppScreen backgroundColor={vars.colors.background_sub}>
      <AppLayout>
        <div className={styles.headerWrapper}>
          <Header left={<BackButton />} center="로그인 정보" />
        </div>
        <div className={styles.mainContainer}>
          <p className={styles.guideText}>
            안전한 서비스 이용을 위해 계정을 연동해 주세요.
          </p>
          <div className={styles.accountList}>
            {mockLoginInfoAccounts.map((account) => (
              <div key={account.id} className={styles.accountCard}>
                <div className={styles.accountInfo}>
                  <img
                    src={account.iconSrc}
                    alt={account.label}
                    className={styles.providerIcon}
                  />
                  <div className={styles.accountTextWrapper}>
                    <div className={styles.accountNameRow}>
                      <span className={styles.accountName}>
                        {account.label}
                      </span>
                      {account.isConnected && account.connectedAt && (
                        <span className={styles.accountMeta}>
                          {account.connectedAt}
                        </span>
                      )}
                    </div>
                    <span className={styles.accountMeta}>
                      {account.isConnected ? account.maskedEmail : '미연동'}
                    </span>
                  </div>
                </div>
                {account.isConnected ? (
                  <AlertDialog
                    trigger={
                      <button
                        type="button"
                        className={styles.actionButtonConnected}
                      >
                        연동 해제
                      </button>
                    }
                    title={`${account.label} 연동을 해제하시겠어요?`}
                    description={`해제 후에는 ${account.label} 계정으로 로그인할 수 없어요.`}
                    cancelText="취소하기"
                    actionText="해제하기"
                    onAction={() => {}}
                  />
                ) : (
                  <button
                    type="button"
                    className={styles.actionButtonDisconnected}
                  >
                    연동하기
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </AppLayout>
    </AppScreen>
  );
}
