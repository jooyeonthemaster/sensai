'use client';

import { motion } from 'framer-motion';

const STATS = [
  { value: '5', unit: '종', label: '보유 작품 IP' },
  { value: '3,500', unit: '+', label: 'AI 체험 관람자' },
  { value: '15', unit: '건', label: 'B2B 프로젝트 목표 (2026)' },
  { value: '3', unit: '억', label: '매출 목표 (2026)' },
];

export default function Stats() {
  return (
    <section className="border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-1)]">
                {stat.value}
                <span className="text-[0.5em] text-[var(--color-text-3)]">
                  {stat.unit}
                </span>
              </p>
              <p className="mt-2 font-sans text-xs tracking-wider text-[var(--color-text-3)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
