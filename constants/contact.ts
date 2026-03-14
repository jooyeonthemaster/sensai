import type { InquiryType } from '@/types';

export interface InquiryOption {
  type: InquiryType;
  title: string;
  titleEn: string;
  description: string;
}

export const INQUIRY_OPTIONS: InquiryOption[] = [
  {
    type: 'festival',
    title: '축제·이벤트',
    titleEn: 'Festival & Event',
    description: '지자체·지역 축제, 문화 행사에 미디어아트 도입',
  },
  {
    type: 'permanent',
    title: '상설 전시',
    titleEn: 'Permanent Exhibition',
    description: '전시관, 뮤지엄, 문화시설 상설 설치',
  },
  {
    type: 'custom',
    title: '커스텀 프로젝트',
    titleEn: 'Custom Project',
    description: '브랜드·기업 맞춤형 미디어아트 기획·제작',
  },
  {
    type: 'other',
    title: '기타 문의',
    titleEn: 'Other',
    description: '협업 제안, 기술 문의, 기타',
  },
];

export const BUDGET_RANGES = [
  { value: '', label: '선택해주세요' },
  { value: 'under-10m', label: '1,000만원 미만' },
  { value: '10m-30m', label: '1,000만원 – 3,000만원' },
  { value: '30m-50m', label: '3,000만원 – 5,000만원' },
  { value: '50m-100m', label: '5,000만원 – 1억원' },
  { value: 'over-100m', label: '1억원 이상' },
  { value: 'undecided', label: '미정' },
] as const;
