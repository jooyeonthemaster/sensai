import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침 — SENSAI',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-24">
      <h1 className="mb-8 font-serif text-3xl text-[var(--color-text-1)]">
        개인정보처리방침
      </h1>
      <div className="space-y-6 font-sans text-sm leading-relaxed text-[var(--color-text-2)]">
        <p>
          일해라컴퍼니(이하 &ldquo;회사&rdquo;)는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고
          개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
        </p>
        <h2 className="font-sans text-base font-medium text-[var(--color-text-1)]">
          1. 수집하는 개인정보 항목
        </h2>
        <p>
          회사는 문의 접수를 위해 다음과 같은 개인정보를 수집합니다: 회사명, 담당자명, 이메일, 전화번호, 문의 내용.
        </p>
        <h2 className="font-sans text-base font-medium text-[var(--color-text-1)]">
          2. 개인정보의 수집 및 이용 목적
        </h2>
        <p>
          수집된 개인정보는 문의 응대 및 프로젝트 상담 목적으로만 사용됩니다.
        </p>
        <h2 className="font-sans text-base font-medium text-[var(--color-text-1)]">
          3. 개인정보의 보유 및 이용 기간
        </h2>
        <p>
          개인정보는 수집 및 이용 목적이 달성된 후에는 지체 없이 파기합니다.
        </p>
        <h2 className="font-sans text-base font-medium text-[var(--color-text-1)]">
          4. 문의처
        </h2>
        <p>
          개인정보 관련 문의: jooyeon74397430@gmail.com
        </p>
      </div>
    </div>
  );
}
