import { createContext, useContext } from 'react';
import UserStore from './userStore';
import SongStore from './songStore';

interface Store {
  userStore: UserStore;
  songStore: SongStore;
}

export const store: Store = {
  userStore: new UserStore(),
  songStore: new SongStore(),
}

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext)
}