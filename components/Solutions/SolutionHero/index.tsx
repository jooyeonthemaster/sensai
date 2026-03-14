'use client';

import { motion } from 'framer-motion';

interface SolutionHeroProps {
  title: string;
  titleEn: string;
  subtitle: string;
}

export default function SolutionHero({ title, titleEn, subtitle }: SolutionHeroProps) {
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="mb-2 font-sans text-xs tracking-widest text-[var(--color-text-3)]">
          {titleEn}
        </p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-1)]">
          {title}
        </h1>
        <p className="mt-4 max-w-[600px] font-sans text-base text-[var(--color-text-2)]">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
