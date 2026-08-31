import type { ApiResponse } from '@/shared/api/baseTypes';
import type { RunType } from '@/shared/types/schedule';

import type {
  CrewMemberDetailResponse,
  CrewMemberListResponse,
  JoinedCrewResponse,
  LinkedProviderItem,
  MyAttendanceResponse,
  MyCrewResponse,
  MyInfoResponse,
  OptionalTermsResponse,
} from './user.model';

export type MyInfoResult = Required<MyInfoResponse>;

export type MyCrewResult = Required<
  Omit<MyCrewResponse, 'memberRole' | 'invitationCode'>
> & {
  memberRole: 'LEADER' | 'MEMBER' | null;
  invitationCode: string | null;
};
export type MyCrewApiResponse = ApiResponse<MyCrewResult[]>;

export type JoinedCrewResult = Required<JoinedCrewResponse>;
export type JoinedCrewApiResponse = ApiResponse<JoinedCrewResult[]>;

export type MyInfoApiResponse = ApiResponse<MyInfoResult>;

export type CrewMemberListResult = Required<CrewMemberListResponse>;
export type CrewMemberDetailResult = Required<CrewMemberDetailResponse>;

export type MemberRole = CrewMemberDetailResult['role'];
export type MemberItem = CrewMemberDetailResult;

export type SocialProvider = LinkedProviderItem['provider'];
export interface LinkedProvidersResult {
  providers: LinkedProviderItem[];
}
export type LinkedProvidersApiResponse = ApiResponse<LinkedProvidersResult>;

export type OptionalTermsResult = Required<OptionalTermsResponse>;
export type OptionalTermsApiResponse = ApiResponse<OptionalTermsResult>;

export type AttendanceRecord = Omit<
  NonNullable<MyAttendanceResponse['attendanceLogs']>[number],
  'runType'
> & {
  runType?: NonNullable<RunType>;
};
