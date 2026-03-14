'use client';

import { useState, useEffect, use } from 'react';
import AdminHeader from '@/components/Admin/AdminHeader';
import WorkForm from '@/components/Admin/WorkForm';
import { getWorkById } from '@/lib/data/works';

interface Props {
  params: Promise<{ id: string }>;
}

export default function EditWorkPage({ params }: Props) {
  const { id } = use(params);
  const [work, setWork] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getWorkById(id);
        setWork(data);
      } catch (error) {
        console.error('Fetch work error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [id]);

  if (loading) {
    return (
      <>
        <AdminHeader title="작품 수정" />
        <div className="p-6">
          <p className="font-sans text-sm text-[var(--color-text-3)]">불러오는 중...</p>
        </div>
      </>
    );
  }

  if (!work) {
    return (
      <>
        <AdminHeader title="작품 수정" />
        <div className="p-6">
          <p className="font-sans text-sm text-red-400">작품을 찾을 수 없습니다.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminHeader title={`작품 수정 — ${work.title}`} />
      <div className="p-6">
        <WorkForm mode="edit" initialData={work} workId={id} />
      </div>
    </>
  );
}
