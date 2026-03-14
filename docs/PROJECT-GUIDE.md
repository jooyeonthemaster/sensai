# SENSAI 홈페이지 프로젝트 가이드

> 프로젝트 진행 중 참조하는 종합 문서. 프로젝트의 맥락, 디자인 결정, 기술 설계를 모두 포함.
> 최종 업데이트: 2026-03-14

---

## 1. 프로젝트 개요

### SENSAI란
SENSAI(센세이)는 **AI를 '매체'로 사용하는 미디어아트 스튜디오**다.
Stable Diffusion이나 Midjourney처럼 AI로 이미지를 '생성'하는 것이 아니라, AI가 **관람자의 얼굴, 시선, 움직임, 관계를 '인식'**하고 그에 반응하여 빛, 소리, 영상을 실시간으로 만들어내는 주체다.

핵심 명제: **"관람자가 작품을 완성한다."**
100명이 오면 100개의 완전히 다른 작품이 생긴다.

### 예술사적 위치
백남준(비디오아트) → teamLab/d'strict(몰입형 체험) → **SENSAI(AI가 인식하는 주체가 되는 미디어아트)**

### 홈페이지 목적
- **2026 예술분야 초기창업 지원사업 공모** 지원용 홍보 홈페이지
- 지원 사업 특성상 **순수 예술**로서의 가치를 전면에 내세움 (상업적 요소 배제)
- 포트폴리오 중심 구성 + B2B 문의 연동
- MVP 수준이지만 **완성도 높은 UI/UX**가 일차 목표

### 기업 정보
| 항목 | 내용 |
|------|------|
| 기업명 | 일해라컴퍼니 |
| 브랜드명 | SENSAI (센세이) |
| 대표자 | 김주연 (20대, 법학/컴퓨터공학) |
| 이사 | 김지우 (미디어아트) |
| 개업일 | 2025.05.01 |
| 사업자등록번호 | 715-13-02963 |
| 웹사이트 | sensai.ai.kr |
| 이메일 | jooyeon74397430@gmail.com |

---

## 2. 기술 스택

| 영역 | 기술 | 버전/상세 |
|------|------|-----------|
| 프레임워크 | **Next.js** (App Router) | 16.1.6 |
| UI 라이브러리 | **React** | 19 |
| 스타일링 | **Tailwind CSS** | v4 |
| 애니메이션 | **Framer Motion** | 12.x |
| 백엔드/DB | **Firebase** (Firestore) | 클라이언트 SDK |
| 인증 | **Firebase Authentication** | 이메일/비밀번호 |
| 폰트 | **Google Fonts** | Cormorant Garamond + Pretendard |
| 배포 | **Vercel** | 무료 티어 |
| 언어 | **TypeScript** | strict mode |

### Firebase 프로젝트
| 항목 | 값 |
|------|-----|
| 프로젝트 ID | sensai-feecf |
| Auth Domain | sensai-feecf.firebaseapp.com |
| Firestore 리전 | asia-northeast3 (서울) |
| 인증 방식 | 이메일/비밀번호 (관리자 1인) |

---

## 3. 보유 작품 IP (5종)

| # | slug | 한국어명 | 영문명 | 예술적 질문 | 매체/기술 | 연도 |
|---|------|---------|--------|------------|----------|------|
| 1 | gaze-of-others | 타인의 시선 | The Gaze of Others | 기계는 나를 어떻게 보는가 | AI 컴퓨터비전 · 실시간 얼굴 인식 · 프로젝션 | 2025 |
| 2 | resonance | 공명 | Resonance | 관계는 어떤 소리를 가지는가 | AI 관계 인식 · 실시간 사운드 생성 · 물리적 오브제 | 2025 |
| 3 | afterimage | 잔상 | Afterimage | 한 번의 관람이 한 번뿐인 작품이 된다 | AI 움직임 트래킹 · 잔상 시각화 · 실시간 렌더링 | 2025 |
| 4 | impossible-companions | 반려 불가능한 것들 | Impossible Companions | 돌볼 수 없는 것을 돌본다는 것 | AI 인터랙션 · 반려 오브제 · 감각 피드백 | 2025 |
| 5 | time-of-plants | 식물의 시간 | Time of Plants | 식물은 우리를 어떻게 느끼는가 | 식물 전기신호 센싱 · AI 해석 · 빛/소리 변환 | 2025 |

