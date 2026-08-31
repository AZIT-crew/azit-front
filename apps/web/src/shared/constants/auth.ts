export const AUTH_PROVIDER = {
  KAKAO: 'KAKAO',
  APPLE: 'APPLE',
} as const;

/** 카카오 인가 콜백에서 로그인이 아닌 "계정 연동" 요청임을 구분하기 위한 state 값 */
export const KAKAO_LINK_ACCOUNT_STATE = 'link-account';
