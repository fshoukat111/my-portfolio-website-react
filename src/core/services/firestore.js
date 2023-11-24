import firestore from 'firebase/firestore';

const db = firestore.Firestore;

const addDocument = async (collectionPath, document) => {
  const collectionRef = db.collection(collectionPath);
  const docRef = await collectionRef.add(document);
  return docRef.id;
};

const updateDocument = async (collectionPath, documentId, document) => {
  const docRef = db.document(collectionPath, documentId);
  await docRef.update(document);
};

const getDocuments = async (collectionPath) => {
  const collectionRef = db.collection(collectionPath);
  const snapshot = await collectionRef.get();
  return snapshot.docs.map(doc => doc.data());
};

const deleteDocument = async (collectionPath, documentId) => {
  const docRef = db.document(collectionPath, documentId);
  await docRef.delete();
};

const getDocument = async (collectionPath, documentId) => {
  const docRef = db.document(collectionPath, documentId);
  const snapshot = await docRef.get();
  return snapshot.data();
};

export { addDocument, updateDocument, getDocuments, deleteDocument, getDocument };