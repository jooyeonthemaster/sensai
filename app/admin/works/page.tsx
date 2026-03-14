'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/Admin/AdminHeader';
import { getAllWorks, deleteWork, toggleFeatured } from '@/lib/data/works';

interface WorkDoc {
  id: string;
  title?: string;
  titleEn?: string;
  spaceCategory?: string;
  year?: number;
  featured?: boolean;
  isPublished?: boolean;
}

const SPACE_LABELS: Record<string, string> = {
  exhibition: '전시관',
  festival: '축제',
  commercial: '상업공간',
};

export default function AdminWorksPage() {
  const [works, setWorks] = useState<WorkDoc[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWorks = async () => {
    try {
      const data = await getAllWorks();
      setWorks(data as unknown as WorkDoc[]);
    } catch (error) {
      console.error('Works fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchWorks(); }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`"${title}" 작품을 삭제하시겠습니까?`)) return;
    try {
      await deleteWork(id);
      setWorks((prev) => prev.filter((w) => w.id !== id));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleToggleFeatured = async (id: string, current: boolean) => {
    try {
      await toggleFeatured(id, !current);
      setWorks((prev) =>
        prev.map((w) => (w.id === id ? { ...w, featured: !current } : w))
      );
    } catch (error) {
      console.error('Toggle featured error:', error);
    }
  };

  return (
    <>
      <AdminHeader title="작품 관리" />
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <p className="font-sans text-sm text-[var(--color-text-3)]">
            총 {works.length}개
          </p>
          <Link
            href="/admin/works/new"
            className="bg-[var(--color-text-1)] px-4 py-2 font-sans text-sm text-[var(--color-bg)] transition-opacity hover:opacity-90"
          >
            + 새 작품 등록
          </Link>
        </div>

        {loading ? (
          <p className="font-sans text-sm text-[var(--color-text-3)]">불러오는 중...</p>
        ) : works.length === 0 ? (
          <div className="border border-[var(--color-border)] p-12 text-center">
            <p className="font-sans text-sm text-[var(--color-text-3)]">
              등록된 작품이 없습니다.
            </p>
            <Link
              href="/admin/works/new"
              className="mt-4 inline-block font-sans text-sm text-[var(--color-text-2)] hover:text-[var(--color-text-1)]"
            >
              첫 작품을 등록해보세요 →
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">제목</th>
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">카테고리</th>
                  <th className="px-4 py-3 text-left font-sans text-xs font-medium text-[var(--color-text-3)]">연도</th>
                  <th className="px-4 py-3 text-center font-sans text-xs font-medium text-[var(--color-text-3)]">메인 노출</th>
                  <th className="px-4 py-3 text-right font-sans text-xs font-medium text-[var(--color-text-3)]">관리</th>
                </tr>
              </thead>
              <tbody>
                {works.map((work) => (
                  <tr key={work.id} className="border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)]">
                    <td className="px-4 py-3">
                      <p className="font-sans text-sm text-[var(--color-text-1)]">{work.title}</p>
                      <p className="font-sans text-xs text-[var(--color-text-3)]">{work.titleEn}</p>
                    </td>
                    <td className="px-4 py-3 font-sans text-sm text-[var(--color-text-2)]">
                      {SPACE_LABELS[work.spaceCategory || ''] || work.spaceCategory}
                    </td>
                    <td className="px-4 py-3 font-sans text-sm text-[var(--color-text-2)]">
                      {work.year}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleToggleFeatured(work.id, !!work.featured)}
                        className={`inline-block h-5 w-9 rounded-full transition-colors ${
                          work.featured ? 'bg-green-500' : 'bg-[var(--color-border)]'
                        }`}
                      >
                        <span
                          className={`block h-4 w-4 rounded-full bg-white transition-transform ${
                            work.featured ? 'translate-x-4' : 'translate-x-0.5'
                          }`}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/works/${work.id}/edit`}
                        className="mr-3 font-sans text-xs text-[var(--color-text-3)] hover:text-[var(--color-text-1)]"
                      >
                        수정
                      </Link>
                      <button
                        onClick={() => handleDelete(work.id, work.title || '')}
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
