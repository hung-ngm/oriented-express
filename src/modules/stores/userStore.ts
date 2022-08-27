import { auth, signInWithPhoneNumber, db } from '../utils/firebase';
import { User } from '../../types/user';
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged, User as FirebaseUser } from '@firebase/auth';
import { makeAutoObservable, runInAction, reaction } from 'mobx';
import { AuthSessionResult } from 'expo-auth-session';
import { doc, setDoc, Unsubscribe } from '@firebase/firestore';
import { store } from './store';

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

        }
      }
    )
  }

  signInGoogle = async (response: AuthSessionResult) => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      await signInWithCredential(auth, credential);
    }
  }

  // signUpMobilePhone = async () => {
  //   this.loading = true;

  //   const appVerifier = window.recaptchaVerifier;

  //   if (this.user && this.user.phoneNumber) {
  //     await signInWithPhoneNumber(auth, this.user.phoneNumber, appVerifier);
  //   }

  //   runInAction(() => {
  //     this.loading = false;
  //   });
  // }

  signOut = async () => {
    if (this.user) {
      await auth.signOut();
    }
  }

  setUser = (user : FirebaseUser | null) => {
    if (user) {
      this.user = {
        uid: user.uid,
        email: user.email!,
        phoneNumber: user.phoneNumber!
      };
    } else {
      this.user = null;
    }
    this.userLoading = false;
  }
}

export default UserStore;