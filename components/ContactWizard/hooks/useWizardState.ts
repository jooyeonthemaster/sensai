'use client';

import { useReducer, useCallback } from 'react';
import { createInquiry } from '@/lib/data/inquiries';
import type { WizardState, WizardAction } from '../types';

const initialState: WizardState = {
  step: 1,
  direction: 1,
  submitting: false,
  submitError: null,
  data: {
    inquiryType: null,
    budgetRange: '',
    deadline: '',
    spaceSize: '',
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: '',
  },
};

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case 'NEXT_STEP':
      if (state.step >= 4) return state;
      return { ...state, step: (state.step + 1) as WizardState['step'], direction: 1 };
    case 'PREV_STEP':
      if (state.step <= 1) return state;
      return { ...state, step: (state.step - 1) as WizardState['step'], direction: -1 };
    case 'SET_FIELD':
      return { ...state, data: { ...state.data, [action.field]: action.value } };
    case 'SET_INQUIRY_TYPE':
      return { ...state, data: { ...state.data, inquiryType: action.value } };
    case 'SUBMIT_START':
      return { ...state, submitting: true, submitError: null };
    case 'SUBMIT_SUCCESS':
      return { ...state, submitting: false, step: 4, direction: 1 };
    case 'SUBMIT_ERROR':
      return { ...state, submitting: false, submitError: action.error };
    default:
      return state;
  }
}

export function useWizardState() {
  const [state, dispatch] = useReducer(wizardReducer, initialState);

  const canGoNext = () => {
    switch (state.step) {
      case 1: return state.data.inquiryType !== null;
      case 2: return true;
      case 3: return state.data.companyName && state.data.contactPerson && state.data.email;
      default: return false;
    }
  };

  const submitForm = useCallback(async () => {
    dispatch({ type: 'SUBMIT_START' });
    try {
      const { data } = state;
      await createInquiry({
        inquiryType: data.inquiryType ?? '',
        budgetRange: data.budgetRange,
        deadline: data.deadline,
        spaceSize: data.spaceSize,
        companyName: data.companyName,
        contactPerson: data.contactPerson,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      dispatch({ type: 'SUBMIT_SUCCESS' });
    } catch (error) {
      dispatch({ type: 'SUBMIT_ERROR', error: error instanceof Error ? error.message : '제출에 실패했습니다.' });
    }
  }, [state]);

  return { state, dispatch, canGoNext: canGoNext(), submitForm };
}
