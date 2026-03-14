'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/Admin/AdminHeader';
import { getAllNotices, deleteNotice } from '@/lib/data/notices';

interface NoticeDoc {
  id: string;
  title?: string;
  date?: string;
  isPublished?: boolean;
  source?: string;
}

export default function AdminNoticesPage() {
  const [notices, setNotices] = useState<NoticeDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getAllNotices();
        setNotices(data as unknown as NoticeDoc[]);
      } catch (error) {
        console.error('Notices fetch error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`"${title}" 공지를 삭제하시겠습니까?`)) return;
    try {
      await deleteNotice(id);
      setNotices((prev) => prev.filter((n) => n.id !== id));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <>
      <AdminHeader title="공지 관리" />
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <p className="font-sans text-sm text-[var(--color-text-3)]">총 {notices.length}개</p>
          <Link
            href="/admin/notices/new"
            className="bg-[var(--color-text-1)] px-4 py-2 font-sans text-sm text-[var(--color-bg)] transition-opacity hover:opacity-90"
          >
            + 새 공지 작성
          </Link>
        </div>

        {loading ? (
          <p className="font-sans text-sm text-[var(--color-text-3)]">불러오는 중...</p>
        ) : notices.length === 0 ? (
          <div className="border border-[var(--color-border)] p-12 text-center">
            <p className="font-sans text-sm text-[var(--color-text-3)]">공지사항이 없습니다.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">제목</th>
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">날짜</th>
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">출처</th>
                  <th className="px-4 py-3 text-center font-sans text-xs font-medium text-[var(--color-text-3)]">발행</th>
                  <th className="px-4 py-3 text-right font-sans text-xs font-medium text-[var(--color-text-3)]">관리</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice.id} className="border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)]">
                    <td className="px-4 py-3 font-sans text-sm text-[var(--color-text-1)]">{notice.title}</td>
                    <td className="px-4 py-3 font-sans text-sm text-[var(--color-text-2)]">{notice.date}</td>
                    <td className="px-4 py-3 font-sans text-sm text-[var(--color-text-3)]">{notice.source || '-'}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-block h-2 w-2 rounded-full ${notice.isPublished ? 'bg-green-500' : 'bg-[var(--color-border)]'}`} />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/notices/${notice.id}/edit`}
                        className="mr-3 font-sans text-xs text-[var(--color-text-3)] hover:text-[var(--color-text-1)]"
                      >
                        수정
                      </Link>
                      <button
                        onClick={() => handleDelete(notice.id, notice.title || '')}
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
