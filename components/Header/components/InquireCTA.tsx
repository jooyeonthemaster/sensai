'use client';

import Link from 'next/link';

interface InquireCTAProps {
  compact?: boolean;
}

export default function InquireCTA({ compact = false }: InquireCTAProps) {
  return (
    <Link
      href="/contact"
      className={`
        border border-[var(--color-text-1)] text-[var(--color-text-1)]
        font-sans text-sm tracking-wider
        transition-all duration-300
        hover:bg-[var(--color-text-1)] hover:text-[var(--color-bg)]
        ${compact ? 'px-3 py-1.5 text-xs' : 'px-5 py-2'}
      `}
    >
      INQUIRE NOW
    </Link>
  );
}
