import React from 'react';
import * as S from '@src/modules/noConnection/ui/styles';
import { NO_CONNECTION } from '@src/constants';

export default function NoConnectionScreen() {
  return (
    <S.Main>
      <S.Icon source={NO_CONNECTION} />
      <S.InfoText>Проверьте интернет соединение!</S.InfoText>
    </S.Main>
  );
}
