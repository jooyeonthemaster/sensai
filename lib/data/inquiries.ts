import {
  inquiriesRef,
  getDocuments,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
  orderBy,
} from '@/lib/firebase/firestore';

export async function getAllInquiries() {
  return getDocuments(inquiriesRef, orderBy('createdAt', 'desc'));
}

export async function getInquiryById(id: string) {
  return getDocumentById(inquiriesRef, id);
}

export async function createInquiry(data: Record<string, unknown>) {
  return createDocument(inquiriesRef, {
    ...data,
    status: 'new',
    isRead: false,
    adminNotes: '',
  });
}

export async function updateInquiry(id: string, data: Record<string, unknown>) {
  return updateDocument(inquiriesRef, id, data);
}

export async function deleteInquiry(id: string) {
  return deleteDocument(inquiriesRef, id);
}
