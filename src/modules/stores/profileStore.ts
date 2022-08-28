import {
    doc,
    DocumentData,
    onSnapshot,
    QueryDocumentSnapshot,
    QuerySnapshot,
    Unsubscribe,
  } from "@firebase/firestore";
  import { makeAutoObservable, runInAction } from "mobx";
  import { Profile } from "../../types/profile";
  import { User } from "../../types/user";
  import { db } from "../utils/firebase";
  import { store } from "./store";
  
  class ProfileStore {
    profileRegistery = new Map<string, Profile>();
    userProfile: Profile | null = null;
    profileLoading = true;
    passes: { id: string }[] = [];
    unsubscribeUserProfile?: Unsubscribe;
  
    constructor() {
      makeAutoObservable(this);
    }
    
    resetStore = () => {
      this.profileRegistery.clear();
      this.userProfile = null;
      this.profileLoading = true;
  
      if (this.unsubscribeUserProfile) {
        this.unsubscribeUserProfile();
        this.unsubscribeUserProfile = undefined;
      }
    };
  
    subscribeStore = async (user: User) => {
      this.unsubscribeUserProfile = onSnapshot(
        doc(db, "users", user.uid),
        (snap) => {
          runInAction(() => {
            if (snap.exists()) {
              this.userProfile = this.getProfile(snap);
            } else {
              this.userProfile = null;
            }
            this.profileLoading = false;
          });
        }
      );
  
    };
  
    getProfile = (snap: QueryDocumentSnapshot<DocumentData>): Profile => {
      return {
        id: snap.data().id,
        name: snap.data().name,
        photoUrl: snap.data().photoUrl,
      };
    };
    
}
  
export default ProfileStore;