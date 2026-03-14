import {
  noticesRef,
  getDocuments,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
  orderBy,
} from '@/lib/firebase/firestore';

export async function getAllNotices() {
  return getDocuments(noticesRef, orderBy('sortOrder', 'asc'));
}

export async function getNoticeById(id: string) {
  return getDocumentById(noticesRef, id);
}

export async function createNotice(data: Record<string, unknown>) {
  return createDocument(noticesRef, {
    ...data,
    isPublished: true,
    sortOrder: 0,
  });
}

export async function updateNotice(id: string, data: Record<string, unknown>) {
  return updateDocument(noticesRef, id, data);
}

export async function deleteNotice(id: string) {
  return deleteDocument(noticesRef, id);
}
