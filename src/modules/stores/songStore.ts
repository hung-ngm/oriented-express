import { Song } from '../../types/song';
import { makeAutoObservable, runInAction, reaction } from 'mobx';
import {
  doc,
  addDoc,
  QueryDocumentSnapshot,
  QuerySnapshot,
  DocumentData,
  onSnapshot,
  query,
  collection,
  limit,
  Unsubscribe,
  setDoc
} from '@firebase/firestore';
import { db } from '../utils/firebase';
import { store } from './store';

class SongStore {
    currentSong: Song | null = null;
    songLoading = true;
    unsubscribeSongs?: Unsubscribe;
    songsMap =  new Map<String, Song>();

    constructor() {
        makeAutoObservable(this);

    }

    get songs() {
        return Array.from(this.songsMap.values());
    }

    subscribeStore = async () => {
        try {
            this.songLoading = true;
            this.unsubscribeSongs && this.unsubscribeSongs();

            this.unsubscribeSongs = onSnapshot(
                query(
                    collection(db, 'songs'),
                ),
                this.setSongs,
            );
        } catch (error) {
            console.log(error);
        }
    }

    resetStore = () => {
        this.currentSong = null;
        this.songLoading = true;

        if (this.unsubscribeSongs) {
            this.unsubscribeSongs();
            this.unsubscribeSongs = undefined;
        }
    }

    setSongs = (snap: QuerySnapshot<DocumentData>) => {
        snap.docs.forEach((doc) => {
          if (doc.exists()) {
            this.songsMap.set(doc.id, this.getSong(doc))
          }
        })
      }

    createSong = async (song: Song) => {
        const { user } = store.userStore;
        if (!song || !user) return;
        try {
            await setDoc(doc(db, "songs", song.id), song);
        } catch (err) {
            console.log(err);
        }       
        runInAction(() => {
            this.songLoading = false;
        });
    }

    getSong = (snap: QueryDocumentSnapshot<DocumentData>): Song => {
        return {
            id: snap.id,
            name: snap.data().name,
            title: snap.data().title,
            authors: snap.data().authors,
            album: snap.data().album,
            imageUrl: snap.data().imageUrl,
            previewUrl: snap.data().previewUrl,
        }
    }
}

export default SongStore;