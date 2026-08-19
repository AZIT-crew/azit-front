import { vars } from '@azit/design-system';
import { AlertDialog } from '@azit/design-system/alert-dialog';
import { Header } from '@azit/design-system/header';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Fragment, useEffect, useState } from 'react';

import { useFlow } from '@/app/routes/stackflow';

import { userQueries } from '@/entities/User/api/queries';

import { BusinessError } from '@/shared/api/apiHandler';
import { useWithdraw } from '@/shared/auth/model';
import { bridge } from '@/shared/lib/bridge';
import { useAuthStore } from '@/shared/store/auth';
import { BackButton } from '@/shared/ui/button';
import { AppLayout } from '@/shared/ui/layout';
import { MenuItem, MenuSection, menuSectionStyles } from '@/shared/ui/menu';
import { toastError } from '@/shared/ui/toast';

import * as styles from './index.css';
import { getSettingsMenu } from './menu';

const PROVIDER_LABEL: Record<string, string> = {
  KAKAO: '카카오 연동',
  APPLE: '애플 연동',
};

export function SettingsPage() {
  const { push } = useFlow();
  const { logout } = useAuthStore();
  const { handleWithdraw } = useWithdraw();
  const queryClient = useQueryClient();
  const { data: providers } = useQuery(userQueries.myProvidersQuery());
  const { data: optionalTerms } = useQuery(userQueries.optionalTermsQuery());
  const [appVersion, setAppVersion] = useState<string>('');
  const [showLeaderError, setShowLeaderError] = useState(false);

  const { mutate: updateOptionalTerms } = useMutation({
    ...userQueries.updateOptionalTerms,
    onSuccess: (data) => {
      queryClient.setQueryData(userQueries.optionalTermsKey(), data);
    },
    onError: () => {
      toastError('알림 설정 변경에 실패했습니다.');
    },
  });

  const handleWithdrawWithErrorHandling = async () => {
    try {
      await handleWithdraw();
    } catch (error) {
      if (
        error instanceof BusinessError &&
        error.code === 'CANNOT_SERVICE_WITHDRAW_AS_LEADER'
      ) {
        setShowLeaderError(true);
      } else {
        throw error;
      }
    }
  };

  useEffect(() => {
    bridge
      .getAppVersion()
      .then(setAppVersion)
      .catch(() => {});
  }, []);

  const loginProvider =
    providers?.map((p) => PROVIDER_LABEL[p] ?? p).join(', ') ?? '-';

  const marketingConsentDescription = optionalTerms?.marketing.changedAt
    ? `[AZIT] 마케팅 정보 수신 ${optionalTerms.marketing.agreed ? '동의' : '거부'} ${optionalTerms.marketing.changedAt.slice(0, 10)}`
    : undefined;

  const menu = getSettingsMenu({
    loginProvider,
    appVersion: appVersion ? `최신 버전(${appVersion})` : '',
    onLogout: logout,
    onNavigateLoginInfo: () =>
      push('SettingsLoginInfoPage', {}, { animate: true }),
    onNavigateCrewNotification: () =>
      push('SettingsCrewNotificationPage', {}, { animate: true }),
    // TODO: OS 알림 권한이 꺼진 경우 이 토글을 강제 비활성화해야 함 (Native 브릿지에 권한 조회 메서드 추가 후 반영)
    allNotificationEnabled: optionalTerms?.notification.agreed ?? false,
    onToggleAllNotification: (checked) =>
      updateOptionalTerms({ notificationAgreed: checked }),
    marketingConsentEnabled: optionalTerms?.marketing.agreed ?? false,
    marketingConsentDescription,
    onToggleMarketingConsent: (checked) =>
      updateOptionalTerms({ marketingAgreed: checked }),
  });

  return (
    <AppScreen backgroundColor={vars.colors.background_sub}>
      <AppLayout>
        <div className={styles.headerWrapper}>
          <Header left={<BackButton />} center="설정" />
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.menuSectionWrapper}>
            {menu.map((section) => {
              if (section.id !== 'etc') {
                return <MenuSection key={section.id} section={section} />;
              }

              return (
                <section
                  key={section.id}
                  className={menuSectionStyles.container}
                >
                  <h2 className={menuSectionStyles.title}>{section.title}</h2>
                  <div className={menuSectionStyles.list}>
                    {section.items.map((item) => (
                      <Fragment key={item.id}>
                        <MenuItem
                          item={item}
                          onClick={() => {
                            if (item.type === 'action') item.onAction();
                          }}
                        />
                        <div
                          className={menuSectionStyles.listItemDivider}
                          aria-hidden
                        />
                      </Fragment>
                    ))}
                    <AlertDialog
                      trigger={
                        <MenuItem
                          item={{
                            id: 'withdraw',
                            label: '탈퇴하기',
                            type: 'action',
                            onAction: () => {},
                          }}
                        />
                      }
                      title="정말로 탈퇴하시겠습니까?"
                      description="탈퇴 후 30일이 지나면 계정 복구가 불가능해요."
                      actionText="탈퇴하기"
                      cancelText="취소하기"
                      onAction={handleWithdrawWithErrorHandling}
                    />
                    <AlertDialog
                      open={showLeaderError}
                      onOpenChange={setShowLeaderError}
                      title="탈퇴를 할 수 없습니다"
                      description="리더는 크루원이 존재하는 크루를 탈퇴할 수 없습니다"
                      actionText="확인"
                      singleButton
                    />
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </AppLayout>
    </AppScreen>
  );
}
