import clsx from 'clsx';
import { useSyncExternalStore, useState, useCallback } from 'react';

import { networkLog, type NetworkLogEntry } from '@/shared/lib/networkLog';
import { useAuthStore } from '@/shared/store/auth';
import { BottomSheet } from '@/shared/ui/bottom-sheet';

import * as styles from './NetworkDebugger.css';

const MOCK_AUTH_STATUS_KEY = '__mock_auth_status__';

function isDevEnvironment() {
  const { hostname } = window.location;
  return hostname === 'localhost' || hostname.includes('dev');
}

function formatDuration(ms?: number) {
  if (ms == null) return '';
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

function getMethodClass(method: string) {
  return (
    (styles.methodBadge as Record<string, string>)[method] ??
    styles.methodBadge.DEFAULT
  );
}

function getStatusText(entry: NetworkLogEntry) {
  if (entry.state === 'pending') return '…';
  if (entry.status != null) return String(entry.status);
  return 'ERR';
}

type Tab = 'headers' | 'body';
type PanelTab = 'network' | 'login';

function DevLoginPanel() {
  const { accessToken, setIsInitialized } = useAuthStore();

  const triggerReauth = (status: string) => {
    localStorage.setItem(MOCK_AUTH_STATUS_KEY, status);
    setIsInitialized(false);
  };

  return (
    <div className={styles.loginPanel}>
      <div className={styles.loginStatusRow}>
        <span className={styles.loginStatusLabel}>현재 상태</span>
        <span
          className={
            accessToken ? styles.loginStatusActive : styles.loginStatusInactive
          }
        >
          {accessToken ? '로그인됨' : '로그아웃됨'}
        </span>
      </div>
      <div className={styles.loginBtnGroup}>
        <button
          className={styles.loginBtn}
          onClick={() => triggerReauth('ACTIVE')}
        >
          Mock 로그인 (ACTIVE)
        </button>
        <button
          className={styles.loginBtn}
          onClick={() => triggerReauth('PENDING_TERMS')}
        >
          Mock 로그인 (약관 미동의)
        </button>
        <button
          className={clsx(styles.loginBtn, styles.logoutBtn)}
          onClick={() => triggerReauth('LOGGED_OUT')}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

function HeadersTable({ headers }: { headers: Record<string, string> }) {
  const entries = Object.entries(headers);
  if (entries.length === 0)
    return <span style={{ fontSize: '10px', color: '#9ca3af' }}>없음</span>;
  return (
    <table className={styles.headersTable}>
      <tbody>
        {entries.map(([key, value]) => (
          <tr key={key} className={styles.headerRow}>
            <td className={styles.headerKey}>{key}</td>
            <td className={styles.headerValue}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function LogItem({ entry }: { entry: NetworkLogEntry }) {
  const [expanded, setExpanded] = useState(false);
  const [tab, setTab] = useState<Tab>('headers');

  const hasRequestHeaders =
    entry.requestHeaders != null &&
    Object.keys(entry.requestHeaders).length > 0;
  const hasResponseHeaders =
    entry.responseHeaders != null &&
    Object.keys(entry.responseHeaders).length > 0;
  const hasBody =
    entry.requestBody != null ||
    entry.responseBody != null ||
    entry.errorMessage != null;

  return (
    <div className={styles.logItem} onClick={() => setExpanded((v) => !v)}>
      <div className={styles.logRow}>
        <span className={getMethodClass(entry.method)}>{entry.method}</span>
        <span className={styles.logUrl} title={entry.url}>
          {entry.url}
        </span>
        <span className={styles.statusBadge[entry.state]}>
          {getStatusText(entry)}
        </span>
        <span className={styles.durationText}>
          {formatDuration(entry.duration)}
        </span>
      </div>

      {expanded && (
        <div
          className={styles.expandedSection}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.tabs}>
            <button
              className={clsx(
                styles.tab,
                tab === 'headers' && styles.tabActive
              )}
              onClick={() => setTab('headers')}
            >
              Headers
            </button>
            <button
              className={clsx(styles.tab, tab === 'body' && styles.tabActive)}
              onClick={() => setTab('body')}
            >
              Body
            </button>
          </div>

          {tab === 'headers' && (
            <div className={styles.bodyBlock}>
              {hasRequestHeaders || hasResponseHeaders ? (
                <>
                  <div className={styles.sectionDivider}>Request Headers</div>
                  <HeadersTable headers={entry.requestHeaders ?? {}} />
                  {entry.state !== 'pending' && (
                    <>
                      <div className={styles.sectionDivider}>
                        Response Headers
                      </div>
                      <HeadersTable headers={entry.responseHeaders ?? {}} />
                    </>
                  )}
                </>
              ) : (
                <span style={{ fontSize: '10px', color: '#9ca3af' }}>
                  헤더 없음
                </span>
              )}
            </div>
          )}

          {tab === 'body' && (
            <>
              {!hasBody ? (
                <div className={styles.bodyBlock}>
                  <span style={{ fontSize: '10px', color: '#9ca3af' }}>
                    바디 없음
                  </span>
                </div>
              ) : (
                <>
                  {entry.requestBody != null && (
                    <div className={styles.bodyBlock}>
                      <div className={styles.bodyLabel}>Request Body</div>
                      <pre className={styles.bodyPre}>
                        {JSON.stringify(entry.requestBody, null, 2)}
                      </pre>
                    </div>
                  )}
                  {entry.responseBody != null && (
                    <div className={styles.bodyBlock}>
                      <div className={styles.bodyLabel}>Response Body</div>
                      <pre className={styles.bodyPre}>
                        {JSON.stringify(entry.responseBody, null, 2)}
                      </pre>
                    </div>
                  )}
                  {entry.errorMessage != null && (
                    <div className={styles.bodyBlock}>
                      <div className={styles.bodyLabel}>Error</div>
                      <pre className={clsx(styles.bodyPre, styles.errorText)}>
                        {entry.errorMessage}
                      </pre>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export function NetworkDebugger() {
  const [open, setOpen] = useState(false);
  const [panelTab, setPanelTab] = useState<PanelTab>('network');
  const logs = useSyncExternalStore(
    networkLog.subscribe,
    networkLog.getSnapshot
  );

  const handleClear = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    networkLog.clear();
  }, []);

  if (!isDevEnvironment()) return null;

  return (
    <>
      <button
        className={styles.fab}
        onClick={() => setOpen(true)}
        title="Dev Tools"
      >
        <span className={styles.fabIcon}>🔧</span>
      </button>

      <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
        <div className={styles.sheetHeader}>
          <div className={styles.panelTabs}>
            <button
              className={clsx(
                styles.panelTab,
                panelTab === 'network' && styles.panelTabActive
              )}
              onClick={() => setPanelTab('network')}
            >
              Network {panelTab === 'network' && `(${logs.length})`}
            </button>
            <button
              className={clsx(
                styles.panelTab,
                panelTab === 'login' && styles.panelTabActive
              )}
              onClick={() => setPanelTab('login')}
            >
              Login
            </button>
          </div>
          {panelTab === 'network' && (
            <button className={styles.clearBtn} onClick={handleClear}>
              Clear
            </button>
          )}
        </div>

        {panelTab === 'network' && (
          <div className={styles.logList}>
            {logs.length === 0 ? (
              <div className={styles.emptyState}>요청 없음</div>
            ) : (
              logs.map((entry) => <LogItem key={entry.id} entry={entry} />)
            )}
          </div>
        )}

        {panelTab === 'login' && <DevLoginPanel />}
      </BottomSheet>
    </>
  );
}
