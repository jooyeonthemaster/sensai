'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createNotice, updateNotice } from '@/lib/data/notices';

interface NoticeFormProps {
  mode: 'create' | 'edit';
  initialData?: Record<string, unknown>;
  noticeId?: string;
}

export default function NoticeForm({ mode, initialData, noticeId }: NoticeFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: (initialData?.title as string) || '',
    date: (initialData?.date as string) || '',
    content: (initialData?.content as string) || '',
    url: (initialData?.url as string) || '',
    source: (initialData?.source as string) || '',
    isPublished: initialData?.isPublished !== undefined ? (initialData.isPublished as boolean) : true,
    sortOrder: (initialData?.sortOrder as number) || 0,
  });

  const updateField = (field: string, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (mode === 'create') {
        await createNotice(form);
      } else if (noticeId) {
        await updateNotice(noticeId, form);
      }
      router.push('/admin/notices');
    } catch (error) {
      console.error('Save error:', error);
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setSaving(false);
    }
  };

  const inputClass = 'w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none';
  const labelClass = 'mb-1 block font-sans text-xs text-[var(--color-text-3)]';

  return (
    <form onSubmit={handleSubmit} className="max-w-[600px] space-y-4">
      <div>
        <label className={labelClass}>제목</label>
        <input type="text" value={form.title} onChange={(e) => updateField('title', e.target.value)} className={inputClass} placeholder="공지 제목" required />
      </div>
      <div>
        <label className={labelClass}>날짜</label>
        <input type="text" value={form.date} onChange={(e) => updateField('date', e.target.value)} className={inputClass} placeholder="2026" required />
      </div>
      <div>
        <label className={labelClass}>내용</label>
        <textarea value={form.content} onChange={(e) => updateField('content', e.target.value)} className={`${inputClass} min-h-[120px] resize-y`} placeholder="공지 내용 (선택)" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>링크 URL</label>
          <input type="url" value={form.url} onChange={(e) => updateField('url', e.target.value)} className={inputClass} placeholder="https://..." />
        </div>
        <div>
          <label className={labelClass}>출처</label>
          <input type="text" value={form.source} onChange={(e) => updateField('source', e.target.value)} className={inputClass} placeholder="한국콘텐츠진흥원" />
        </div>
      </div>
      <div className="flex gap-6">
        <label className="flex items-center gap-2 font-sans text-sm text-[var(--color-text-2)]">
          <input type="checkbox" checked={form.isPublished} onChange={(e) => updateField('isPublished', e.target.checked)} className="accent-[var(--color-text-1)]" />
          발행
        </label>
        <div className="flex items-center gap-2">
          <label className="font-sans text-sm text-[var(--color-text-2)]">정렬</label>
          <input type="number" value={form.sortOrder} onChange={(e) => updateField('sortOrder', Number(e.target.value))} className="w-20 border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 font-sans text-sm text-[var(--color-text-1)] focus:outline-none" />
        </div>
      </div>

      <div className="flex gap-3 border-t border-[var(--color-border)] pt-6">
        <button type="submit" disabled={saving} className="bg-[var(--color-text-1)] px-6 py-2.5 font-sans text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90 disabled:opacity-50">
          {saving ? '저장 중...' : mode === 'create' ? '공지 등록' : '수정 완료'}
        </button>
        <button type="button" onClick={() => router.push('/admin/notices')} className="border border-[var(--color-border)] px-6 py-2.5 font-sans text-sm text-[var(--color-text-2)] transition-colors hover:border-[var(--color-text-3)]">
          취소
        </button>
      </div>
    </form>
  );
}
