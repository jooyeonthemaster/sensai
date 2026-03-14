import {
  worksRef,
  getDocuments,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
  where,
  orderBy,
} from '@/lib/firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

export async function getAllWorks() {
  return getDocuments(worksRef, orderBy('sortOrder', 'asc'));
}

export async function getPublishedWorks() {
  return getDocuments(worksRef, where('isPublished', '==', true), orderBy('sortOrder', 'asc'));
}

export async function getFeaturedWorks() {
  return getDocuments(
    worksRef,
    where('featured', '==', true),
    where('isPublished', '==', true),
  );
}

export async function getWorkById(id: string) {
  return getDocumentById(worksRef, id);
}

export async function getWorkBySlug(slug: string) {
  const docs = await getDocuments(worksRef, where('slug', '==', slug));
  return docs.length > 0 ? docs[0] : null;
}

export async function createWork(data: Record<string, unknown>) {
  return createDocument(worksRef, data);
}

export async function updateWork(id: string, data: Record<string, unknown>) {
  return updateDocument(worksRef, id, data);
}

export async function deleteWork(id: string) {
  return deleteDocument(worksRef, id);
}

export async function toggleFeatured(id: string, featured: boolean) {
  const docRef = doc(db, 'works', id);
  await updateDoc(docRef, { featured });
}
