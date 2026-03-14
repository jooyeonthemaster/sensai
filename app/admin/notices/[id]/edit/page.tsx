'use client';

import { useState, useEffect, use } from 'react';
import AdminHeader from '@/components/Admin/AdminHeader';
import NoticeForm from '@/components/Admin/NoticeForm';
import { getNoticeById } from '@/lib/data/notices';

interface Props {
  params: Promise<{ id: string }>;
}

export default function EditNoticePage({ params }: Props) {
  const { id } = use(params);
  const [notice, setNotice] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getNoticeById(id);
        setNotice(data);
      } catch (error) {
        console.error('Fetch notice error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [id]);

  if (loading) {
    return (
      <>
        <AdminHeader title="공지 수정" />
        <div className="p-6">
          <p className="font-sans text-sm text-[var(--color-text-3)]">불러오는 중...</p>
        </div>
      </>
    );
  }

  if (!notice) {
    return (
      <>
        <AdminHeader title="공지 수정" />
        <div className="p-6">
          <p className="font-sans text-sm text-red-400">공지를 찾을 수 없습니다.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminHeader title={`공지 수정 — ${notice.title}`} />
      <div className="p-6">
        <NoticeForm mode="edit" initialData={notice} noticeId={id} />
      </div>
    </>
  );
}
