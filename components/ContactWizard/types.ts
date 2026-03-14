import type { ContactFormData } from '@/types';

export interface WizardState {
  step: 1 | 2 | 3 | 4;
  data: ContactFormData;
  direction: 1 | -1;
  submitting: boolean;
  submitError: string | null;
}

export type WizardAction =
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'SET_FIELD'; field: keyof ContactFormData; value: string }
  | { type: 'SET_INQUIRY_TYPE'; value: ContactFormData['inquiryType'] }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR'; error: string };
