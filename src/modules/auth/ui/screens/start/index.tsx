import React from 'react';
import * as S from '@src/modules/auth/ui/screens/start/styles';
import { useNavigation } from '@react-navigation/native';
import UDButton from '@src/modules/ud-ui/button';

export default function StartScreen() {
  const navigation = useNavigation<any>();

  const onPressStart = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <S.Main>
      <UDButton label={'Start'} onPress={onPressStart} />
    </S.Main>
  );
}
