import type { WorkSpecs as WorkSpecsType } from '@/types';

interface WorkSpecsProps {
  specs: WorkSpecsType;
}

export default function WorkSpecs({ specs }: WorkSpecsProps) {
  const rows = [
    { label: '최소 면적', value: specs.minArea },
    { label: '권장 면적', value: specs.idealArea },
    { label: '천장 높이', value: specs.ceilingHeight },
    { label: '필요 장비', value: specs.equipment.join(', ') },
    { label: '설치 기간', value: specs.setupTime },
    { label: '전원', value: specs.power },
    { label: '암실 필요', value: specs.darkRoom ? '필요' : '불필요' },
  ];

  return (
    <section className="mt-16 border-t border-[var(--color-border)] pt-12">
      <h3 className="mb-8 font-serif text-2xl text-[var(--color-text-1)]">
        Installation Specifications
      </h3>
      <div className="grid gap-0 border border-[var(--color-border)]">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[140px_1fr] border-b border-[var(--color-border)] last:border-b-0 sm:grid-cols-[200px_1fr]"
          >
            <div className="bg-[var(--color-surface)] px-4 py-3 font-sans text-xs tracking-wide text-[var(--color-text-3)]">
              {row.label}
            </div>
            <div className="px-4 py-3 font-sans text-sm text-[var(--color-text-2)]">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
