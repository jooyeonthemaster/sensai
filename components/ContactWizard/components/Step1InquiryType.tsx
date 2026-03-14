'use client';

import { INQUIRY_OPTIONS } from '@/constants/contact';
import type { InquiryType } from '@/types';

interface Step1Props {
  selected: InquiryType | null;
  onSelect: (type: InquiryType) => void;
}

export default function Step1InquiryType({ selected, onSelect }: Step1Props) {
  return (
    <div>
      <h2 className="mb-2 font-serif text-2xl text-[var(--color-text-1)]">
        문의 유형을 선택해주세요
      </h2>
      <p className="mb-8 font-sans text-sm text-[var(--color-text-3)]">
        프로젝트의 성격에 맞는 유형을 선택하시면 더 빠른 상담이 가능합니다.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {INQUIRY_OPTIONS.map((option) => (
          <button
            key={option.type}
            onClick={() => onSelect(option.type)}
            className={`
              border p-6 text-left transition-all duration-200
              ${
                selected === option.type
                  ? 'border-[var(--color-text-1)] bg-[var(--color-surface)]'
                  : 'border-[var(--color-border)] hover:border-[var(--color-text-3)]'
              }
            `}
          >
            <h3 className="font-sans text-base font-medium text-[var(--color-text-1)]">
              {option.title}
            </h3>
            <p className="mt-1 font-sans text-xs text-[var(--color-text-3)]">
              {option.titleEn}
            </p>
            <p className="mt-3 font-sans text-sm text-[var(--color-text-2)]">
              {option.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
