'use client';

import { useState, useEffect } from 'react';
import AdminHeader from '@/components/Admin/AdminHeader';
import StatCard from '@/components/Admin/Dashboard/components/StatCard';
import RecentInquiries from '@/components/Admin/Dashboard/components/RecentInquiries';
import { getAllWorks } from '@/lib/data/works';
import { getAllInquiries } from '@/lib/data/inquiries';
import { getAllNotices } from '@/lib/data/notices';
import Link from 'next/link';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalWorks: 0,
    totalInquiries: 0,
    newInquiries: 0,
    totalNotices: 0,
  });
  const [recentInquiries, setRecentInquiries] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [works, inquiries, notices] = await Promise.all([
          getAllWorks(),
          getAllInquiries(),
          getAllNotices(),
        ]);

        const newCount = inquiries.filter(
          (inq: Record<string, unknown>) => inq.status === 'new'
        ).length;

        setStats({
          totalWorks: works.length,
          totalInquiries: inquiries.length,
          newInquiries: newCount,
          totalNotices: notices.length,
        });
        setRecentInquiries(inquiries.slice(0, 5));
      } catch (error) {
        console.error('Dashboard data fetch error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader title="대시보드" />
      <div className="p-6">
        {loading ? (
          <p className="font-sans text-sm text-[var(--color-text-3)]">불러오는 중...</p>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard label="총 작품" value={stats.totalWorks} />
              <StatCard label="총 문의" value={stats.totalInquiries} />
              <StatCard label="신규 문의" value={stats.newInquiries} sub="미확인" />
              <StatCard label="공지사항" value={stats.totalNotices} />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <RecentInquiries inquiries={recentInquiries as Record<string, unknown>[] & { id: string }[]} />

              <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h3 className="mb-4 font-sans text-sm font-medium text-[var(--color-text-1)]">
                  바로가기
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/admin/works/new"
                    className="block py-2 font-sans text-sm text-[var(--color-text-2)] hover:text-[var(--color-text-1)]"
                  >
                    + 새 작품 등록
                  </Link>
                  <Link
                    href="/admin/notices/new"
                    className="block py-2 font-sans text-sm text-[var(--color-text-2)] hover:text-[var(--color-text-1)]"
                  >
                    + 새 공지 작성
                  </Link>
                  <Link
                    href="/admin/inquiries"
                    className="block py-2 font-sans text-sm text-[var(--color-text-2)] hover:text-[var(--color-text-1)]"
                  >
                    → 문의 확인하기
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
