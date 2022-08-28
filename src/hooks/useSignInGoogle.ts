import { GOOGLE_WEB_CLIENT_ID } from '@env';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import { useStore } from '../modules/stores/store';

const useSignInGoogle = () => {
  const { signInGoogle } = useStore().userStore;

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId: GOOGLE_WEB_CLIENT_ID,
    webClientId: GOOGLE_WEB_CLIENT_ID,
  });

  useEffect(() => {
    if (response) {
      console.log('response useSignInGoogle', response);
      signInGoogle(response);
    }
  }, [response]);

  const signIn = () => {
    try {
      promptAsync();
    } catch (err) {
      console.log('error prompt async', err)
    }
  }

  return [signIn, !request] as const; 
}

export default useSignInGoogle;