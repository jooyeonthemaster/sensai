'use client';

import { motion } from 'framer-motion';

const TECH_ITEMS = [
  {
    title: 'Computer Vision',
    titleKr: '컴퓨터 비전',
    description: '얼굴 인식, 표정 분석, 시선 추적을 통한 실시간 관람자 인식',
  },
  {
    title: 'Generative AI',
    titleKr: '생성형 AI',
    description: '관람자의 데이터를 기반으로 유일무이한 시각적 결과물 실시간 생성',
  },
  {
    title: 'Motion Sensing',
    titleKr: '모션 센싱',
    description: 'LiDAR, 깊이 센서를 활용한 움직임·동선·관계 트래킹',
  },
  {
    title: 'Spatial Sound',
    titleKr: '공간 음향',
    description: '인터랙션 데이터 기반 실시간 사운드 생성 및 멀티채널 재생',
  },
  {
    title: 'Bio Sensing',
    titleKr: '바이오 센싱',
    description: '식물 전기신호 등 생체 데이터 수집 및 AI 해석',
  },
  {
    title: 'Real-time Rendering',
    titleKr: '실시간 렌더링',
    description: '프로젝션 매핑, LED 제어, 실시간 비주얼 렌더링 엔진',
  },
];

export default function TechnologySection() {
  return (
    <section className="border-t border-[var(--color-border)] py-24">
      <h2 className="mb-4 font-serif text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-1)]">
        The Technology
      </h2>
      <p className="mb-12 font-sans text-xs tracking-widest text-[var(--color-text-3)]">
        센세이의 핵심 기술
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="border border-[var(--color-border)] p-6"
          >
            <h3 className="font-sans text-sm font-medium tracking-wide text-[var(--color-text-1)]">
              {item.title}
            </h3>
            <p className="mt-1 font-sans text-xs text-[var(--color-text-3)]">
              {item.titleKr}
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[var(--color-text-2)]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
