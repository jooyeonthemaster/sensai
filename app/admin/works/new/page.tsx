'use client';

import AdminHeader from '@/components/Admin/AdminHeader';
import WorkForm from '@/components/Admin/WorkForm';

export default function NewWorkPage() {
  return (
    <>
      <AdminHeader title="새 작품 등록" />
      <div className="p-6">
        <WorkForm mode="create" />
      </div>
    </>
  );
}
