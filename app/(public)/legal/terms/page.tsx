import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용약관 — SENSAI',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-24">
      <h1 className="mb-8 font-serif text-3xl text-[var(--color-text-1)]">
        이용약관
      </h1>
      <div className="space-y-6 font-sans text-sm leading-relaxed text-[var(--color-text-2)]">
        <h2 className="font-sans text-base font-medium text-[var(--color-text-1)]">
          제1조 (목적)
        </h2>
        <p>
          이 약관은 일해라컴퍼니(이하 &ldquo;회사&rdquo;)가 운영하는 SENSAI 웹사이트(이하 &ldquo;사이트&rdquo;)의
          이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.
        </p>
        <h2 className="font-sans text-base font-medium text-[var(--color-text-1)]">
          제2조 (서비스의 내용)
        </h2>
        <p>
          회사는 사이트를 통해 AI 인터랙티브 미디어아트 포트폴리오 열람, 솔루션 안내, 문의 접수 서비스를 제공합니다.
        </p>
        <h2 className="font-sans text-base font-medium text-[var(--color-text-1)]">
          제3조 (면책)
        </h2>
        <p>
          사이트에 게시된 이미지 및 콘텐츠의 저작권은 회사에 있으며, 무단 복제 및 배포를 금합니다.
        </p>
        <h2 className="font-sans text-base font-medium text-[var(--color-text-1)]">
          제4조 (문의)
        </h2>
        <p>
          이용약관 관련 문의: jooyeon74397430@gmail.com
        </p>
      </div>
    </div>
  );
}
