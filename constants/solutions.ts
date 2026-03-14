import type { Solution } from '@/types';

export const SOLUTIONS: Solution[] = [
  {
    slug: 'festivals',
    title: '축제·이벤트',
    titleEn: 'For Festivals',
    subtitle: '지자체·지역 축제에 AI 미디어아트를 도입하세요',
    description: [
      '센세이의 AI 인터랙티브 미디어아트는 축제 현장을 관객 참여형 체험 공간으로 변화시킵니다.',
      '관람자의 움직임, 표정, 관계를 실시간으로 인식하고 반응하는 작품은 일반적인 전시와 차별화된 몰입감을 제공합니다.',
      '설치부터 운영, 철수까지 턴키 서비스로 제공하며, 축제의 성격과 규모에 맞춘 최적의 IP를 제안합니다.',
    ],
    features: [
      '관객 참여형 AI 인터랙티브 체험',
      '축제 테마에 맞춘 커스텀 연출',
      '설치–운영–철수 턴키 서비스',
      '실시간 관람 데이터 리포트 제공',
    ],
    process: [
      { step: 1, title: '상담', description: '축제 규모, 공간, 일정 파악 및 적합 IP 추천' },
      { step: 2, title: '기획', description: '현장 답사, 공간 설계, 연출 기획안 제작' },
      { step: 3, title: '설치', description: '장비 반입, 설치, 테스트 및 리허설' },
      { step: 4, title: '운영·지원', description: '축제 기간 현장 운영 인력 상주, 기술 지원' },
    ],
  },
  {
    slug: 'popups',
    title: '팝업·공간마케팅',
    titleEn: 'For Pop-ups',
    subtitle: '브랜드 팝업스토어에 차별화된 경험을 더하세요',
    description: [
      'AI 미디어아트를 통해 브랜드의 메시지를 감각적으로 전달하는 몰입형 공간을 설계합니다.',
      '방문자가 직접 참여하고 반응하는 인터랙티브 설치로 SNS 확산과 브랜드 인지도를 극대화합니다.',
      '단기 팝업부터 장기 상설 공간까지, 브랜드의 필요에 맞는 유연한 운영 방식을 지원합니다.',
    ],
    features: [
      '브랜드 아이덴티티 반영 커스텀 연출',
      'SNS 바이럴을 위한 포토존 연계',
      '방문자 인터랙션 데이터 수집·분석',
      '단기·장기 운영 유연 대응',
    ],
    process: [
      { step: 1, title: '상담', description: '브랜드 방향성, 공간 조건, 예산 논의' },
      { step: 2, title: '기획', description: '브랜드 맞춤 연출 콘셉트 및 공간 설계' },
      { step: 3, title: '설치', description: '현장 설치, 브랜드 요소 통합, 테스트' },
      { step: 4, title: '운영·지원', description: '운영 기간 기술 지원 및 데이터 리포팅' },
    ],
  },
  {
    slug: 'customization',
    title: '커스텀 제작',
    titleEn: 'Customization',
    subtitle: '클라이언트의 비전을 AI 미디어아트로 구현합니다',
    description: [
      '기존 IP를 기반으로 하되, 클라이언트의 캐릭터, 제품, 브랜드 스토리를 반영한 완전 맞춤형 미디어아트를 제작합니다.',
      '콘셉트 기획부터 기술 개발, 설치, 운영까지 전 과정을 센세이 팀이 직접 수행합니다.',
      '기업 행사, 전시관, 뮤지엄, 문화시설 등 다양한 공간에 적용 가능합니다.',
    ],
    features: [
      '클라이언트 비전 기반 완전 맞춤 제작',
      'AI 인터랙션 기술 자체 개발',
      '콘셉트–개발–설치–유지보수 일괄 수행',
      '지적재산권 협의 가능',
    ],
    process: [
      { step: 1, title: '상담', description: '클라이언트 비전, 공간, 예산, 일정 논의' },
      { step: 2, title: '콘셉트', description: '맞춤형 콘셉트 기획 및 프로토타입 제작' },
      { step: 3, title: '개발·제작', description: 'AI 모델 개발, 하드웨어 제작, 소프트웨어 통합' },
      { step: 4, title: '설치·인도', description: '현장 설치, 테스트, 운영 교육 및 유지보수 계약' },
    ],
  },
];
