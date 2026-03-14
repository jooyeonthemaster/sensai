'use client';

import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/firebase/auth';

interface AdminHeaderProps {
  title: string;
}

export default function AdminHeader({ title }: AdminHeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/admin/login');
  };

  return (
    <header className="flex h-14 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6">
      <h1 className="font-sans text-base font-medium text-[var(--color-text-1)]">
        {title}
      </h1>
      <button
        onClick={handleLogout}
        className="font-sans text-xs text-[var(--color-text-3)] transition-colors hover:text-[var(--color-text-2)]"
      >
        로그아웃
      </button>
    </header>
  );
}
