'use client';

import { motion } from 'framer-motion';

const VISION_LINES = [
  '우리는 AI를 이미지 생성의 도구가 아닌, 인식의 매체로 사용합니다.',
  'AI가 관람자의 얼굴, 시선, 움직임을 읽는 순간 — 작품이 태어납니다.',
  '100명의 관람자는 100개의 서로 다른 작품을 만납니다.',
  '관람자의 존재 자체가 작품의 재료가 되는 경험을 설계합니다.',
];

const AI_PILLARS = [
  {
    title: '관람자가 작품을 완성한다',
    description:
      '70년간 미완이었던 미디어아트의 명제를 AI가 해결합니다. 관람자가 오면 자동 생성되는 콘텐츠 — 콘텐츠 수명은 무한하고, 관람자마다 완전히 다른 산출물이 탄생합니다.',
  },
  {
    title: '기계의 시선',
    description:
      'AI 시대에 "인간 조건을 감각 가능하게 만드는" 유일한 포맷입니다. 관객이 작품을 바라보는 것이 아니라, AI가 관객을 바라보고 해석하는 — 시선의 전복.',
  },
  {
    title: '공감각적 번역',
    description:
      '학습된 의미를 감각의 경계를 넘어 번역합니다. 얼굴을 색으로, 관계를 소리로, 식물의 전기신호를 빛으로 — 감각 간 완전한 번역이 가능한 최초의 매체.',
  },
];

export default function VisionSection() {
  return (
    <section className="py-24">
      <h2 className="mb-4 font-serif text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-1)]">
        Vision & Story
      </h2>
      <p className="mb-12 font-sans text-xs tracking-widest text-[var(--color-text-3)]">
        왜 AI여야 하는가 — 미디어아트의 세 가지 예술적 과제
      </p>

      <div className="max-w-[700px] space-y-6">
        {VISION_LINES.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeOut' }}
            className="font-serif text-xl leading-relaxed text-[var(--color-text-2)]"
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 max-w-[700px] font-sans text-sm leading-relaxed text-[var(--color-text-3)]"
      >
        백남준(비디오아트) → teamLab/d&apos;strict(몰입형 체험) → SENSAI(AI가 인식하는 주체가 되는 미디어아트)
      </motion.p>

      {/* AI 3대 논리 */}
      <div className="mt-20 grid gap-10 md:grid-cols-3">
        {AI_PILLARS.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeOut' }}
            className="border-t border-[var(--color-border)] pt-6"
          >
            <h3 className="font-serif text-lg text-[var(--color-text-1)]">
              {pillar.title}
            </h3>
            <p className="mt-3 font-sans text-sm font-light leading-relaxed text-[var(--color-text-2)]">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
