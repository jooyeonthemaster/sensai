'use client';

import AdminHeader from '@/components/Admin/AdminHeader';
import NoticeForm from '@/components/Admin/NoticeForm';

export default function NewNoticePage() {
  return (
    <>
      <AdminHeader title="새 공지 작성" />
      <div className="p-6">
        <NoticeForm mode="create" />
      </div>
    </>
  );
}
