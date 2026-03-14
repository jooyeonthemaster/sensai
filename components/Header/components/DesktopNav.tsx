'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants/navigation';
import DesktopDropdown from './DesktopDropdown';

export default function DesktopNav() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAV_ITEMS.map((item) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => item.children && setOpenDropdown(item.href)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href={item.href}
            className={`
              flex items-center gap-1 font-sans text-sm tracking-wide transition-colors duration-300
              ${isActive(item.href) ? 'text-[var(--color-text-1)]' : 'text-[var(--color-text-3)] hover:text-[var(--color-text-2)]'}
            `}
          >
            {item.labelEn}
            {item.children && (
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.href ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>
          {item.children && (
            <DesktopDropdown
              items={item.children}
              isOpen={openDropdown === item.href}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
