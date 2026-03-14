'use client';

import { SPACE_CATEGORIES, TECHNOLOGIES } from '@/constants/works';
import type { SpaceCategory, Technology } from '@/types';

interface WorksFilterProps {
  activeSpace: SpaceCategory | null;
  activeTech: Technology | null;
  onFilter: (key: string, value: string | null) => void;
}

function FilterPill({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full border px-4 py-1.5 font-sans text-xs tracking-wide transition-all duration-200
        ${
          isActive
            ? 'border-[var(--color-text-1)] bg-[var(--color-text-1)] text-[var(--color-bg)]'
            : 'border-[var(--color-border)] text-[var(--color-text-3)] hover:border-[var(--color-text-3)] hover:text-[var(--color-text-2)]'
        }
      `}
    >
      {label}
    </button>
  );
}

export default function WorksFilter({ activeSpace, activeTech, onFilter }: WorksFilterProps) {
  return (
    <div className="space-y-4">
      {/* By Space */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 font-sans text-xs tracking-wider text-[var(--color-text-3)]">
          SPACE
        </span>
        <FilterPill
          label="All"
          isActive={!activeSpace}
          onClick={() => onFilter('space', null)}
        />
        {SPACE_CATEGORIES.map((cat) => (
          <FilterPill
            key={cat.value}
            label={cat.labelEn}
            isActive={activeSpace === cat.value}
            onClick={() => onFilter('space', activeSpace === cat.value ? null : cat.value)}
          />
        ))}
      </div>

      {/* By Technology */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 font-sans text-xs tracking-wider text-[var(--color-text-3)]">
          TECH
        </span>
        <FilterPill
          label="All"
          isActive={!activeTech}
          onClick={() => onFilter('tech', null)}
        />
        {TECHNOLOGIES.map((tech) => (
          <FilterPill
            key={tech.value}
            label={tech.labelEn}
            isActive={activeTech === tech.value}
            onClick={() => onFilter('tech', activeTech === tech.value ? null : tech.value)}
          />
        ))}
      </div>
    </div>
  );
}
