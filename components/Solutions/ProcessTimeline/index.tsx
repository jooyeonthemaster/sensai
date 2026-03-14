'use client';

import { motion } from 'framer-motion';
import type { ProcessStep } from '@/types';

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <section className="py-16">
      <h3 className="mb-10 font-serif text-2xl text-[var(--color-text-1)]">Process</h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative"
          >
            <div className="mb-3 font-sans text-3xl font-light text-[var(--color-text-3)]">
              {String(step.step).padStart(2, '0')}
            </div>
            <h4 className="mb-2 font-sans text-sm font-medium text-[var(--color-text-1)]">
              {step.title}
            </h4>
            <p className="font-sans text-sm leading-relaxed text-[var(--color-text-3)]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