---

## 4. 디자인 시스템

### 색상 (CSS 변수)
```
--color-bg:      #0a0a0a   (배경 — 진한 차콜)
--color-surface: #141414   (카드/섹션 배경)
--color-border:  #222222   (구분선)
--color-text-1:  #e8e8e8   (주요 텍스트)
--color-text-2:  #888888   (보조 텍스트)
--color-text-3:  #555555   (비활성, 메타 정보)
악센트:          없음       (모노크롬 — 작품 색감이 유일한 컬러)
```

### 타이포그래피
```
헤드라인:  세리프 — Cormorant Garamond (영문) / Noto Serif KR (한국어)
본문:      산세리프 — Pretendard
캡션/메타: 산세리프 300 weight
```

### 애니메이션 원칙
- **절제**: 스크롤 리빌(페이드업) 정도만
- **속도**: 0.8~1.2초, ease-out
- **트리거**: Intersection Observer (뷰포트 진입 시)
- **호버**: 작품 이미지 `scale(1.02)` + 은은한 톤 조정
- **금지**: 바운스, 스프링, 파티클, 네온/사이버펑크 전환

---

## 5. 사이트 구조

### 공개 페이지 (Route Group: `(public)`)
| 경로 | 내용 |
|------|------|
| `/` | 홈 — Hero + ValueProposition + FeaturedWorks + QuickContact |
| `/works` | 작품 목록 — 카테고리/기술 필터 + 그리드 |
| `/works/[slug]` | 작품 상세 — 풀이미지 + 설명 + 스펙 + 문의폼 |
| `/solutions` | 솔루션 메인 — 서비스 카드 |
| `/solutions/festivals` | 축제·이벤트 솔루션 |
| `/solutions/popups` | 팝업·전시 솔루션 |
| `/solutions/customization` | 커스텀 제작 솔루션 |
| `/about` | 회사 소개 — 비전 + 기술력 + 팀 |
| `/contact` | 문의 — 4단계 위자드 폼 (Firestore 연동) |
| `/legal/privacy` | 개인정보처리방침 |
| `/legal/terms` | 이용약관 |

### 관리자 페이지 (`/admin`)
| 경로 | 내용 |
|------|------|
| `/admin` | → `/admin/dashboard` 리다이렉트 |
| `/admin/login` | 관리자 로그인 (Firebase Auth) |
| `/admin/dashboard` | 대시보드 — 통계 카드 + 최근 문의 |
| `/admin/works` | 작품 목록 — featured 토글, 삭제 |
| `/admin/works/new` | 작품 생성 폼 |
| `/admin/works/[id]/edit` | 작품 수정 폼 |
| `/admin/inquiries` | 문의 목록 — 상태 필터(신규/진행중/완료/보관) |
| `/admin/inquiries/[id]` | 문의 상세 — 상태 변경 + 관리자 메모 |
| `/admin/notices` | 공지 목록 — 발행 상태 표시 |
| `/admin/notices/new` | 공지 생성 폼 |
| `/admin/notices/[id]/edit` | 공지 수정 폼 |

---

## 6. 파일 구조

