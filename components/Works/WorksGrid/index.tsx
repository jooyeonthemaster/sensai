import type { Work } from '@/types';
import WorkCard from '@/components/Works/WorkCard';

interface WorksGridProps {
  works: Work[];
}

export default function WorksGrid({ works }: WorksGridProps) {
  if (works.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-sans text-sm text-[var(--color-text-3)]">
          선택한 필터에 해당하는 작품이 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {works.map((work, i) => (
        <WorkCard key={work.slug} work={work} index={i} />
      ))}
    </div>
  );
}
