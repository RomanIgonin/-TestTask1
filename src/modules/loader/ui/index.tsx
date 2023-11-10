import * as S from '@src/modules/loader/ui/styles';
import { ActivityIndicator } from 'react-native';
import * as React from 'react';

export const Loader = () => {
  console.log('Loader');

  return (
    <S.LoaderContainer>
      <ActivityIndicator size={'large'} />
      <S.LoaderText>Loading</S.LoaderText>
    </S.LoaderContainer>
  );
};
