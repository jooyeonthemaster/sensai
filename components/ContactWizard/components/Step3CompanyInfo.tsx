'use client';

import type { ContactFormData } from '@/types';

interface Step3Props {
  data: ContactFormData;
  onUpdate: (field: keyof ContactFormData, value: string) => void;
}

export default function Step3CompanyInfo({ data, onUpdate }: Step3Props) {
  return (
    <div>
      <h2 className="mb-2 font-serif text-2xl text-[var(--color-text-1)]">
        연락처를 입력해주세요
      </h2>
      <p className="mb-8 font-sans text-sm text-[var(--color-text-3)]">
        담당자에게 직접 연락드리겠습니다.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          value={data.companyName}
          onChange={(e) => onUpdate('companyName', e.target.value)}
          placeholder="회사명 *"
          className="border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none"
        />
        <input
          type="text"
          value={data.contactPerson}
          onChange={(e) => onUpdate('contactPerson', e.target.value)}
          placeholder="담당자명 *"
          className="border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none"
        />
        <input
          type="email"
          value={data.email}
          onChange={(e) => onUpdate('email', e.target.value)}
          placeholder="이메일 *"
          className="border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none"
        />
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => onUpdate('phone', e.target.value)}
          placeholder="전화번호"
          className="border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none"
        />
        <textarea
          value={data.message}
          onChange={(e) => onUpdate('message', e.target.value)}
          placeholder="추가 문의 사항 (선택)"
          rows={4}
          className="border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none sm:col-span-2"
        />
      </div>
    </div>
  );
}
