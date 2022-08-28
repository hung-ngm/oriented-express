import { useStore } from '../modules/stores/store';

const useAuth = () => {
    const { signOut } = useStore().userStore;
    return {
      signOut
    };
}

export default useAuth;