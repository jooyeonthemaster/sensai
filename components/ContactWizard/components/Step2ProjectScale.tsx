'use client';

import { BUDGET_RANGES } from '@/constants/contact';
import type { ContactFormData } from '@/types';

interface Step2Props {
  data: ContactFormData;
  onUpdate: (field: keyof ContactFormData, value: string) => void;
}

export default function Step2ProjectScale({ data, onUpdate }: Step2Props) {
  return (
    <div>
      <h2 className="mb-2 font-serif text-2xl text-[var(--color-text-1)]">
        프로젝트 규모를 알려주세요
      </h2>
      <p className="mb-8 font-sans text-sm text-[var(--color-text-3)]">
        대략적인 정보만으로도 충분합니다. 상세 내용은 상담 시 조율합니다.
      </p>
      <div className="space-y-6">
        <div>
          <label className="mb-2 block font-sans text-xs tracking-wider text-[var(--color-text-3)]">
            예산 범위
          </label>
          <select
            value={data.budgetRange}
            onChange={(e) => onUpdate('budgetRange', e.target.value)}
            className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] focus:border-[var(--color-text-2)] focus:outline-none"
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-sans text-xs tracking-wider text-[var(--color-text-3)]">
            희망 설치 시기
          </label>
          <input
            type="date"
            value={data.deadline}
            onChange={(e) => onUpdate('deadline', e.target.value)}
            className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] focus:border-[var(--color-text-2)] focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-sans text-xs tracking-wider text-[var(--color-text-3)]">
            예상 공간 크기 (선택)
          </label>
          <input
            type="text"
            value={data.spaceSize}
            onChange={(e) => onUpdate('spaceSize', e.target.value)}
            placeholder="예: 50m²"
            className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
