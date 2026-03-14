interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center gap-3">
          <div
            className={`
              flex h-8 w-8 items-center justify-center rounded-full border font-sans text-xs transition-all
              ${
                step < currentStep
                  ? 'border-[var(--color-text-1)] bg-[var(--color-text-1)] text-[var(--color-bg)]'
                  : step === currentStep
                    ? 'border-[var(--color-text-1)] text-[var(--color-text-1)]'
                    : 'border-[var(--color-border)] text-[var(--color-text-3)]'
              }
            `}
          >
            {step < currentStep ? '✓' : step}
          </div>
          {step < totalSteps && (
            <div
              className={`h-px w-8 transition-colors ${
                step < currentStep ? 'bg-[var(--color-text-1)]' : 'bg-[var(--color-border)]'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
