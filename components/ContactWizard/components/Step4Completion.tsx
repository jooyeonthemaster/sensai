'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Step4Completion() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-text-1)]"
      >
        <svg className="h-8 w-8 text-[var(--color-text-1)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <h2 className="mb-2 font-serif text-2xl text-[var(--color-text-1)]">
        문의가 접수되었습니다
      </h2>
      <p className="mb-8 font-sans text-sm text-[var(--color-text-3)]">
        빠른 시일 내에 담당자가 연락드리겠습니다.
      </p>

      <div className="flex flex-col items-center gap-4">
        <Link
          href="/"
          className="border border-[var(--color-text-1)] px-8 py-3 font-sans text-sm tracking-widest text-[var(--color-text-1)] transition-all hover:bg-[var(--color-text-1)] hover:text-[var(--color-bg)]"
        >
          HOME
        </Link>
      </div>
    </div>
  );
}
