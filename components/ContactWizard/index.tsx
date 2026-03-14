'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useWizardState } from './hooks/useWizardState';
import StepIndicator from './components/StepIndicator';
import Step1InquiryType from './components/Step1InquiryType';
import Step2ProjectScale from './components/Step2ProjectScale';
import Step3CompanyInfo from './components/Step3CompanyInfo';
import Step4Completion from './components/Step4Completion';
import type { ContactFormData } from '@/types';

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -200 : 200, opacity: 0 }),
};

export default function ContactWizard() {
  const { state, dispatch, canGoNext, submitForm } = useWizardState();

  const handleFieldUpdate = (field: keyof ContactFormData, value: string) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <Step1InquiryType
            selected={state.data.inquiryType}
            onSelect={(type) => dispatch({ type: 'SET_INQUIRY_TYPE', value: type })}
          />
        );
      case 2:
        return <Step2ProjectScale data={state.data} onUpdate={handleFieldUpdate} />;
      case 3:
        return <Step3CompanyInfo data={state.data} onUpdate={handleFieldUpdate} />;
      case 4:
        return <Step4Completion />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-[600px]">
      <StepIndicator currentStep={state.step} totalSteps={4} />

      <div className="mt-12 min-h-[400px]">
        <AnimatePresence mode="wait" custom={state.direction}>
          <motion.div
            key={state.step}
            custom={state.direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      {state.step < 4 && (
        <div className="mt-8 flex items-center justify-between">
          {state.step > 1 ? (
            <button
              onClick={() => dispatch({ type: 'PREV_STEP' })}
              className="font-sans text-sm text-[var(--color-text-3)] transition-colors hover:text-[var(--color-text-1)]"
            >
              ← 이전
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={() => {
              if (state.step === 3) {
                submitForm();
              } else {
                dispatch({ type: 'NEXT_STEP' });
              }
            }}
            disabled={!canGoNext || state.submitting}
            className={`
              border px-6 py-2 font-sans text-sm tracking-wider transition-all
              ${
                canGoNext && !state.submitting
                  ? 'border-[var(--color-text-1)] text-[var(--color-text-1)] hover:bg-[var(--color-text-1)] hover:text-[var(--color-bg)]'
                  : 'cursor-not-allowed border-[var(--color-border)] text-[var(--color-text-3)] opacity-50'
              }
            `}
          >
            {state.submitting ? '제출 중...' : state.step === 3 ? '제출' : '다음 →'}
          </button>
          {state.submitError && (
            <p className="mt-2 text-right font-sans text-xs text-red-400">{state.submitError}</p>
          )}
        </div>
      )}
    </div>
  );
}
