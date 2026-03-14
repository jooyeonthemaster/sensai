'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/firebase/useAuth';
import AdminSidebar from '@/components/Admin/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    if (!loading && !user && !isLoginPage) {
      router.push('/admin/login');
    }
  }, [user, loading, isLoginPage, router]);

  // 로그인 페이지는 사이드바 없이 렌더링
  if (isLoginPage) {
    return <>{children}</>;
  }

  // 로딩 중
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)]">
        <p className="font-sans text-sm text-[var(--color-text-3)]">로딩 중...</p>
      </div>
    );
  }

  // 미인증 상태
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <AdminSidebar />
      <div className="ml-56">
        {children}
      </div>
    </div>
  );
}
