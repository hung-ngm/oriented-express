import { createContext, useContext } from 'react';
import UserStore from './userStore';
import SongStore from './songStore';
import ProfileStore from './profileStore';

interface Store {
  userStore: UserStore;
  songStore: SongStore;
  profileStore: ProfileStore;
}

export const store: Store = {
  userStore: new UserStore(),
  songStore: new SongStore(),
  profileStore: new ProfileStore(),
}

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext)
}