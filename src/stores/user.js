import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { defineStore } from "pinia";
import router from "../router.js";
import { auth } from "../firebaseConfig.js";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: {},
    loadingUser: false,
    loadingSession:false
  }),
  getters: {},
  actions: {
    async registerUser(email, pass) {
      this.loadingUser = true;
      try {
        //Este metodo se le pasa el obj 'auth', email y pass para que nos devuelva el usuario creado {el obj auth, se inicia en firebaseconfig}
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          pass
        );
        this.userData = { email: user.email, uid: user.uid };
        router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async loginUser(email, pass) {
      this.loadingUser = true;
      try {
        //Este metodo se le pasa el obj 'auth', email y pass para que nos devuelva el usuario creado {el obj auth, se inicia en firebaseconfig}
        const { user } = await signInWithEmailAndPassword(auth, email, pass);
        this.userData = { email: user.email, uid: user.uid };
        router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async logOut() {
      this.loadingUser = true;
      try {
        await signOut(auth);
        this.userData = {};
        router.push("/login");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    currentUser() {
      let unsubscribe;
      return new Promise((resolve, reject) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            this.userData = { email: user.email, uid: user.uid };
          } else {
            this.userData = null;
          }
          resolve(user);
        });
      }).then((user) => {
        unsubscribe();
        return user;
      });
    },
  },
});
