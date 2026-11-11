import { vars } from '@azit/design-system';
import { CheckCircleBrokenIcon, MarkerPinIcon } from '@azit/design-system/icon';

import * as styles from '@/widgets/ScheduleAttendance/styles/ScheduleAttendanceSection.css';
import { ScheduleAttendanceSkeleton } from '@/widgets/ScheduleAttendance/ui/ScheduleAttendanceSkeleton';

import type { ScheduleCheckInStatusResponse } from '@/entities/Schedule/model/schedule.model';

export function ScheduleAttendanceSection({
  checkInStatus,
  isCheckInStatusPending,
  canCheckIn,
  onCheckIn,
}: {
  checkInStatus: ScheduleCheckInStatusResponse | null | undefined;
  isCheckInStatusPending: boolean;
  canCheckIn: boolean;
  onCheckIn: () => void;
}) {
  const todayInfo = checkInStatus?.todayScheduleInfo;
  const isCheckedIn = todayInfo?.isCheckedIn === true;

  if (isCheckInStatusPending) return <ScheduleAttendanceSkeleton />;
  if (!checkInStatus) {
    return <ScheduleDisabledSection title="참여할 일정이 없어요" />;
  }

  if (checkInStatus.hasScheduleToday && todayInfo) {
    const showDisabledByTimeOrDistance = !isCheckedIn && !canCheckIn;

    if (canCheckIn) {
      return (
        <ScheduleActivatedSection
          isCheckedIn={false}
          runType={todayInfo.runType ?? 'REGULAR'}
          title={todayInfo.title ?? ''}
          onCheckIn={onCheckIn}
        />
      );
    }
    if (showDisabledByTimeOrDistance) {
      return <ScheduleDisabledSection title={todayInfo.title} />;
    }
    if (isCheckedIn) {
      return (
        <ScheduleActivatedSection
          isCheckedIn
          runType={todayInfo.runType}
          title={todayInfo.title ?? ''}
          onCheckIn={() => {}}
        />
      );
    }
  }

  const daysLeft = checkInStatus.nextScheduleInfo?.daysLeft;

  if (typeof daysLeft === 'number' && daysLeft > 0) {
    return (
      <ScheduleDisabledSection title={`다음 일정까지 ${daysLeft}일 남았어요`} />
    );
  }

  return <ScheduleDisabledSection title="참여할 일정이 없어요" />;
}

function ScheduleActivatedSection({
  runType,
  title,
  onCheckIn,
  isCheckedIn,
}: {
  runType: 'REGULAR' | 'LIGHTNING';
  title: string;
  onCheckIn: () => void;
  isCheckedIn: boolean;
}) {
  const isLightningRun = runType === 'LIGHTNING';

  return (
    <div
      className={
        isLightningRun ? styles.cardContainerLightning : styles.cardContainer
      }
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.buttonWrapper}>
        <div className={styles.rippleContainer}>
          <div
            className={
              isLightningRun
                ? styles.rippleCircleOuterLightning
                : styles.rippleCircleOuter
            }
          />
          <div
            className={
              isLightningRun
                ? styles.rippleCircleMiddleLightning
                : styles.rippleCircleMiddle
            }
          />
          <div
            className={
              isLightningRun ? styles.buttonOuterLightning : styles.buttonOuter
            }
          >
            <button
              className={
                isLightningRun ? styles.buttonLightning : styles.button
              }
              type="button"
              onClick={onCheckIn}
            >
              <div className={styles.buttonContent}>
                <div className={styles.iconWrapper}>
                  {isCheckedIn ? (
                    <CheckCircleBrokenIcon
                      size={48}
                      style={{ color: 'white' }}
                    />
                  ) : (
                    <MarkerPinIcon size={48} style={{ color: 'white' }} />
                  )}
                </div>
                <span className={styles.buttonText}>
                  {isCheckedIn ? '출석 완료' : '출석하기'}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <p className={styles.distanceText}>1km이내에서 활성화</p>
    </div>
  );
}

function ScheduleDisabledSection({ title }: { title: string }) {
  return (
    <div className={styles.disabledCardContainer}>
      <h2 className={styles.titleDisabled}>{title}</h2>
      <div className={styles.buttonWrapper}>
        {/* <div className={styles.rippleContainer}>
          <div className={styles.buttonOuterDisabled}>
            <button className={styles.buttonDisabled} type="button" disabled>
              <div className={styles.buttonContent}>
                <div className={styles.iconWrapperDisabled}>
                  <MarkerPinIcon
                    size={48}
                    aria-hidden
                    style={{ color: vars.colors.gray60 }}
                  />
                </div>
                <span className={styles.buttonTextDisabled}>출석하기</span>
              </div>
            </button>
          </div>
        </div> */}
        <div className={styles.rippleContainer}>
          <div className={styles.rippleCircleOuterDisabled} />
          <div className={styles.rippleCircleMiddleDisabled} />
          <div className={styles.buttonOuter}>
            <button className={styles.buttonDisabled} type="button">
              <div className={styles.buttonContent}>
                <div className={styles.iconWrapperDisabled}>
                  <MarkerPinIcon
                    size={48}
                    aria-hidden
                    style={{ color: vars.colors.gray60 }}
                  />
                </div>
                <span className={styles.buttonTextDisabled}>출석하기</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <p className={styles.distanceTextDisabled}>1km이내에서 활성화</p>
    </div>
  );
}