```
sensai-web/
├── app/
│   ├── layout.tsx                          # 루트 레이아웃 (html/body/fonts만)
│   ├── globals.css                         # Tailwind + CSS 변수
│   │
│   ├── (public)/                           # 공개 사이트 (Header + Footer 포함)
│   │   ├── layout.tsx                      # Header + Footer 래핑
│   │   ├── page.tsx                        # 홈
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── works/
│   │   │   ├── page.tsx                    # 작품 목록 (메타데이터 서버 컴포넌트)
│   │   │   ├── WorksContent.tsx            # 작품 목록 클라이언트 컴포넌트
│   │   │   └── [slug]/page.tsx             # 작품 상세
│   │   ├── solutions/
│   │   │   ├── page.tsx                    # 솔루션 메인
│   │   │   ├── festivals/page.tsx
│   │   │   ├── popups/page.tsx
│   │   │   └── customization/page.tsx
│   │   └── legal/
│   │       ├── privacy/page.tsx
│   │       └── terms/page.tsx
│   │
│   └── admin/                              # 관리자 (Sidebar + AdminHeader)
│       ├── layout.tsx                      # 인증 체크 + 사이드바 래핑
│       ├── page.tsx                        # → /admin/dashboard 리다이렉트
│       ├── login/page.tsx                  # 로그인 폼
│       ├── dashboard/page.tsx              # 대시보드
│       ├── works/
│       │   ├── page.tsx                    # 작품 목록 테이블
│       │   ├── new/page.tsx                # 작품 생성
│       │   └── [id]/edit/page.tsx          # 작품 수정
│       ├── inquiries/
│       │   ├── page.tsx                    # 문의 목록
│       │   └── [id]/page.tsx               # 문의 상세
│       └── notices/
│           ├── page.tsx                    # 공지 목록
│           ├── new/page.tsx                # 공지 생성
│           └── [id]/edit/page.tsx          # 공지 수정
│
├── components/
│   ├── Header/                             # 글로벌 헤더 (공개 사이트)
│   │   ├── index.tsx
│   │   ├── hooks/useScrollDirection.ts
│   │   └── components/
│   │       ├── DesktopNav.tsx
│   │       ├── DesktopDropdown.tsx
│   │       ├── MobileMenu.tsx
│   │       ├── MobileAccordion.tsx
│   │       └── InquireCTA.tsx
│   │
│   ├── Footer/                             # 글로벌 푸터
│   │   ├── index.tsx
│   │   └── components/
│   │       ├── FooterInfo.tsx
│   │       ├── FooterNav.tsx
│   │       └── FooterSocial.tsx
│   │
│   ├── Home/                               # 홈페이지 섹션
│   │   ├── HomeHero/index.tsx
│   │   ├── ValueProposition/index.tsx
│   │   ├── FeaturedWorks/index.tsx
│   │   └── QuickContact/index.tsx
│   │
│   ├── Works/                              # 작품 목록 관련
│   │   ├── WorkCard/index.tsx
│   │   ├── WorksFilter/
│   │   │   ├── index.tsx
│   │   │   └── hooks/useWorksFilter.ts
│   │   └── WorksGrid/index.tsx
│   │
│   ├── WorkDetail/                         # 작품 상세 관련
│   │   ├── WorkSpecs/index.tsx
│   │   └── WorkInquiryForm/index.tsx       # Firestore 연동 (createInquiry)
│   │
│   ├── Solutions/                          # 솔루션 페이지
│   │   ├── SolutionHero/index.tsx
│   │   ├── SolutionCard/index.tsx
│   │   └── ProcessTimeline/index.tsx
│   │
│   ├── About/                              # 소개 페이지
│   │   ├── VisionSection/index.tsx
│   │   ├── TechnologySection/index.tsx
│   │   └── TeamSection/index.tsx
│   │
│   ├── ContactWizard/                      # 문의 위자드 (4단계)
│   │   ├── index.tsx                       # 위자드 오케스트레이터
│   │   ├── types.ts                        # WizardState, WizardAction 타입
│   │   ├── hooks/useWizardState.ts         # useReducer + submitForm (Firestore)
│   │   └── components/
│   │       ├── StepIndicator.tsx
│   │       ├── Step1InquiryType.tsx         # 문의 유형 선택
│   │       ├── Step2ProjectScale.tsx        # 예산/기한/공간
│   │       ├── Step3CompanyInfo.tsx         # 회사/담당자 정보
│   │       └── Step4Completion.tsx          # 완료 화면
│   │
│   ├── Admin/                              # 관리자 컴포넌트
│   │   ├── AdminSidebar/index.tsx          # 사이드바 네비게이션
│   │   ├── AdminHeader/index.tsx           # 상단바 (페이지 제목 + 로그아웃)
│   │   ├── Dashboard/components/
│   │   │   ├── StatCard.tsx                # 통계 카드
│   │   │   └── RecentInquiries.tsx         # 최근 문의 미니 테이블
│   │   ├── WorkForm/index.tsx              # 작품 CRUD 폼 (풀 사양)
│   │   └── NoticeForm/index.tsx            # 공지 CRUD 폼
│   │
│   ├── ScrollReveal/index.tsx              # 스크롤 리빌 래퍼
│   └── shared/
│       ├── InquiryButton/index.tsx
│       └── SectionHeading/index.tsx
│
├── lib/
│   ├── firebase/
│   │   ├── config.ts                       # Firebase 앱 초기화
│   │   ├── auth.ts                         # signIn, signOut, onAuthChange
│   │   ├── firestore.ts                    # 범용 CRUD (getDocuments, createDocument 등)
│   │   └── useAuth.ts                      # React 인증 상태 훅
│   └── data/
│       ├── works.ts                        # 작품 데이터 접근 함수
│       ├── inquiries.ts                    # 문의 데이터 접근 함수
│       └── notices.ts                      # 공지 데이터 접근 함수
│
├── constants/
│   ├── works.ts                            # 5개 작품 하드코딩 데이터
│   ├── solutions.ts                        # 솔루션 데이터
│   ├── navigation.ts                       # 네비게이션 메뉴 구조
│   ├── contact.ts                          # 문의 폼 옵션 (유형/예산/기한)
│   ├── news.ts                             # 뉴스/공지 데이터
│   ├── team.ts                             # 팀 멤버 데이터
│   └── site.ts                             # 사이트 메타 정보
│
├── types/
│   └── index.ts                            # 공통 타입 (Work, ContactFormData 등)
│
├── hooks/
│   └── useMediaQuery.ts                    # 반응형 미디어 쿼리 훅
│
├── docs/
│   ├── PROJECT-GUIDE.md                    # 이 문서
│   ├── CODE-STRUCTURE-GUIDE.md             # 코드 구조 규칙
│   ├── 홈페이지_UX_레퍼런스_분석.md
│   └── 홈페이지_웹구조_및_기능분석.md
│
├── .env.local                              # Firebase 환경변수 (git 미추적)
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

---

## 7. 데이터 흐름

### 공개 사이트 데이터
| 데이터 | 소스 | 비고 |
|--------|------|------|
| 작품 목록/상세 | `constants/works.ts` (하드코딩) | 추후 Firestore 전환 가능 |
| 솔루션 | `constants/solutions.ts` (하드코딩) | |
| 팀 정보 | `constants/team.ts` (하드코딩) | |
| 뉴스/공지 | `constants/news.ts` (하드코딩) | 추후 Firestore 전환 가능 |
| 문의 제출 | **Firestore** `inquiries` 컬렉션 | 실시간 저장 |

### 관리자 데이터
| 데이터 | 소스 | 컬렉션 |
|--------|------|--------|
| 작품 CRUD | Firestore | `works` |
| 문의 관리 | Firestore | `inquiries` |
| 공지 CRUD | Firestore | `notices` |

### Firestore 컬렉션 구조

#### `works` 컬렉션
```
{
  slug: string,
  title: string,
  titleEn: string,
  question: string,
  medium: string,
  year: number,
  description: string[],
  spaceCategory: 'exhibition' | 'festival' | 'commercial',
  technologies: string[],
  featured: boolean,
  isPublished: boolean,
  sortOrder: number,
  specs: {
    area: string,
    ceilingHeight: string,
    setupTime: string,
    power: string,
    equipment: string[],
    darkRoom: boolean,
  },
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

#### `inquiries` 컬렉션
```
{
  inquiryType: string,
  budgetRange: string,
  deadline: string,
  spaceSize: string,
  companyName: string,
  contactPerson: string,
  email: string,
  phone: string,
  message: string,
  workSlug: string,         // 작품 문의인 경우
  workTitle: string,        // 작품 문의인 경우
  status: 'new' | 'in_progress' | 'completed' | 'archived',
  isRead: boolean,
  adminNotes: string,
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

#### `notices` 컬렉션
```
{
  title: string,
  date: string,
  content: string,
  url: string,
  source: string,
  isPublished: boolean,
  sortOrder: number,
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

### Firestore 보안 규칙
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /works/{workId} {
      allow read: if true;                    // 공개 읽기
      allow write: if request.auth != null;   // 관리자만 쓰기
    }
    match /inquiries/{inquiryId} {
      allow create: if true;                  // 누구나 문의 생성
      allow read, update, delete: if request.auth != null;  // 관리자만
    }
    match /notices/{noticeId} {
      allow read: if true;                    // 공개 읽기
      allow write: if request.auth != null;   // 관리자만 쓰기
    }
  }
}
```

---

## 8. 관리자 페이지 상세

### 인증 흐름
1. `/admin/*` 접근 → `app/admin/layout.tsx`에서 `useAuth()` 훅으로 인증 상태 확인
2. 미인증 → `/admin/login` 렌더링 (사이드바 없음)
3. 인증 → AdminSidebar + 자식 페이지 렌더링
4. 로그아웃 → AdminHeader의 로그아웃 버튼 → Firebase signOut

### 대시보드
- 통계 카드 4개: 총 작품 수, 총 문의 수, 신규 문의 수, 공지사항 수
- 최근 문의 5건 미니 테이블 (회사명, 유형, 상태, 날짜)
- 바로가기 링크 (작품 추가, 문의 확인 등)

### 작품 관리
- **목록**: 테이블 (제목, 카테고리, featured 토글 스위치, 발행 상태, 연도, 수정/삭제)
- **생성/수정 폼**:
  - 기본 정보 (slug, 한/영 제목, 예술적 질문, 매체, 연도)
  - 설명 (동적 문단 배열 — 추가/삭제)
  - 분류 (공간 카테고리 select + 기술 태그 다중선택)
  - 설치 사양 (면적, 천장높이, 설치시간, 전력, 장비 배열, 다크룸 토글)
  - 설정 (featured, 발행, 정렬순서)

### 문의 관리
- **목록**: 상태 필터 버튼 (전체/신규/진행중/완료/보관) + 테이블 (회사명, 유형, 상태 뱃지, 날짜)
- **상세**: 전체 폼 데이터 표시 + 상태 드롭다운 + 관리자 메모 textarea + 자동 읽음 처리

### 공지 관리
- **목록**: 테이블 (제목, 날짜, 발행 상태 도트, 수정/삭제)
- **생성/수정 폼**: 제목, 날짜, 내용, URL, 출처, 발행 토글, 정렬순서

---

## 9. 구현 완료 이력

### Phase 1: 기반 구축
- Next.js 16 + React 19 + Tailwind CSS 4 프로젝트 초기화
- 다크 테마 CSS 변수 시스템 구축
- Google Fonts (Cormorant Garamond + Pretendard) 설정
- 공통 타입 정의 (`types/index.ts`)
- 작품/솔루션/팀/네비게이션 상수 데이터 (`constants/`)

### Phase 2: 공개 사이트 페이지
- 홈페이지 (Hero, ValueProposition, FeaturedWorks, QuickContact)
- 작품 목록 (필터 + 그리드) + 작품 상세 (스펙 + 문의폼)
- 솔루션 메인 + 3개 서브페이지
- 회사 소개 (비전 + 기술 + 팀)
- 문의 위자드 (4단계 폼)

### Phase 3: 헤더/푸터/네비게이션
- 반응형 헤더 (데스크톱 드롭다운 + 모바일 메뉴)
- 스크롤 방향 감지 숨김/표시
- 푸터 (회사정보 + 네비게이션 + 소셜)

### Phase 4: 작품 상세 + 인터랙션
- 작품 상세 페이지 풀 구현
- 설치 사양 컴포넌트 (WorkSpecs)
- 이전/다음 작품 네비게이션

### Phase 5: B2B 솔루션
- 솔루션 허브 + 3개 서브페이지
- ProcessTimeline 컴포넌트
- SolutionCard 재사용 컴포넌트

### Phase 6: 문의 위자드
- 4단계 폼 (유형선택 → 규모 → 회사정보 → 완료)
- useReducer 기반 상태 관리
- AnimatePresence 슬라이드 전환

### Phase 7: 법적 페이지 + SEO
- 개인정보처리방침 / 이용약관
- 각 페이지 SEO 메타데이터
- 불필요 파일 정리

### Phase 8: Firebase 백엔드 + 관리자 페이지
- Firebase 프로젝트 설정 (Firestore + Auth)
- 라우트 그룹 재구조화: `(public)` / `admin` 분리
- 루트 layout에서 Header/Footer 분리 → `(public)/layout.tsx`로 이동
- Firebase 인프라 코드 (`lib/firebase/`)
- 데이터 접근 레이어 (`lib/data/`)
- 관리자 인증 (로그인/로그아웃)
- 대시보드 (통계 + 최근 문의)
- 작품 CRUD (목록 + 생성/수정 폼 + featured 토글)
- 문의 관리 (목록 + 상태 필터 + 상세/상태변경/메모)
- 공지 CRUD (목록 + 생성/수정 폼)

### Phase 9: 프론트엔드 ↔ Firestore 연동
- ContactWizard 제출 → Firestore `inquiries` 컬렉션 저장
- WorkInquiryForm 제출 → Firestore `inquiries` 컬렉션 저장
- 제출 중/에러/완료 상태 처리
- "준비 중" 안내 문구 제거
- 빌드 검증 통과 (26페이지)

---

## 10. 현재 상태 및 향후 과제

### 완료된 기능 (실제 동작)
- [x] 전체 공개 사이트 UI (홈, 작품, 솔루션, 소개, 법적)
- [x] 반응형 헤더/푸터/네비게이션
- [x] 스크롤 리빌 애니메이션
- [x] 문의 폼 제출 → Firestore 저장
- [x] 작품 상세 문의 폼 → Firestore 저장
- [x] 관리자 로그인/로그아웃
- [x] 관리자 대시보드 (통계 + 최근 문의)
- [x] 관리자 작품 CRUD + featured 토글
- [x] 관리자 문의 관리 (상태 변경 + 메모)
- [x] 관리자 공지 CRUD
- [x] `npm run build` 성공

### UI만 있는 기능 (백엔드 미연동)
- 공개 사이트 작품 데이터 → `constants/works.ts` 하드코딩 (Firestore 미전환)
- 공개 사이트 뉴스/공지 → `constants/news.ts` 하드코딩 (Firestore 미전환)
- 작품 이미지 → CSS 그라디언트 플레이스홀더 (실제 이미지 미교체)

### 향후 과제
1. **공개 사이트 Firestore 전환**: 작품/공지를 constants 대신 Firestore에서 읽기
2. **이미지 업로드**: Firebase Storage + 작품 이미지 관리
3. **데이터 시딩**: `constants/` 데이터를 Firestore에 초기 입력
4. **Vercel 배포**: 환경변수 설정 + 프로덕션 배포
5. **도메인 연결**: sensai.ai.kr 도메인

---

## 11. 환경 설정

### 로컬 개발
```bash
npm install
npm run dev          # http://localhost:3000
```

### 환경변수 (.env.local)
```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

### 빌드
```bash
npm run build        # 프로덕션 빌드 (26페이지)
npm run start        # 프로덕션 서버
```

---

## 12. 레퍼런스 분석 결과 (요약)

### 조사한 스튜디오 (12개)
teamLab, Random International, Refik Anadol, Studio Drift, Universal Everything, Moment Factory, Marshmallow Laser Feast, NONOTAK, Quayola, Zimoun, Ryoji Ikeda, d'strict

### 핵심 발견 → 적용
| 발견 | 적용 |
|------|------|
| AI/테크 스튜디오는 다크 테마 | **다크 테마 확정** |
| 순수 예술일수록 네비 극단적 미니멀 | **최소 네비게이션** |
| 작품 이미지가 시각의 100% | **작품 풀스크린 + UI 장식 최소화** |
| 세리프 르네상스 (2025-26 트렌드) | **세리프 헤드라인 + 산세리프 본문** |
| Zimoun: 재료 사양까지 기재 | **작품에 매체/기술 명시** |

---

## 13. 검증 체크리스트

- [x] `npm run dev` 로컬 동작
- [x] 메인 페이지 전체 스크롤 동작
- [x] 각 작품 클릭 → 상세 페이지 라우팅
- [x] 모바일/태블릿/데스크톱 반응형
- [x] 다크 테마 일관성
- [x] 문의 폼 제출 → Firestore 저장
- [x] 관리자 로그인/로그아웃
- [x] 관리자 작품 CRUD
- [x] 관리자 문의 관리
- [x] 관리자 공지 CRUD
- [x] `npm run build` 성공 (26페이지)
- [ ] Vercel 프로덕션 배포
- [ ] 도메인 연결
- [ ] 실제 작품 이미지 교체
