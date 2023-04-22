import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AuthForm } from '@src/modules/auth/ui/components/authForm';
import * as Style from '@src/modules/auth/ui/screens/styles/styles';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '@src/modules/auth/store/action';
import { useAppDispatch } from '@src/hooks';

const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function SignUpScreen() {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const { reset } = useForm();

  const onPressLogin = () => {
    reset();
    navigation.navigate('LoginScreen');
  };

  const onPressSignUp = async (email: string, password: string) => {
    dispatch(signUp({ email, password }));
  };

  return (
    <DismissKeyboard>
      <Style.Main>
        <AuthForm textInButton={'Sign Up'} onPressButton={onPressSignUp} />

        <Style.QuestionWrapper>
          <Style.Question>Уже есть аккаунт?</Style.Question>
        </Style.QuestionWrapper>

        <Style.LinkWrapper onPress={onPressLogin}>
          <Style.Link>Login</Style.Link>
        </Style.LinkWrapper>
      </Style.Main>
    </DismissKeyboard>
  );
}
