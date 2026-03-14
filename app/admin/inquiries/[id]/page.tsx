'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from '@/components/Admin/AdminHeader';
import { getInquiryById, updateInquiry } from '@/lib/data/inquiries';

interface Props {
  params: Promise<{ id: string }>;
}

const STATUS_OPTIONS = [
  { value: 'new', label: '신규' },
  { value: 'in_progress', label: '진행중' },
  { value: 'completed', label: '완료' },
  { value: 'archived', label: '보관' },
];

const TYPE_LABELS: Record<string, string> = {
  festival: '축제·이벤트',
  permanent: '상설 전시',
  custom: '커스텀 제작',
  other: '기타',
};

const BUDGET_LABELS: Record<string, string> = {
  'under-10m': '1,000만원 미만',
  '10m-30m': '1,000만원 – 3,000만원',
  '30m-50m': '3,000만원 – 5,000만원',
  '50m-100m': '5,000만원 – 1억원',
  '100m-300m': '1억원 – 3억원',
  'over-300m': '3억원 이상',
  undecided: '미정',
};

export default function InquiryDetailPage({ params }: Props) {
  const { id } = use(params);
  const router = useRouter();
  const [inquiry, setInquiry] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('new');
  const [adminNotes, setAdminNotes] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getInquiryById(id);
        if (data) {
          setInquiry(data);
          setStatus((data.status as string) || 'new');
          setAdminNotes((data.adminNotes as string) || '');

          // 읽음 처리
          if (!data.isRead) {
            await updateInquiry(id, { isRead: true });
          }
        }
      } catch (error) {
        console.error('Fetch inquiry error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [id]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateInquiry(id, { status, adminNotes });
      alert('저장되었습니다.');
    } catch (error) {
      console.error('Save error:', error);
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setSaving(false);
    }
  };

  const formatDate = (ts: unknown) => {
    if (!ts || typeof ts !== 'object' || !('seconds' in (ts as Record<string, unknown>))) return '-';
    return new Date(((ts as Record<string, number>).seconds) * 1000).toLocaleString('ko-KR');
  };

  if (loading) {
    return (
      <>
        <AdminHeader title="문의 상세" />
        <div className="p-6">
          <p className="font-sans text-sm text-[var(--color-text-3)]">불러오는 중...</p>
        </div>
      </>
    );
  }

  if (!inquiry) {
    return (
      <>
        <AdminHeader title="문의 상세" />
        <div className="p-6">
          <p className="font-sans text-sm text-red-400">문의를 찾을 수 없습니다.</p>
        </div>
      </>
    );
  }

  const infoRows = [
    { label: '회사명', value: inquiry.companyName as string },
    { label: '담당자', value: inquiry.contactPerson as string },
    { label: '이메일', value: inquiry.email as string },
    { label: '전화번호', value: inquiry.phone as string },
    { label: '문의 유형', value: TYPE_LABELS[(inquiry.inquiryType as string) || ''] || (inquiry.inquiryType as string) },
    { label: '예산 범위', value: BUDGET_LABELS[(inquiry.budgetRange as string) || ''] || (inquiry.budgetRange as string) },
    { label: '설치 기한', value: inquiry.deadline as string },
    { label: '공간 크기', value: inquiry.spaceSize as string },
    { label: '접수일', value: formatDate(inquiry.createdAt) },
  ];

  return (
    <>
      <AdminHeader title="문의 상세" />
      <div className="mx-auto max-w-[800px] p-6">
        {/* 문의 정보 */}
        <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <div className="space-y-3">
            {infoRows.map((row) => (
              row.value ? (
                <div key={row.label} className="flex">
                  <span className="w-24 shrink-0 font-sans text-xs text-[var(--color-text-3)]">{row.label}</span>
                  <span className="font-sans text-sm text-[var(--color-text-1)]">{row.value}</span>
                </div>
              ) : null
            ))}
          </div>

          {(inquiry.message as string) && (
            <div className="mt-6 border-t border-[var(--color-border)] pt-4">
              <p className="mb-2 font-sans text-xs text-[var(--color-text-3)]">메시지</p>
              <p className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-[var(--color-text-2)]">
                {inquiry.message as string}
              </p>
            </div>
          )}
        </div>

        {/* 관리 영역 */}
        <div className="mt-6 border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <h3 className="mb-4 font-sans text-sm font-medium text-[var(--color-text-1)]">상태 관리</h3>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block font-sans text-xs text-[var(--color-text-3)]">상태</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 font-sans text-sm text-[var(--color-text-1)] focus:outline-none"
              >
                {STATUS_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block font-sans text-xs text-[var(--color-text-3)]">관리자 메모</label>
              <textarea
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                className="min-h-[100px] w-full resize-y border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:outline-none"
                placeholder="내부 참고용 메모"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-[var(--color-text-1)] px-6 py-2.5 font-sans text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {saving ? '저장 중...' : '저장'}
              </button>
              <button
                onClick={() => router.push('/admin/inquiries')}
                className="border border-[var(--color-border)] px-6 py-2.5 font-sans text-sm text-[var(--color-text-2)] transition-colors hover:border-[var(--color-text-3)]"
              >
                목록으로
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
