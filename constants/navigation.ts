import type { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Works',
    labelEn: 'Works',
    href: '/works',
    children: [
      {
        label: '전체 IP',
        labelEn: 'All IPs',
        href: '/works',
        description: '센세이의 모든 미디어아트 IP',
      },
      {
        label: '공간별',
        labelEn: 'By Space',
        href: '/works?view=space',
        description: '전시관, 축제, 상업공간별 분류',
      },
      {
        label: '기술별',
        labelEn: 'By Technology',
        href: '/works?view=tech',
        description: 'AI 기술 유형별 분류',
      },
    ],
  },
  {
    label: 'Solutions',
    labelEn: 'Solutions',
    href: '/solutions',
    children: [
      {
        label: '축제·이벤트',
        labelEn: 'For Festivals',
        href: '/solutions/festivals',
        description: '지자체·지역 축제 미디어아트 도입',
      },
      {
        label: '팝업·공간마케팅',
        labelEn: 'For Pop-ups',
        href: '/solutions/popups',
        description: '브랜드 팝업스토어 및 공간 마케팅',
      },
      {
        label: '커스텀 제작',
        labelEn: 'Customization',
        href: '/solutions/customization',
        description: '클라이언트 맞춤형 미디어아트 기획',
      },
    ],
  },
  {
    label: 'About',
    labelEn: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    labelEn: 'Contact',
    href: '/contact',
  },
];
