import { defineStore } from "pinia";
import {
  query,
  collection,
  getDocs,
  where,
  setDoc,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { db } from "../firebaseConfig.js";
import { auth } from "../firebaseConfig";
import { nanoid } from "nanoid";

export const useDatabaseStore = defineStore("database", {
  state: () => ({
    documents: [],
    loadingData: false,
  }),
  actions: {
    async getUrls() {
      if (this.documents.length !== 0) {
        return;
      }
      this.loadingData = true;
      try {
        const q = query(
          collection(db, "urls"),
          where("user", "==", auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          this.documents.push({
            id: doc.id,
            ...doc.data(),
          });
          //console.log(doc.id, doc.data());
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingData = false;
      }
    },
    async addUrl(name) {
      try {
        const objDoc = {
          name,
          short: nanoid(6),
          user: auth.currentUser.uid,
        };
        const docRef = await addDoc(collection(db, "urls"), objDoc);
        // console.log(docRef)
        this.documents.push({
          ...objDoc,
          id: docRef.id,
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
    async editarUrl(id, name) {
      try {
        const docRef = doc(db, "urls", id);
        await updateDoc(docRef, { name });

        this.documents = this.documents.map((item) =>
          item.id === id ? { ...item, name: name } : item
        );
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUrl(id) {
      try {
        const docRef = doc(db, "urls", id);
        await deleteDoc(docRef);
        this.documents = this.documents.filter((item) => item.id !== id);
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  },
});
