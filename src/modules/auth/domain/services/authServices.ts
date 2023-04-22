import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

class AuthServices {
  public async login(email: string, password: string) {
    return await auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => response.user)
      .catch(error => {
        console.log('Error login: ' + error);
        Alert.alert('Invalid login or password');
      });
  }

  public async signUp(email: string, password: string) {
    return await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => response.user)
      .catch(error => {
        console.log('Error signUp: ' + error);
        Alert.alert('Invalid login or password');
      });
  }
}

const authServices = new AuthServices();
export default authServices;
