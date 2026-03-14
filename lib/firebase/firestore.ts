import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  type DocumentData,
  type QueryConstraint,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

// 컬렉션 참조
export const worksRef = collection(db, 'works');
export const inquiriesRef = collection(db, 'inquiries');
export const noticesRef = collection(db, 'notices');

// 범용 CRUD
export async function getDocuments(
  collectionRef: ReturnType<typeof collection>,
  ...constraints: QueryConstraint[]
): Promise<Record<string, unknown>[]> {
  const q = constraints.length > 0
    ? query(collectionRef, ...constraints)
    : collectionRef;
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getDocumentById(
  collectionRef: ReturnType<typeof collection>,
  id: string,
): Promise<Record<string, unknown> | null> {
  const docRef = doc(collectionRef, id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
}

export async function createDocument(
  collectionRef: ReturnType<typeof collection>,
  data: DocumentData,
) {
  const docRef = await addDoc(collectionRef, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateDocument(
  collectionRef: ReturnType<typeof collection>,
  id: string,
  data: DocumentData,
) {
  const docRef = doc(collectionRef, id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteDocument(
  collectionRef: ReturnType<typeof collection>,
  id: string,
) {
  const docRef = doc(collectionRef, id);
  await deleteDoc(docRef);
}

export { where, orderBy, query };
