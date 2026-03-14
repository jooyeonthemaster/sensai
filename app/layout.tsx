import type { Metadata } from 'next';
import { Cormorant_Garamond, Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-pretendard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SENSAI — AI 인터랙티브 미디어아트 스튜디오',
  description:
    'SENSAI는 AI를 인식의 매체로 사용하는 미디어아트 스튜디오입니다. AI가 관람자의 얼굴, 시선, 움직임을 인식하여 실시간으로 작품을 창조합니다.',
  openGraph: {
    title: 'SENSAI — AI 인터랙티브 미디어아트 스튜디오',
    description: 'AI가 인식하는 순간, 작품이 시작된다.',
    siteName: 'SENSAI',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${notoSansKR.variable}`}>
      <body>{children}</body>
    </html>
  );
}
