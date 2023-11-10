import * as S from '@src/modules/home/ui/styles';
import React from 'react';
import { LOGOUT } from '@src/constants';
import { useAppSelector } from '@src/hooks';
import { UserSelector } from '@src/modules/auth/store/selectors';
import auth from '@react-native-firebase/auth';
import { authActions } from '@src/modules/auth/store';

const Footer = () => {
  console.log('Footer');

  const user = useAppSelector(UserSelector);

  const onPressLogout = () => {
    auth().signOut();
    dispatch(authActions.signOut());
  };

  return (
    <S.HeaderWrapper>
      <S.Email>{user?.email}</S.Email>
      <S.LogoutWrapper onPress={onPressLogout}>
        <S.LogoutBtn source={LOGOUT} />
      </S.LogoutWrapper>
    </S.HeaderWrapper>
  );
};

export default Footer;
