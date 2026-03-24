'use client';

import { motion } from 'framer-motion';
import { HISTORY_ITEMS } from '@/constants/history';
import SectionHeading from '@/components/shared/SectionHeading';

export default function HistorySection() {
  return (
    <section className="py-32">
      <SectionHeading title="History" subtitle="센세이의 발자취" />

      <div className="relative ml-4 border-l border-[var(--color-border)] pl-8">
        {HISTORY_ITEMS.map((item, i) => (
          <motion.div
            key={`${item.year}-${item.month}-${i}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative mb-10 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2 w-2 rounded-full bg-[var(--color-text-3)]" />

            <p className="font-sans text-xs tracking-wider text-[var(--color-text-3)]">
              {item.year}{item.month ? `.${item.month}` : ''}
            </p>
            <h3 className="mt-1 font-serif text-lg text-[var(--color-text-1)]">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-1 font-sans text-sm font-light leading-relaxed text-[var(--color-text-2)]">
                {item.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
