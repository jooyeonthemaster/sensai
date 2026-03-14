'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/constants/site';
import InquiryButton from '@/components/shared/InquiryButton';

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-serif text-[clamp(3rem,8vw,6rem)] leading-none text-[var(--color-text-1)]"
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-3 font-sans text-sm text-[var(--color-text-3)]"
        >
          {SITE.nameKr}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 font-sans text-base font-light text-[var(--color-text-2)]"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10"
        >
          <InquiryButton label="EXPLORE WORKS" href="/works" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-[10px] tracking-widest text-[var(--color-text-3)]">
            SCROLL
          </span>
          <div className="h-8 w-px animate-[pulse-subtle_2s_ease-in-out_infinite] bg-[var(--color-text-3)]" />
        </div>
      </motion.div>
    </section>
  );
}
