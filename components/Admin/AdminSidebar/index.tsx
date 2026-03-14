'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/admin/dashboard', label: '대시보드', icon: '◻' },
  { href: '/admin/works', label: '작품 관리', icon: '◻' },
  { href: '/admin/inquiries', label: '문의 관리', icon: '◻' },
  { href: '/admin/notices', label: '공지 관리', icon: '◻' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-56 flex-col border-r border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="border-b border-[var(--color-border)] px-5 py-4">
        <Link href="/admin/dashboard" className="font-serif text-xl text-[var(--color-text-1)]">
          SENSAI
        </Link>
        <p className="mt-0.5 font-sans text-[10px] tracking-widest text-[var(--color-text-3)]">
          ADMIN
        </p>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 rounded px-3 py-2.5 font-sans text-sm transition-colors
                ${isActive
                  ? 'bg-[var(--color-surface)] text-[var(--color-text-1)]'
                  : 'text-[var(--color-text-3)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-2)]'
                }
              `}
            >
              <span className="text-xs">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[var(--color-border)] px-5 py-3">
        <Link
          href="/"
          className="font-sans text-xs text-[var(--color-text-3)] hover:text-[var(--color-text-2)]"
        >
          ← 사이트로 돌아가기
        </Link>
      </div>
    </aside>
  );
}
