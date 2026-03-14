'use client';

import { useState } from 'react';
import { createInquiry } from '@/lib/data/inquiries';

interface WorkInquiryFormProps {
  workTitle: string;
  workSlug?: string;
}

export default function WorkInquiryForm({ workTitle, workSlug }: WorkInquiryFormProps) {
  const [form, setForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = form.companyName && form.contactPerson && form.email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || submitting) return;

    setSubmitting(true);
    setError(null);
    try {
      await createInquiry({
        inquiryType: '작품 문의',
        companyName: form.companyName,
        contactPerson: form.contactPerson,
        email: form.email,
        phone: form.phone,
        message: form.message,
        workSlug: workSlug ?? '',
        workTitle,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : '제출에 실패했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="mt-16 border-t border-[var(--color-border)] pt-12">
        <h3 className="mb-4 font-serif text-2xl text-[var(--color-text-1)]">
          문의가 접수되었습니다
        </h3>
        <p className="font-sans text-sm text-[var(--color-text-3)]">
          빠른 시일 내에 담당자가 연락드리겠습니다.
        </p>
      </section>
    );
  }

  const inputClass = "border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none";

  return (
    <section className="mt-16 border-t border-[var(--color-border)] pt-12">
      <h3 className="mb-8 font-serif text-2xl text-[var(--color-text-1)]">
        Inquire About This Work
      </h3>
      <p className="mb-6 font-sans text-sm text-[var(--color-text-3)]">
        &ldquo;{workTitle}&rdquo; 도입에 관심이 있으시면 아래 양식을 작성해주세요.
      </p>
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="회사명 *"
          value={form.companyName}
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="담당자명 *"
          value={form.contactPerson}
          onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="이메일 *"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="연락처"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
        <textarea
          placeholder="문의 내용"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} sm:col-span-2`}
        />
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={!canSubmit || submitting}
            className={`border px-8 py-3 font-sans text-sm tracking-widest transition-all ${
              canSubmit && !submitting
                ? 'border-[var(--color-text-1)] text-[var(--color-text-1)] hover:bg-[var(--color-text-1)] hover:text-[var(--color-bg)]'
                : 'border-[var(--color-text-3)] text-[var(--color-text-3)] opacity-50 cursor-not-allowed'
            }`}
          >
            {submitting ? 'SENDING...' : 'SEND INQUIRY'}
          </button>
          {error && (
            <p className="mt-2 font-sans text-xs text-red-400">{error}</p>
          )}
        </div>
      </form>
    </section>
  );
}
