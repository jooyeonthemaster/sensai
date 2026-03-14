import Link from 'next/link';
import { COMPANY_INFO } from '@/constants/site';

export default function FooterInfo() {
  return (
    <div className="space-y-3 font-sans text-xs text-[var(--color-text-3)]">
      <p>
        {COMPANY_INFO.legalName} | 대표: {COMPANY_INFO.ceo} | 사업자등록번호: {COMPANY_INFO.registrationNumber}
      </p>
      <p>
        TEL: {COMPANY_INFO.phone} | EMAIL: {COMPANY_INFO.email}
      </p>
      <div className="flex gap-4 pt-1">
        <Link
          href="/legal/privacy"
          className="transition-colors hover:text-[var(--color-text-2)]"
        >
          개인정보처리방침
        </Link>
        <Link
          href="/legal/terms"
          className="transition-colors hover:text-[var(--color-text-2)]"
        >
          이용약관
        </Link>
      </div>
    </div>
  );
}
