'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';

const CASES = [
  {
    client: '뷰티 브랜드 팝업스토어',
    location: '서울 상수동',
    date: '2025.08',
    duration: '3일',
    visitors: '약 800명',
    work: '타인의 시선 (변형)',
    result:
      'AI가 방문자의 얼굴을 분석하여 개인별 컬러 아트프린트를 생성. 협업 브랜드 SNS 언급량 40% 이상 향상, 참여 고객 85% 이상이 자발적으로 SNS에 체험 콘텐츠를 공유.',
    highlight: 'SNS 언급량 40%↑',
  },
  {
    client: '서울시 주관 가을 문화축제',
    location: '서울',
    date: '2025.10',
    duration: '5일',
    visitors: '약 1,500명',
    work: '잔상 · 공명',
    result:
      'AI 인터랙티브 미디어아트 체험관을 설치·운영. 축제 참관객의 움직임과 관계를 빛과 소리로 시각화. 축제 주최측 만족도 최상위 평가, 다음 시즌 재납품 구두 협의 진행.',
    highlight: '관람객 1,500명',
  },
  {
    client: '백화점 겨울 시즌 이벤트',
    location: '서울',
    date: '2025.11',
    duration: '7일',
    visitors: '약 1,200명',
    work: '타인의 시선 ("올해의 나" 버전)',
    result:
      'AI가 방문자의 얼굴을 분석하여 "올해의 나" 초상을 실시간 생성. 연말 시즌 감성과 결합하여 높은 참여율 기록. 체험 콘텐츠 기반 SNS 바이럴 효과 확인.',
    highlight: '체험자 1,200명',
  },
];

export default function CaseStudies() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-32">
      <SectionHeading title="Case Studies" subtitle="센세이의 프로젝트 수행 사례" />

      <div className="grid gap-8 md:grid-cols-3">
        {CASES.map((c, i) => (
          <motion.div
            key={c.client}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="flex flex-col border border-[var(--color-border)] p-6"
          >
            {/* Highlight badge */}
            <span className="mb-4 inline-block w-fit border border-[var(--color-text-3)] px-3 py-1 font-sans text-xs tracking-wider text-[var(--color-text-3)]">
              {c.highlight}
            </span>

            <h3 className="font-serif text-lg text-[var(--color-text-1)]">
              {c.client}
            </h3>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs text-[var(--color-text-3)]">
              <span>{c.date}</span>
              <span>{c.location}</span>
              <span>{c.duration}</span>
              <span>{c.visitors}</span>
            </div>

            <p className="mt-2 font-sans text-xs text-[var(--color-text-2)]">
              사용 IP: {c.work}
            </p>

            <p className="mt-4 flex-1 font-sans text-sm font-light leading-relaxed text-[var(--color-text-2)]">
              {c.result}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
