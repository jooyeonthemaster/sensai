'use client';

import { motion } from 'framer-motion';

const VALUES = [
  {
    title: 'Immersive Media Art',
    titleKr: '몰입형 미디어아트',
    description: 'AI가 관람자의 얼굴, 시선, 움직임을 실시간으로 인식하고 반응하는 인터랙티브 설치 작품',
  },
  {
    title: 'Turnkey Solutions',
    titleKr: '턴키 솔루션',
    description: '콘셉트 기획부터 장비 설치, 현장 운영, 철수까지 전 과정을 원스톱으로 제공',
  },
  {
    title: 'Proven Technology',
    titleKr: '검증된 기술',
    description: 'Computer Vision, Generative AI, 센서 기반 인터랙션 등 자체 개발 AI 기술 보유',
  },
];

export default function ValueProposition() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-12 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeOut' }}
            >
              <h3 className="font-serif text-xl text-[var(--color-text-1)]">
                {value.title}
              </h3>
              <p className="mt-1 font-sans text-xs tracking-wider text-[var(--color-text-3)]">
                {value.titleKr}
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-[var(--color-text-2)]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
