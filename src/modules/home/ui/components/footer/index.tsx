import * as S from '@src/modules/home/ui/styles';
import React from 'react';
import { Alert, Linking } from 'react-native';
import Config from 'react-native-config';

const Footer = () => {
  console.log('Footer');

  const resourceUrl = Config.RESOURCE_URL;

  const onPressLink = async () => {
    const supported = await Linking.canOpenURL(resourceUrl);
    if (supported) {
      await Linking.openURL(resourceUrl);
    } else {
      Alert.alert(`URL is broken: ${resourceUrl}`);
    }
  };

  return (
    <S.FooterWrapper>
      <S.LinkWrapper onPress={onPressLink}>
        <S.TextLink>Ссылка на ресурс</S.TextLink>
        <S.Link>{resourceUrl}</S.Link>
      </S.LinkWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
