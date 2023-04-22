import * as S from '@src/modules/loader/ui/styles';
import { ActivityIndicator } from 'react-native';
import * as React from 'react';

export default function Loader() {
  return (
    <S.LoaderContainer>
      <ActivityIndicator size={'large'} />
      <S.LoaderText>Loading</S.LoaderText>
    </S.LoaderContainer>
  );
}
