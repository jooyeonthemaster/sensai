import type { Metadata } from 'next';
import { SOLUTIONS } from '@/constants/solutions';
import SectionHeading from '@/components/shared/SectionHeading';
import SolutionCard from '@/components/Solutions/SolutionCard';

export const metadata: Metadata = {
  title: 'Solutions — SENSAI',
  description: '축제, 팝업스토어, 커스텀 프로젝트를 위한 AI 미디어아트 솔루션',
};

export default function SolutionsPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24">
      <SectionHeading
        title="Solutions"
        subtitle="공간의 성격과 목적에 맞는 최적의 AI 미디어아트 솔루션을 제안합니다"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {SOLUTIONS.map((solution) => (
          <SolutionCard key={solution.slug} solution={solution} />
        ))}
      </div>
    </div>
  );
}
