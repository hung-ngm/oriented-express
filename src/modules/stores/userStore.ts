import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  User as FirebaseUser,
} from "@firebase/auth";
import { doc, serverTimestamp, setDoc, Unsubscribe } from "@firebase/firestore";
import { AuthSessionResult } from "expo-auth-session";
import { makeAutoObservable, reaction } from "mobx";
// import * as RootNavigation from "../modules/navigation/components/RootNavigation";
import { User } from "../../types/user";
import { auth, db } from "../utils/firebase";
import { store } from "./store";

class UserStore {
  user: User | null = null;
  userLoading = true;
  unsubscribeUser: Unsubscribe;

  constructor() {
    makeAutoObservable(this);

    this.unsubscribeUser = onAuthStateChanged(auth, (user) => {
      this.setUser(user);
    });

    reaction(
      () => this.user,
      (user) => {
        if (user) {
          store.songStore.subscribeStore();
          store.profileStore.subscribeStore(user);
        }
      }
    );
  }

  signInGoogle = async (response: AuthSessionResult) => {
    console.log('response', response);
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      await signInWithCredential(auth, credential);
    }
  };

  signOut = async () => {
    if (this.user) {
      await auth.signOut();
    }
  };

  setUser = (user: FirebaseUser | null) => {
    if (user) {
      this.user = {
        uid: user.uid,
        email: user.email!,
      };
    } else {
      this.user = null;
    }

    this.userLoading = false;
  };

  updateUserProfile = async (image: string, name: string, job: string, age: number) => {
    if (!this.user) return;

    await setDoc(doc(db, "users", this.user.uid), {
      id: this.user.uid,
      name: name,
      photoUrl: image,
      job,
    });

    // RootNavigation.navigate("Home");
  };
}

export default UserStore;