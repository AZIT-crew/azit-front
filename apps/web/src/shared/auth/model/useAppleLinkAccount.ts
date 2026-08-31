import { useMutation } from '@tanstack/react-query';

import { BusinessError } from '@/shared/api/apiHandler';
import { postCreateAppleLinkSession } from '@/shared/auth/api/postCreateAppleLinkSession';
import { buildAppleAuthorizeUrl } from '@/shared/lib/appleAuth';
import { toastError } from '@/shared/ui/toast';

const LINK_SESSION_ERROR_MESSAGE: Record<string, string> = {
  ALREADY_LINKED_PROVIDER: '이미 애플 계정이 연동되어 있어요.',
};

export const useAppleLinkAccount = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: postCreateAppleLinkSession,
    onSuccess: ({ result }) => {
      window.location.href = buildAppleAuthorizeUrl(result.state);
    },
    onError: (error) => {
      const message =
        error instanceof BusinessError
          ? (LINK_SESSION_ERROR_MESSAGE[error.code] ??
            '애플 연동을 시작할 수 없어요.')
          : '애플 연동을 시작할 수 없어요.';
      toastError(message);
    },
  });

  const linkWithApple = () => {
    const redirectUrl = `${window.location.origin}/auth/apple/link-callback`;
    mutate({ redirectUrl });
  };

  return { linkWithApple, isPending };
};
