interface StatCardProps {
  label: string;
  value: number;
  sub?: string;
}

export default function StatCard({ label, value, sub }: StatCardProps) {
  return (
    <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <p className="font-sans text-xs tracking-wide text-[var(--color-text-3)]">{label}</p>
      <p className="mt-2 font-serif text-3xl text-[var(--color-text-1)]">{value}</p>
      {sub && (
        <p className="mt-1 font-sans text-xs text-[var(--color-text-3)]">{sub}</p>
      )}
    </div>
  );
}
