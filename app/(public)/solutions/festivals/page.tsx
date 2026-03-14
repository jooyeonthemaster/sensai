import type { Metadata } from 'next';
import { SOLUTIONS } from '@/constants/solutions';
import SolutionHero from '@/components/Solutions/SolutionHero';
import ProcessTimeline from '@/components/Solutions/ProcessTimeline';
import InquiryButton from '@/components/shared/InquiryButton';

const solution = SOLUTIONS.find((s) => s.slug === 'festivals')!;

export const metadata: Metadata = {
  title: `${solution.title} — SENSAI Solutions`,
  description: solution.subtitle,
};

export default function FestivalsPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <SolutionHero title={solution.title} titleEn={solution.titleEn} subtitle={solution.subtitle} />

      <div className="space-y-4">
        {solution.description.map((p, i) => (
          <p key={i} className="max-w-[700px] font-sans text-base leading-relaxed text-[var(--color-text-2)]">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="mb-4 font-sans text-xs tracking-widest text-[var(--color-text-3)]">FEATURES</h3>
        <ul className="space-y-2">
          {solution.features.map((f) => (
            <li key={f} className="font-sans text-sm text-[var(--color-text-2)]">— {f}</li>
          ))}
        </ul>
      </div>

      <ProcessTimeline steps={solution.process} />

      <div className="py-16 text-center">
        <InquiryButton label="축제 도입 문의" href="/contact" />
      </div>
    </div>
  );
}
