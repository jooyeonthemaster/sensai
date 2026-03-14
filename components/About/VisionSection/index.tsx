'use client';

import { motion } from 'framer-motion';

const VISION_LINES = [
  '우리는 AI를 이미지 생성의 도구가 아닌, 인식의 매체로 사용합니다.',
  'AI가 관람자의 얼굴, 시선, 움직임을 읽는 순간 작품이 태어납니다.',
  '100명의 관람자는 100개의 서로 다른 작품을 만납니다.',
  '관람자의 존재 자체가 작품의 재료가 되는 경험을 설계합니다.',
];

export default function VisionSection() {
  return (
    <section className="py-24">
      <h2 className="mb-4 font-serif text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-1)]">
        Vision & Story
      </h2>
      <p className="mb-12 font-sans text-xs tracking-widest text-[var(--color-text-3)]">
        일해라컴퍼니의 세계관
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
    </section>
  );
}
