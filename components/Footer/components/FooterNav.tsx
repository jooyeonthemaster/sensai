import Link from 'next/link';
import { NAV_ITEMS } from '@/constants/navigation';

export default function FooterNav() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {NAV_ITEMS.map((item) => (
        <div key={item.href}>
          <Link
            href={item.href}
            className="mb-3 block font-sans text-sm font-medium tracking-wide text-[var(--color-text-1)]"
          >
            {item.labelEn}
          </Link>
          {item.children && (
            <ul className="space-y-2">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="font-sans text-xs text-[var(--color-text-3)] transition-colors hover:text-[var(--color-text-2)]"
                  >
                    {child.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
