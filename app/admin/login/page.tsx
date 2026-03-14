'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from '@/lib/firebase/auth';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      router.push('/admin/dashboard');
    } catch {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)]">
      <div className="w-full max-w-[400px] px-6">
        <h1 className="mb-2 text-center font-serif text-3xl text-[var(--color-text-1)]">
          SENSAI
        </h1>
        <p className="mb-8 text-center font-sans text-sm text-[var(--color-text-3)]">
          관리자 로그인
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-sans text-xs text-[var(--color-text-3)]">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block font-sans text-xs text-[var(--color-text-3)]">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="font-sans text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--color-text-1)] py-3 font-sans text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>
      </div>
    </div>
  );
}
