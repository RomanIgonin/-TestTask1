import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AuthForm } from '@src/modules/auth/ui/components/authForm';
import { useForm } from 'react-hook-form';
import * as S from '@src/modules/auth/ui/screens/styles/styles';
import { useNavigation } from '@react-navigation/native';
import { login } from '@src/modules/auth/store/action';
import { useAppDispatch } from '@src/hooks';

const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { reset } = useForm();

  const onPressSignUp = () => {
    reset();
    navigation.navigate('SignUpScreen');
  };

  const onPressLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  return (
    <DismissKeyboard>
      <S.Main>
        <AuthForm textInButton={'Login'} onPressButton={onPressLogin} />

        <S.QuestionWrapper>
          <S.Question>Еще не зарегистрированны?</S.Question>
        </S.QuestionWrapper>

        <S.LinkWrapper onPress={onPressSignUp}>
          <S.Link>Sign up</S.Link>
        </S.LinkWrapper>
      </S.Main>
    </DismissKeyboard>
  );
}
