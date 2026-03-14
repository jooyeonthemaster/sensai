'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/Admin/AdminHeader';
import { getAllInquiries, deleteInquiry } from '@/lib/data/inquiries';

interface InquiryDoc {
  id: string;
  companyName?: string;
  contactPerson?: string;
  inquiryType?: string;
  email?: string;
  status?: string;
  createdAt?: { seconds: number };
}

const STATUS_LABELS: Record<string, string> = {
  new: '신규',
  in_progress: '진행중',
  completed: '완료',
  archived: '보관',
};

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-500/20 text-blue-400',
  in_progress: 'bg-yellow-500/20 text-yellow-400',
  completed: 'bg-green-500/20 text-green-400',
  archived: 'bg-gray-500/20 text-gray-400',
};

const TYPE_LABELS: Record<string, string> = {
  festival: '축제·이벤트',
  permanent: '상설 전시',
  custom: '커스텀 제작',
  other: '기타',
};

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<InquiryDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getAllInquiries();
        setInquiries(data as unknown as InquiryDoc[]);
      } catch (error) {
        console.error('Inquiries fetch error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  const filtered = filter === 'all'
    ? inquiries
    : inquiries.filter((inq) => inq.status === filter);

  const handleDelete = async (id: string) => {
    if (!confirm('이 문의를 삭제하시겠습니까?')) return;
    try {
      await deleteInquiry(id);
      setInquiries((prev) => prev.filter((inq) => inq.id !== id));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const formatDate = (ts?: { seconds: number }) => {
    if (!ts) return '-';
    return new Date(ts.seconds * 1000).toLocaleDateString('ko-KR');
  };

  return (
    <>
      <AdminHeader title="문의 관리" />
      <div className="p-6">
        {/* 필터 */}
        <div className="mb-6 flex gap-2">
          {['all', 'new', 'in_progress', 'completed', 'archived'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 font-sans text-xs transition-colors ${
                filter === s
                  ? 'bg-[var(--color-surface)] text-[var(--color-text-1)] border border-[var(--color-text-1)]'
                  : 'border border-[var(--color-border)] text-[var(--color-text-3)] hover:text-[var(--color-text-2)]'
              }`}
            >
              {s === 'all' ? '전체' : STATUS_LABELS[s]} ({s === 'all' ? inquiries.length : inquiries.filter((i) => i.status === s).length})
            </button>
          ))}
        </div>

        {loading ? (
          <p className="font-sans text-sm text-[var(--color-text-3)]">불러오는 중...</p>
        ) : filtered.length === 0 ? (
          <div className="border border-[var(--color-border)] p-12 text-center">
            <p className="font-sans text-sm text-[var(--color-text-3)]">문의가 없습니다.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">회사명</th>
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">담당자</th>
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">유형</th>
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">상태</th>
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">날짜</th>
                  <th className="px-4 py-3 text-right font-sans text-xs font-medium text-[var(--color-text-3)]">관리</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((inq) => (
                  <tr key={inq.id} className="border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)]">
                    <td className="px-4 py-3 font-sans text-sm text-[var(--color-text-1)]">
                      {inq.companyName || '-'}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-sans text-sm text-[var(--color-text-2)]">{inq.contactPerson || '-'}</p>
                      <p className="font-sans text-xs text-[var(--color-text-3)]">{inq.email}</p>
                    </td>
                    <td className="px-4 py-3 font-sans text-sm text-[var(--color-text-2)]">
                      {TYPE_LABELS[inq.inquiryType || ''] || inq.inquiryType}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block rounded px-2 py-0.5 font-sans text-xs ${STATUS_COLORS[inq.status || 'new']}`}>
                        {STATUS_LABELS[inq.status || 'new']}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-sans text-sm text-[var(--color-text-3)]">
                      {formatDate(inq.createdAt)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/inquiries/${inq.id}`}
                        className="mr-3 font-sans text-xs text-[var(--color-text-3)] hover:text-[var(--color-text-1)]"
                      >
                        상세
                      </Link>
                      <button
                        onClick={() => handleDelete(inq.id)}
                        className="font-sans text-xs text-red-400 hover:text-red-300"
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
