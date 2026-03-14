import Link from 'next/link';
import type { Solution } from '@/types';

interface SolutionCardProps {
  solution: Solution;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group block border border-[var(--color-border)] p-8 transition-all duration-300 hover:border-[var(--color-text-3)]"
    >
      <p className="mb-1 font-sans text-xs tracking-widest text-[var(--color-text-3)]">
        {solution.titleEn}
      </p>
      <h3 className="font-serif text-2xl text-[var(--color-text-1)]">
        {solution.title}
      </h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-[var(--color-text-2)]">
        {solution.subtitle}
      </p>
      <span className="mt-6 inline-block font-sans text-xs tracking-wider text-[var(--color-text-3)] transition-colors group-hover:text-[var(--color-text-1)]">
        LEARN MORE →
      </span>
    </Link>
  );
}
