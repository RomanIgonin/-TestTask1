import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface AuthInitialState {
  User: FirebaseAuthTypes.User | null;
  isUserLoading: boolean;
}
