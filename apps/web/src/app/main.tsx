import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalErrorBoundary } from '@/app/providers/GlobalErrorBoundary';
import { KakaoDeeplinkProvider } from '@/app/providers/KakaoDeeplinkProvider';
import { ReactQueryProvider } from '@/app/providers/ReactQueryProvider';
import { Stack } from '@/app/routes/stackflow';

import { setupChunkReloadOnPreloadError } from '@/shared/lib/chunkReload';
import { patchFetch } from '@/shared/lib/networkLog';
import { initSentry } from '@/shared/lib/sentry';
import { NetworkDebugger } from '@/shared/ui/dev/NetworkDebugger';
import { PageLoader } from '@/shared/ui/loading/PageLoader';
import { Toaster } from '@/shared/ui/toast';

import '@/app/styles/globals.css';
import '@/app/styles/index.css';

initSentry();
setupChunkReloadOnPreloadError();

const { hostname } = window.location;
if (hostname === 'localhost' || hostname.includes('dev')) {
  patchFetch();
}

async function enableMocking() {
  const { hostname } = window.location;
  const isMockEnv = import.meta.env.DEV || hostname === 'dev.azitcrew.com';
  if (!isMockEnv) return;
  const { worker } = await import('./mocks/browser');
  return worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <GlobalErrorBoundary>
        <ReactQueryProvider>
          <KakaoDeeplinkProvider>
            <Suspense fallback={<PageLoader />}>
              <Stack />
            </Suspense>
            <Toaster
              position="bottom-center"
              toastOptions={{
                duration: 2500,
                className: 'azit-toast',
              }}
            />
          </KakaoDeeplinkProvider>
        </ReactQueryProvider>
      </GlobalErrorBoundary>
      <NetworkDebugger />
    </StrictMode>
  );
});
